import { useCurrentFrame } from "remotion";
import type { SubtitleCue } from "../types";
import { FG } from "../constants";

interface Props {
  cues: SubtitleCue[];
}

export const SubtitleOverlay: React.FC<Props> = ({ cues }) => {
  const frame = useCurrentFrame();
  const activeCue = cues.find(
    (c) => frame >= c.startFrame && frame <= c.endFrame,
  );

  if (!activeCue) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 80,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
          borderRadius: 8,
          padding: "12px 28px",
          maxWidth: 1200,
        }}
      >
        <span
          style={{
            color: FG,
            fontSize: 36,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
            lineHeight: 1.5,
          }}
        >
          {activeCue.text}
        </span>
      </div>
    </div>
  );
};
