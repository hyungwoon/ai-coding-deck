import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const MUTED = "#a1a1aa";

export const S00Title: React.FC = () => {
  const frame = useCurrentFrame();

  const labelOpacity = interpolate(frame, [5, 25], [0, 1], { extrapolateRight: "clamp" });
  const labelY = interpolate(frame, [5, 25], [16, 0], { extrapolateRight: "clamp" });

  const titleOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [15, 45], [32, 0], { extrapolateRight: "clamp" });

  const mutedOpacity = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: "clamp" });
  const mutedY = interpolate(frame, [30, 55], [20, 0], { extrapolateRight: "clamp" });

  const subtitleOpacity = interpolate(frame, [45, 70], [0, 1], { extrapolateRight: "clamp" });
  const subtitleY = interpolate(frame, [45, 70], [20, 0], { extrapolateRight: "clamp" });

  const scrollOpacity = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 120px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 1400 }}>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 20,
            letterSpacing: "0.2em",
            color: MUTED,
            textTransform: "uppercase",
            marginBottom: 24,
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
          }}
        >
          AI Coding Ecosystem · 2026
        </p>

        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            margin: 0,
            lineHeight: 1.15,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          AI는 어떻게 작동하고
        </h1>

        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: MUTED,
            margin: 0,
            lineHeight: 1.15,
            opacity: mutedOpacity,
            transform: `translateY(${mutedY}px)`,
          }}
        >
          어떻게 쓰는가
        </h1>

        <p
          style={{
            fontSize: 26,
            color: MUTED,
            marginTop: 40,
            lineHeight: 1.7,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          LLM의 작동 원리부터 에이전트 생태계, 그리고 실제 진화 경로까지 —
          <br />
          처음 접하는 사람도 읽을 수 있게 정리했습니다.
        </p>

        <div style={{ marginTop: 64, opacity: scrollOpacity }}>
          <p style={{ fontSize: 18, color: MUTED, marginBottom: 8, letterSpacing: "0.2em" }}>SCROLL</p>
          <span style={{ fontSize: 28, color: MUTED }}>↓</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
