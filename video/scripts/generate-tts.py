"""Generate TTS audio + subtitle metadata for all lecture segments."""
import asyncio
import json
import os
import sys

import edge_tts

VOICE = "ko-KR-SunHiNeural"
FPS = 30
AUDIO_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "audio")

# Parse lecture TS files to extract segments
def parse_segments():
    """Read all segment-*.ts files and extract narration data."""
    import re
    lecture_dir = os.path.join(os.path.dirname(__file__), "..", "..", "lecture")
    segments = []

    filenames = [f"segment-{i}.ts" for i in range(1, 5)] + ["segment-new.ts"]
    for filename in filenames:
        filepath = os.path.join(lecture_dir, filename)
        with open(filepath, "r") as f:
            content = f.read()

        # Find slideId
        slide_ids = re.findall(r'slideId:\s*"([^"]+)"', content)
        # Find title
        titles = re.findall(r'title:\s*"([^"]+)"', content)
        # Find narration (handles both "..." and `...` strings)
        narrations = re.findall(r'narration:\s*(?:`([\s\S]*?)`|"([\s\S]*?)")\s*,', content)

        for idx, slide_id in enumerate(slide_ids):
            title = titles[idx] if idx < len(titles) else slide_id
            if idx < len(narrations):
                # narrations[idx] is a tuple: (backtick_match, quote_match)
                narration = narrations[idx][0] or narrations[idx][1]
            else:
                narration = ""
            # Clean up
            narration = narration.replace('\\"', '"').replace("\\'", "'").strip()
            if narration:
                segments.append({"slideId": slide_id, "title": title, "narration": narration})

    return segments


def sec_to_frame(sec: float) -> int:
    return round(sec * FPS)


async def generate_slide(slide_id: str, narration: str) -> dict:
    """Generate TTS audio and collect word boundary metadata."""
    audio_path = os.path.join(AUDIO_DIR, f"{slide_id}.mp3")
    communicate = edge_tts.Communicate(narration, VOICE)

    cues = []

    with open(audio_path, "wb") as f:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])
            elif chunk["type"] == "SentenceBoundary":
                offset_sec = chunk["offset"] / 10_000_000
                duration_sec = chunk["duration"] / 10_000_000
                text = chunk["text"]
                cues.append({
                    "text": text.strip(),
                    "startFrame": sec_to_frame(offset_sec),
                    "endFrame": sec_to_frame(offset_sec + duration_sec),
                })

    # Get actual audio duration from file size (MP3 96kbps ≈ 12000 bytes/sec)
    file_size = os.path.getsize(audio_path)
    duration_sec = file_size / 12000
    duration_frames = sec_to_frame(duration_sec)

    return {
        "audioFile": f"audio/{slide_id}.mp3",
        "durationSec": round(duration_sec, 1),
        "durationFrames": duration_frames,
        "cues": cues,
    }


async def main():
    os.makedirs(AUDIO_DIR, exist_ok=True)
    segments = parse_segments()

    if not segments:
        print("ERROR: No segments parsed. Check lecture/*.ts files.")
        sys.exit(1)

    print(f"Generating TTS for {len(segments)} slides...")

    slides = []
    for seg in segments:
        sid = seg["slideId"]
        print(f"  {sid}: {len(seg['narration'])}자...", end="", flush=True)
        result = await generate_slide(sid, seg["narration"])
        result["slideId"] = sid
        result["title"] = seg["title"]
        slides.append(result)
        print(f" → {result['durationSec']}s ({result['durationFrames']} frames, {len(result['cues'])} cues)")

    manifest = {
        "slides": slides,
        "totalDurationFrames": sum(s["durationFrames"] for s in slides),
    }

    manifest_path = os.path.join(AUDIO_DIR, "manifest.json")
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    total_min = round(manifest["totalDurationFrames"] / FPS / 60, 1)
    print(f"\nDone! {len(slides)} slides, {total_min} minutes total")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    asyncio.run(main())
