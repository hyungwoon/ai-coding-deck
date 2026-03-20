import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1f1f1f";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const CARD_BG = "#262626";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const fade = (frame: number, s: number, e: number) =>
  interpolate(frame, [s, e], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, s: number, e: number, d = 24) =>
  interpolate(frame, [s, e], [d, 0], { extrapolateRight: "clamp" });

const attentionRows = [
  { left: "그", right: "찼다", weight: "강", thick: true, primary: true },
  { left: "공을", right: "찼다", weight: "중", thick: false, primary: false },
  { left: "그", right: "공을", weight: "약", thick: false, primary: false, faded: true },
];

const loopSteps = [
  { n: "1.", text: "확률 분포 계산" },
  { n: "2.", text: "최고 확률 토큰 선택" },
  { n: "3.", text: "컨텍스트에 추가" },
  { n: "4.", text: "반복 → 스트리밍 출력", bold: true },
];

const conceptCards = [
  { title: "컨텍스트 윈도우", body: "한 번에 처리할 수 있는 텍스트 한도. Claude 최대 200K 토큰 — A4 약 500장." },
  { title: "할루시네이션", body: '모르는 것도 그럴듯하게 지어냄. "패턴 예측" 구조이기 때문. 중요 정보는 검증 필수.' },
  { title: "프롬프트 엔지니어링", body: "어떻게 질문하느냐가 출력 품질을 결정. 역할 부여, 예시, 단계 분해로 결과가 달라진다." },
];

export const S03Reasoning: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, opacity: fade(frame, 5, 22), transform: `translateY(${slide(frame, 5, 22)}px)` }}>
        STEP 3 · 4 · 추론과 출력
      </p>

      <h2 style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.02em", color: FG, margin: "0 0 36px", opacity: fade(frame, 12, 35), transform: `translateY(${slide(frame, 12, 35)}px)` }}>
        어텐션 추론과{" "}
        <span style={{ color: MUTED }}>스트리밍 출력</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20, opacity: fade(frame, 28, 52), transform: `translateY(${slide(frame, 28, 52)}px)` }}>
        {/* Attention */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 14 }}>
            STEP 3 · 어텐션 그래프로 의미 연결
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
            각 토큰은 다른 모든 토큰과{" "}
            <span style={{ color: FG, fontWeight: 600 }}>"얼마나 관련 있는가"</span>를 계산한다.
            이 관계망을 수백 개 레이어에서 반복 계산해{" "}
            <span style={{ color: FG, fontWeight: 600 }}>문맥 속 의미</span>를 추론한다.
          </p>
          <div style={{ fontFamily: "monospace", fontSize: 13, background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 20 }}>
            <p style={{ fontSize: 10, color: "rgba(161,161,170,0.6)", letterSpacing: "0.12em", marginBottom: 16 }}>예: "그가 공을 찼다"</p>
            {attentionRows.map(({ left, right, weight, thick, primary: p, faded }) => (
              <div key={`${left}-${right}`} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ color: p ? FG : faded ? "rgba(161,161,170,0.6)" : MUTED, fontWeight: p ? 700 : 400, width: 36, flexShrink: 0 }}>{left}</span>
                <div style={{ flex: 1, height: thick ? 3 : 1, background: p ? "rgba(167,139,250,0.7)" : faded ? "rgba(255,255,255,0.15)" : "rgba(167,139,250,0.3)", borderRadius: 2 }} />
                <span style={{ color: FG, fontWeight: 700, width: 40, flexShrink: 0 }}>{right}</span>
                <span style={{ fontSize: 10, color: p ? PRIMARY : faded ? "rgba(161,161,170,0.4)" : MUTED, width: 16 }}>{weight}</span>
              </div>
            ))}
            <p style={{ fontSize: 10, color: "rgba(161,161,170,0.4)", textAlign: "center", marginTop: 4 }}>선이 굵을수록 강한 연관 (attention weight)</p>
          </div>
        </div>

        {/* Streaming output */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 14 }}>
            STEP 4 · 토큰 하나씩 생성 → 스트리밍
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 14 }}>
            추론 결과로{" "}
            <span style={{ color: FG, fontWeight: 600 }}>다음에 올 토큰의 확률 분포</span>가 나온다.
            가장 높은 확률의 토큰을 선택 → 컨텍스트에 추가 → 다시 추론. 이 과정을 반복하며 한 글자씩 생성.
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
            ChatGPT·Claude에서 답변이 흘러나오듯 표시되는 이유가 이 구조 때문이다.
          </p>
          <div style={{ fontFamily: "monospace", fontSize: 13, background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 20 }}>
            <p style={{ fontSize: 10, color: "rgba(161,161,170,0.6)", letterSpacing: "0.12em", marginBottom: 14 }}>토큰 생성 루프</p>
            {loopSteps.map(({ n, text, bold }) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ color: PRIMARY, fontFamily: "monospace", width: 20, flexShrink: 0 }}>{n}</span>
                <span style={{ color: bold ? FG : MUTED, fontWeight: bold ? 600 : 400 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom 3-cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, opacity: fade(frame, 52, 74), transform: `translateY(${slide(frame, 52, 74)}px)` }}>
        {conceptCards.map(({ title, body }) => (
          <div key={title} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 22px" }}>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 8 }}>CONCEPT</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: FG, marginBottom: 8 }}>{title}</p>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
