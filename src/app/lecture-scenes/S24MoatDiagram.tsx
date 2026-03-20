import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

const bars = [
  { year: "2022", width: "90%", color: "rgba(248,113,113,0.6)" },
  { year: "2024", width: "55%", color: "rgba(228,228,231,0.6)" },
  { year: "2025", width: "28%", color: "rgba(96,165,250,0.6)" },
  { year: "2026→", width: "10%", color: "rgba(74,222,128,0.5)", label: "누구나" },
];

const moats = [
  {
    badge: "MOAT #1 ★",
    title: "문제 정의",
    sub: "Problem Definition",
    desc: "AI는 주어진 문제를 잘 푼다. 하지만 어떤 문제를 풀어야 하는지는 사람이 정한다. 도메인 전문성 + 사용자 공감 + 현실 감각의 합.",
    highlight: true,
  },
  {
    badge: "MOAT #2",
    title: "온톨로지 + 독점 데이터",
    sub: "Proprietary Data",
    desc: "같은 Claude를 써도 내 온톨로지가 주입된 에이전트와 없는 에이전트의 출력은 전혀 다르다. 모델은 공유되지만 데이터와 맥락은 나만의 것.",
    highlight: false,
  },
  {
    badge: "MOAT #3",
    title: "지속 학습",
    sub: "Continuous Learning",
    desc: "AI가 틀릴 때마다 온톨로지를 갱신하는 피드백 루프. RLVR이 모델을 자동 개선하듯, 이 루프가 나의 AI를 개선한다.",
    highlight: false,
  },
];

export const S24MoatDiagram: React.FC = () => {
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
          09 · 해자
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
          무엇이 진짜 경쟁 우위인가
        </h2>

        {/* Bar chart card */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "20px 24px",
            marginBottom: 20,
            ...fade(20),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              color: MUTED,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            에이전트 구축 진입장벽
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {bars.map(({ year, width, color, label }) => (
              <div key={year} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 16,
                    color: MUTED,
                    width: 44,
                    flexShrink: 0,
                  }}
                >
                  {year}
                </span>
                <div
                  style={{
                    height: 8,
                    borderRadius: 999,
                    background: color,
                    width: width,
                  }}
                />
                {label && (
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 16,
                      color: "rgba(74,222,128,0.8)",
                    }}
                  >
                    {label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 moat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            ...fade(40),
          }}
        >
          {moats.map(({ badge, title, sub, desc, highlight }) => (
            <div
              key={badge}
              style={{
                background: highlight ? "rgba(228,228,231,0.05)" : CARD_BG,
                border: highlight ? "1px solid rgba(228,228,231,0.2)" : `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "20px 22px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: highlight ? PRIMARY : MUTED,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {badge}
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: highlight ? PRIMARY : FG,
                  marginTop: 0,
                  marginBottom: 2,
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: MUTED,
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                {sub}
              </p>
              <p
                style={{
                  fontSize: 18,
                  color: MUTED,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
