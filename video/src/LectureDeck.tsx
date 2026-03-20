import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import type { Manifest } from "./types";
import { BG } from "./constants";
import { SubtitleOverlay } from "./components/SubtitleOverlay";
import { getSceneComponent } from "./scenes";

interface Props {
  manifest: Manifest;
}

export const LectureDeck: React.FC<Props> = ({ manifest }) => {
  let frameOffset = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {manifest.slides.map((slide) => {
        const from = frameOffset;
        frameOffset += slide.durationFrames;
        const SceneComponent = getSceneComponent(slide.slideId);

        return (
          <Sequence
            key={slide.slideId}
            from={from}
            durationInFrames={slide.durationFrames}
          >
            <AbsoluteFill>
              <SceneComponent />
              <Audio src={staticFile(slide.audioFile)} />
              <SubtitleOverlay cues={slide.cues} />
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
