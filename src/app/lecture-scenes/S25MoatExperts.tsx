import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

const experts = [
  {
    source: "Sequoia · a16z (VC)",
    title: "네트워크 효과 + 독점 데이터",
    desc: "AI 래퍼(Wrapper)는 해자가 없다. 진짜 해자는 남이 접근 못하는 데이터와 네트워크 효과. 사용자가 쌓아준 데이터가 모델을 개선하는 선순환.",
  },
  {
    source: "Peter Thiel (Zero to One)",
    title: "독점 — 경쟁하지 않는 것",
    desc: "경쟁은 가치를 파괴한다. 해자는 독점적 기술, 규모의 경제, 강력한 브랜드에서 나온다. AI로 무엇을 독점할 것인가가 질문이어야 한다.",
  },
  {
    source: "Marc Andreessen (a16z)",
    title: "배포 능력 · Go-to-Market",
    desc: "좋은 AI를 만드는 것보다 고객에게 빠르게 연결하는 유통·영업·관계망이 해자. 기술이 평준화될수록 배포 능력의 격차가 승패를 가른다.",
  },
  {
    source: "Sam Altman (OpenAI)",
    title: "신뢰 · 관계 자산",
    desc: "AGI 수준에 가까워질수록 대부분의 기술 해자는 무너진다. 그때 남는 것은 신뢰(Trust)와 관계. 브랜드와 평판이 마지막 해자가 된다.",
  },
];

export const S25MoatExperts: React.FC = () => {
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
          09 · 전문가 시각
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            marginTop: 0,
            marginBottom: 12,
            lineHeight: 1.2,
            ...fade(10),
          }}
        >
          전문가들의 시각
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 20,
            color: MUTED,
            marginBottom: 24,
            ...fade(18),
          }}
        >
          VC · 학계 · 빌더들의 시각 — 비판적으로 함께 읽기
        </p>

        {/* 2x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 16,
            ...fade(28),
          }}
        >
          {experts.map(({ source, title, desc }) => (
            <div
              key={source}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "20px 22px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: MUTED,
                  letterSpacing: "0.2em",
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {source}
              </p>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: PRIMARY,
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {title}
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

        {/* 종합 */}
        <div
          style={{
            background: "rgba(228,228,231,0.05)",
            border: "1px solid rgba(228,228,231,0.2)",
            borderRadius: 16,
            padding: "20px 22px",
            ...fade(48),
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: PRIMARY,
              marginTop: 0,
              marginBottom: 8,
            }}
          >
            종합하면
          </p>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, margin: 0 }}>
            전문가들이 공통으로 동의하는 것은 하나 —{" "}
            <span style={{ color: FG, fontWeight: 500 }}>AI 능력 자체는 해자가 아니다.</span>{" "}
            해자는 AI 위에서 쌓이는 것들: 독점 데이터, 네트워크 효과, 배포 능력, 신뢰.
            문제 정의는 전문가 모두가 동의하는 가장 확실한 해자 — AI 이전에도, 이후에도.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
