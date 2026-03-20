import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const CARD_BG = "#262626";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const fade = (frame: number, s: number, e: number) =>
  interpolate(frame, [s, e], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, s: number, e: number, d = 24) =>
  interpolate(frame, [s, e], [d, 0], { extrapolateRight: "clamp" });

const AGENT_PARTS = [
  { icon: "◉", label: "LLM", desc: "판단·추론 엔진" },
  { icon: "⚙", label: "툴 호출", desc: "파일·터미널·웹 실행" },
  { icon: "↻", label: "루프", desc: "실행→결과 확인→재시도" },
  { icon: "▣", label: "메모리", desc: "컨텍스트 유지" },
  { icon: "⬡", label: "MCP", desc: "외부 앱 연결 프로토콜" },
];

export const S04LlmVsAgent: React.FC = () => {
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
        02 · 에이전트 전환점
      </p>

      <h2 style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.02em", color: FG, margin: "0 0 36px", opacity: fade(frame, 12, 35), transform: `translateY(${slide(frame, 12, 35)}px)` }}>
        LLM과 AI 에이전트의{" "}
        <span style={{ color: MUTED }}>차이</span>
      </h2>

      {/* 2-column comparison */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20, opacity: fade(frame, 28, 52), transform: `translateY(${slide(frame, 28, 52)}px)` }}>
        {/* LLM alone */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "28px 32px" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 14 }}>LLM 단독</p>
          <p style={{ fontSize: 20, fontWeight: 600, color: FG, marginBottom: 20 }}>질문 → 답변. 끝.</p>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, marginBottom: 16 }}>
            입력이 들어오면 출력을 냄. 기억 없음. 행동 없음. 매번 처음부터.
          </p>
          <p style={{ fontSize: 17, color: FG, fontWeight: 600, margin: 0 }}>
            사람이 결과를 받아서 직접 실행해야 함.
          </p>
        </div>

        {/* AI Agent */}
        <div style={{ background: "rgba(167,139,250,0.06)", border: `1px solid rgba(167,139,250,0.25)`, borderRadius: 20, padding: "28px 32px" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 14 }}>AI 에이전트</p>
          <p style={{ fontSize: 20, fontWeight: 600, color: FG, marginBottom: 20 }}>태스크 → 계획 → 실행 → 검증. 반복.</p>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, marginBottom: 16 }}>
            LLM에{" "}
            <span style={{ color: FG, fontWeight: 600 }}>툴(파일·터미널·웹·API)</span>을
            연결하면 에이전트가 됨. 스스로 계획하고, 실행하고, 결과를 보고 재시도.
          </p>
          <p style={{ fontSize: 17, color: FG, fontWeight: 600, margin: 0 }}>
            사람은 목표만 주면 됨.
          </p>
        </div>
      </div>

      {/* Agent components */}
      <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px", opacity: fade(frame, 50, 72), transform: `translateY(${slide(frame, 50, 72)}px)` }}>
        <p style={{ fontFamily: "monospace", fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 20 }}>
          에이전트 = LLM + 이것들
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {AGENT_PARTS.map(({ icon, label, desc }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "10px 18px" }}>
              <span style={{ color: PRIMARY, fontSize: 16 }}>{icon}</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: FG }}>{label}</span>
              <span style={{ fontSize: 14, color: MUTED }}>— {desc}</span>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
