import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1f1f1f";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const CARD_BG = "#262626";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const fade = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, start: number, end: number, dist = 24) =>
  interpolate(frame, [start, end], [dist, 0], { extrapolateRight: "clamp" });

export const S01LlmDef: React.FC = () => {
  const frame = useCurrentFrame();

  const cards = [
    {
      label: "학습",
      title: "패턴 학습",
      body: "수천억 개 텍스트에서 언어 패턴을 학습. 사실 저장이 아닌 확률 분포를 학습한다.",
    },
    {
      label: "추론",
      title: "토큰 예측",
      body: "다음 토큰의 확률 분포를 계산하고 가장 자연스러운 답을 한 글자씩 생성한다.",
    },
    {
      label: "제약",
      title: "할루시네이션",
      body: "모르는 것도 그럴듯하게 지어낼 수 있다. 중요한 정보는 반드시 검증이 필요하다.",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* label */}
      <p style={{ fontFamily: "monospace", fontSize: 20, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, opacity: fade(frame, 5, 22), transform: `translateY(${slide(frame, 5, 22)}px)` }}>
        01 · LLM이란 무엇인가
      </p>

      {/* heading */}
      <h2 style={{ fontSize: 62, fontWeight: 700, color: FG, margin: "0 0 36px", letterSpacing: "-0.02em", opacity: fade(frame, 12, 35), transform: `translateY(${slide(frame, 12, 35)}px)` }}>
        LLM이란 무엇인가
      </h2>

      {/* definition card */}
      <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px", marginBottom: 20, opacity: fade(frame, 25, 50), transform: `translateY(${slide(frame, 25, 50)}px)` }}>
        <p style={{ fontFamily: "monospace", fontSize: 16, letterSpacing: "0.18em", color: PRIMARY, textTransform: "uppercase", marginBottom: 10 }}>
          Large Language Model — 대규모 언어 모델
        </p>
        <p style={{ fontSize: 26, color: MUTED, lineHeight: 1.7, margin: 0 }}>
          인터넷의 방대한 텍스트를 학습해서{" "}
          <span style={{ color: FG, fontWeight: 600 }}>"다음에 올 가장 자연스러운 단어"를 확률적으로 예측</span>
          하는 모델. 번역·요약·코드 작성·추론이 모두 이 하나의 원리에서 나온다.
          지식을 저장한 게 아니라, 패턴을 학습한 것.
        </p>
      </div>

      {/* tokenization card */}
      <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px", marginBottom: 20, opacity: fade(frame, 40, 62), transform: `translateY(${slide(frame, 40, 62)}px)` }}>
        <p style={{ fontFamily: "monospace", fontSize: 16, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>
          STEP 1 · 토큰화 — 텍스트를 숫자로
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, marginBottom: 14 }}>
              AI는 텍스트를 그대로 읽지 않는다. 먼저{" "}
              <span style={{ color: FG, fontWeight: 600 }}>토큰</span>이라는 단위로 쪼개고,
              각 토큰을{" "}
              <span style={{ color: FG, fontWeight: 600 }}>고유한 숫자 ID</span>로 변환한다.
            </p>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: 0 }}>
              토큰은 단어 전체가 아닌{" "}
              <span style={{ color: FG, fontWeight: 600 }}>의미 단위 조각</span>. 한국어는 음절 단위로 더 잘게 쪼개져 같은 내용이어도 토큰 수가 더 많이 소모된다.
            </p>
          </div>
          <div style={{ fontFamily: "monospace", fontSize: 20, background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 20 }}>
            <p style={{ color: MUTED, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>INPUT TEXT</p>
            <p style={{ color: FG, marginBottom: 8 }}>"Claude is powerful"</p>
            <p style={{ color: MUTED, marginBottom: 8 }}>↓ 토큰 분해</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {[
                { text: "Cl", accent: true },
                { text: "aude", accent: true },
                { text: "is", muted: true },
                { text: "power", neutral: true },
                { text: "ful", neutral: true },
              ].map(({ text, accent, muted: m }) => (
                <span key={text} style={{ background: accent ? "rgba(167,139,250,0.15)" : m ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.1)", color: accent ? PRIMARY : m ? MUTED : FG, padding: "2px 10px", borderRadius: 6, fontSize: 13 }}>
                  {text}
                </span>
              ))}
            </div>
            <p style={{ color: MUTED, marginBottom: 4 }}>↓ 숫자 ID 변환</p>
            <p style={{ color: MUTED, marginBottom: 4 }}>
              <span style={{ color: PRIMARY }}>3_274</span> · <span style={{ color: PRIMARY }}>8_102</span> · 318 · 6_244 · 913
            </p>
            <p style={{ color: MUTED, marginBottom: 4 }}>↓ 벡터 임베딩</p>
            <p style={{ color: MUTED, margin: 0 }}>[0.82, -0.31, 0.57 ... <span style={{ color: PRIMARY }}>×768차원</span>]</p>
          </div>
        </div>
      </div>

      {/* 3-card summary */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, opacity: fade(frame, 58, 80), transform: `translateY(${slide(frame, 58, 80)}px)` }}>
        {cards.map(({ label, title, body }) => (
          <div key={label} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 22px" }}>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 8 }}>{label}</p>
            <p style={{ fontSize: 22, fontWeight: 600, color: FG, marginBottom: 8 }}>{title}</p>
            <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.6, margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
