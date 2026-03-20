import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { segment1 } from "../../lecture/segment-1";
import { segment2 } from "../../lecture/segment-2";
import { segment3 } from "../../lecture/segment-3";
import { segment4 } from "../../lecture/segment-4";
import { FPS } from "../src/constants";
import type { SlideManifest, SubtitleCue, Manifest } from "../src/types";

const VOICE = "ko-KR-SunHiNeural";
const AUDIO_DIR = join(__dirname, "..", "public", "audio");

const allSegments = [...segment1, ...segment2, ...segment3, ...segment4];

interface WordBoundary {
  Type: string;
  Data: {
    Offset: number;
    Duration: number;
    text: { Text: string };
  };
}

function secToFrame(sec: number): number {
  return Math.round(sec * FPS);
}

async function generateSlideAudio(
  slideId: string,
  narration: string,
): Promise<SlideManifest> {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  const audioPath = join(AUDIO_DIR, `${slideId}.mp3`);
  const boundaries: WordBoundary[] = [];

  const readable = tts.toStream(narration);

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    readable.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    readable.on("metadata", (data: WordBoundary) => {
      if (data.Type === "WordBoundary" || data.Type === "SentenceBoundary") {
        boundaries.push(data);
      }
    });

    readable.on("end", () => {
      const buffer = Buffer.concat(chunks);
      writeFileSync(audioPath, buffer);

      // Estimate duration from MP3 bitrate (96kbps = 12000 bytes/sec)
      const durationSec = buffer.length / 12000;
      const durationFrames = secToFrame(durationSec);

      // Convert word boundaries to subtitle cues (sentence-level grouping)
      const cues: SubtitleCue[] = [];
      let sentenceText = "";
      let sentenceStart = -1;
      let sentenceEnd = 0;

      for (const b of boundaries) {
        const offsetSec = b.Data.Offset / 10_000_000;
        const durSec = b.Data.Duration / 10_000_000;
        const startFrame = secToFrame(offsetSec);
        const endFrame = secToFrame(offsetSec + durSec);

        if (b.Type === "SentenceBoundary") {
          // Flush previous sentence
          if (sentenceText && sentenceStart >= 0) {
            cues.push({ text: sentenceText.trim(), startFrame: sentenceStart, endFrame: sentenceEnd });
          }
          sentenceText = b.Data.text.Text;
          sentenceStart = startFrame;
          sentenceEnd = endFrame;
        } else {
          if (sentenceStart < 0) {
            sentenceStart = startFrame;
          }
          sentenceEnd = endFrame;
          if (!sentenceText) {
            sentenceText = b.Data.text.Text;
          }
        }
      }

      // Flush last sentence
      if (sentenceText && sentenceStart >= 0) {
        cues.push({ text: sentenceText.trim(), startFrame: sentenceStart, endFrame: sentenceEnd });
      }

      // If no boundaries captured, create a single cue
      if (cues.length === 0) {
        const sentences = narration.split(/[.!?]\s+/).filter(Boolean);
        const framesPerSentence = Math.floor(durationFrames / Math.max(sentences.length, 1));
        sentences.forEach((s, i) => {
          cues.push({
            text: s.trim(),
            startFrame: i * framesPerSentence,
            endFrame: (i + 1) * framesPerSentence,
          });
        });
      }

      resolve({
        slideId,
        title: slideId,
        audioFile: `audio/${slideId}.mp3`,
        durationSec: Math.round(durationSec * 10) / 10,
        durationFrames,
        cues,
      });
    });

    readable.on("error", reject);
  });
}

async function main() {
  if (!existsSync(AUDIO_DIR)) {
    mkdirSync(AUDIO_DIR, { recursive: true });
  }

  console.log(`Generating TTS for ${allSegments.length} slides...`);

  const slides: SlideManifest[] = [];

  for (const seg of allSegments) {
    console.log(`  ${seg.slideId}: ${seg.narration.length}자...`);
    const result = await generateSlideAudio(seg.slideId, seg.narration);
    result.title = seg.title;
    slides.push(result);
    console.log(`    → ${result.durationSec}s (${result.durationFrames} frames, ${result.cues.length} cues)`);
  }

  const manifest: Manifest = {
    slides,
    totalDurationFrames: slides.reduce((sum, s) => sum + s.durationFrames, 0),
  };

  const manifestPath = join(AUDIO_DIR, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  const totalMin = Math.round(manifest.totalDurationFrames / FPS / 60 * 10) / 10;
  console.log(`\nDone! ${slides.length} slides, ${totalMin} minutes total`);
  console.log(`Manifest: ${manifestPath}`);
}

main().catch(console.error);
