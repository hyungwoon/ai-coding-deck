import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

const same = [
  { icon: "💻", label: "컴퓨터" },
  { icon: "🤖", label: "AI 도구" },
  { icon: "🌐", label: "인터넷" },
];

const diff = [
  { icon: "🎯", label: "어떤 문제를 볼 것인가" },
  { icon: "🧠", label: "무엇을 알고 있는가" },
  { icon: "🔥", label: "무엇을 만들려 하는가" },
];

const eras = [
  {
    tag: "과거",
    title: "컴퓨터를 쓴다",
    desc: "한때 스펙이었다. 워드·엑셀 자격증이 경쟁력이었다. 지금은 공기. 도구는 반드시 평준화된다.",
    highlight: false,
  },
  {
    tag: "현재",
    title: "AI를 쓴다",
    desc: "지금은 특별해 보인다. 빠르게 평준화된다. 이 공부는 절대 우위가 아니라 기본기를 갖추는 것.",
    highlight: false,
  },
  {
    tag: "언제나",
    title: "본질을 안다",
    desc: "무엇을 만들지, 왜 만드는지. 이 질문은 AI가 대신할 수 없다. 여기서 격차가 만들어진다.",
    highlight: true,
  },
];

export const S27PhilosophyGap: React.FC = () => {
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
      <div style={{ maxWidth: 1400, width: "100%" }}>
        {/* Label */}
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.2em",
            color: MUTED,
            textTransform: "uppercase",
            marginBottom: 16,
            ...fade(0),
          }}
        >
          10 · 도구의 철학
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            marginTop: 0,
            marginBottom: 24,
            lineHeight: 1.2,
            ...fade(10),
          }}
        >
          도구는 같다. 격차는 어디서 오는가
        </h2>

        {/* Same vs Different */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 48px 1fr",
            gap: 0,
            alignItems: "center",
            marginBottom: 20,
            ...fade(24),
          }}
        >
          {/* 같은 것 */}
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: MUTED,
                letterSpacing: "0.2em",
                textAlign: "center",
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              둘 다 갖고 있는 것
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {same.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontSize: 20,
                    textAlign: "center",
                    color: FG,
                  }}
                >
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>

          {/* ≠ symbol */}
          <div style={{ textAlign: "center", fontSize: 24, color: MUTED }}>≠</div>

          {/* 다른 것 */}
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: PRIMARY,
                letterSpacing: "0.2em",
                textAlign: "center",
                marginTop: 0,
                marginBottom: 12,
              }}
            >
              격차를 만드는 것
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {diff.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(228,228,231,0.05)",
                    border: "1px solid rgba(228,228,231,0.2)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontSize: 20,
                    textAlign: "center",
                    color: PRIMARY,
                  }}
                >
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 era cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            ...fade(44),
          }}
        >
          {eras.map(({ tag, title, desc, highlight }) => (
            <div
              key={tag}
              style={{
                background: highlight ? "rgba(228,228,231,0.05)" : CARD_BG,
                border: highlight ? "1px solid rgba(228,228,231,0.2)" : `1px solid ${BORDER}`,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: highlight ? "1px solid rgba(228,228,231,0.15)" : `1px solid ${BORDER}`,
                  background: highlight ? "rgba(228,228,231,0.08)" : "transparent",
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: highlight ? PRIMARY : MUTED,
                    marginTop: 0,
                    marginBottom: 4,
                  }}
                >
                  {tag}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: highlight ? PRIMARY : FG,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
