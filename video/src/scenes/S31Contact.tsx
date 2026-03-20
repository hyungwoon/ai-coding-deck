import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

export const S31Contact: React.FC = () => {
  const frame = useCurrentFrame();

  const fade = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 25], [0, 1], { extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [delay, delay + 25], [20, 0], { extrapolateRight: "clamp" })}px)`,
  });

  const glowOpacity = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 120px",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          opacity: glowOpacity,
        }}
      >
        <div
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(228,228,231,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1400,
          width: "100%",
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 12,
            letterSpacing: "0.2em",
            color: MUTED,
            textTransform: "uppercase",
            marginBottom: 24,
            ...fade(0),
          }}
        >
          ANTIEGG · HYUNGWOON
        </p>

        {/* Main heading */}
        <h2
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            margin: 0,
            marginBottom: 16,
            lineHeight: 1.15,
            ...fade(16),
          }}
        >
          AI 코딩 생태계 관계도
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: MUTED,
            marginBottom: 40,
            maxWidth: 440,
            lineHeight: 1.6,
            ...fade(32),
          }}
        >
          이 문서에 대해 궁금한 게 있으신가요?
        </p>

        {/* Thank you */}
        <div
          style={{
            marginBottom: 64,
            ...fade(48),
          }}
        >
          <p
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: PRIMARY,
              margin: 0,
            }}
          >
            Thank you
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            ...fade(64),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(161,161,170,0.5)",
              margin: 0,
            }}
          >
            ↑↓ 키로 탐색
          </p>
          <div
            style={{
              width: 96,
              height: 1,
              background: BORDER,
            }}
          />
          <p
            style={{
              fontSize: 11,
              color: "rgba(161,161,170,0.4)",
              margin: 0,
            }}
          >
            © 2026 ANTIEGG HYUNGWOON
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
