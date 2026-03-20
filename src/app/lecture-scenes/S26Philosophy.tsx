import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

const timeline = [
  { icon: "✒️", label: "펜 · 종이", era: "~1900s", note: "인쇄가 특권이었다", highlight: false },
  { icon: "⌨️", label: "타자기 · 워드", era: "1990s", note: "컴활 자격증이 스펙이었다", highlight: false },
  { icon: "💻", label: "컴퓨터 · 인터넷", era: "2000s~", note: "지금은 공기처럼 당연", highlight: false },
  { icon: "🤖", label: "AI 에이전트", era: "지금 → 곧", note: "곧 공기처럼 당연해진다", highlight: true },
];

export const S26Philosophy: React.FC = () => {
  const frame = useCurrentFrame();

  const fade = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 25], [0, 1], { extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [delay, delay + 25], [20, 0], { extrapolateRight: "clamp" })}px)`,
  });

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
      <div style={{ maxWidth: 1400, width: "100%", textAlign: "center" }}>
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
          10 · 도구의 철학
        </p>

        {/* Main heading line 1 */}
        <h2
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            margin: 0,
            lineHeight: 1.2,
            ...fade(10),
          }}
        >
          글쓴이가 펜을 버렸다고
        </h2>

        {/* Main heading line 2 */}
        <h2
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: PRIMARY,
            margin: 0,
            marginBottom: 16,
            lineHeight: 1.2,
            ...fade(20),
          }}
        >
          그의 글이 사라지지 않는다
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 14,
            color: MUTED,
            maxWidth: 560,
            margin: "0 auto",
            marginBottom: 32,
            lineHeight: 1.7,
            ...fade(30),
          }}
        >
          종이 → 타자기 → 워드프로세서 → AI. 도구는 계속 바뀌었지만,
          무엇을 쓸지 결정한 것은 언제나 사람이었다.
        </p>

        {/* Timeline card */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "24px 28px",
            ...fade(40),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: MUTED,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 0,
              marginBottom: 20,
            }}
          >
            도구의 진화 — 바뀐 것과 바뀌지 않은 것
          </p>

          {/* Timeline items */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 0,
              position: "relative",
              marginBottom: 20,
            }}
          >
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                top: 24,
                left: "12.5%",
                right: "12.5%",
                height: 1,
                background: BORDER,
                zIndex: 0,
              }}
            />
            {timeline.map(({ icon, label, era, note, highlight }) => (
              <div
                key={label}
                style={{
                  textAlign: "center",
                  paddingLeft: 8,
                  paddingRight: 8,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: highlight
                      ? "1px solid rgba(228,228,231,0.4)"
                      : `1px solid ${BORDER}`,
                    background: highlight ? "rgba(228,228,231,0.15)" : "rgba(38,38,38,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                    fontSize: 20,
                  }}
                >
                  {icon}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: highlight ? PRIMARY : FG,
                    marginTop: 0,
                    marginBottom: 2,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: highlight ? PRIMARY : MUTED,
                    marginTop: 0,
                    marginBottom: 6,
                  }}
                >
                  {era}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: MUTED,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* 불변의 것 */}
          <div
            style={{
              borderRadius: 12,
              border: `1px dashed ${BORDER}`,
              background: "rgba(38,38,38,0.4)",
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 12, color: MUTED }}>도구가 바뀌어도 바뀌지 않은 것 → </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: FG }}>
              무엇을 말할지, 왜 말할지, 누구를 위한지
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
