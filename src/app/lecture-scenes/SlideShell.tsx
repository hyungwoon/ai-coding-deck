import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { BG, FG } from "./constants";

interface Props {
  children: React.ReactNode;
  dark?: boolean;
}

export const SlideShell: React.FC<Props> = ({ children, dark }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = spring({
    frame,
    fps,
    config: { damping: 30, stiffness: 120 },
  });

  const y = interpolate(translateY, [0, 1], [30, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: dark ? "#1f1f1f" : BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 120px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          opacity,
          transform: `translateY(${y}px)`,
          color: FG,
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
