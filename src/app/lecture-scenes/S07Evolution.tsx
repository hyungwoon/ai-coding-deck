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

const stages = [
  {
    num: "01",
    title: "단독 LLM 문답",
    tag: "브라우저만 있으면 됨",
    desc: 'ChatGPT·Claude.ai·Gemini에 질문하고 복붙. 자동화 없음. → "매번 반복하기 귀찮다"',
    tools: ["ChatGPT", "Claude.ai", "Gemini"],
    arrow: "자동화 욕구",
  },
  {
    num: "02",
    title: "노코드 자동화 연결",
    tag: "코딩 없이 앱 연결",
    desc: 'Gmail → AI 요약 → Slack 자동 전송 같은 플로우 구성. → "정해진 흐름 말고 판단도 맡기고 싶다"',
    tools: ["Zapier", "Make", "Notion AI"],
    arrow: "에이전트 접촉",
  },
  {
    num: "03",
    title: "Claude Code + 터미널 입문",
    tag: "AI가 직접 파일 건드림",
    desc: "말로 태스크 시키면 AI가 파일·폴더 직접 실행. 터미널이 낯설지만 결과가 나오니까 계속.",
    tools: ["Claude Code", "기본 Terminal", "Cursor / VS Code"],
    arrow: null,
  },
];

export const S07Evolution: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.02em", color: FG, margin: "0 0 12px", opacity: fade(frame, 5, 28), transform: `translateY(${slide(frame, 5, 28)}px)` }}>
        AI 툴 진화 경로
      </h2>

      <p style={{ fontSize: 26, color: MUTED, marginBottom: 44, opacity: fade(frame, 16, 36), transform: `translateY(${slide(frame, 16, 36)}px)` }}>
        대부분이 이 순서로 깊어진다
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {stages.map((s, idx) => {
          const staggerStart = 32 + idx * 18;
          const staggerEnd = staggerStart + 22;
          return (
            <React.Fragment key={s.num}>
              <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 18, overflow: "hidden", opacity: fade(frame, staggerStart, staggerEnd), transform: `translateY(${slide(frame, staggerStart, staggerEnd)}px)` }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 24px", borderBottom: `1px solid rgba(255,255,255,0.07)`, background: "rgba(255,255,255,0.03)" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 700, color: PRIMARY }}>STAGE {s.num}</span>
                  <span style={{ fontSize: 17, fontWeight: 600, color: FG }}>{s.title}</span>
                  <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 18, color: MUTED }}>{s.tag}</span>
                </div>
                {/* Body */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 20, padding: "18px 24px" }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flexShrink: 0 }}>
                    {s.tools.map((t) => (
                      <span key={t} style={{ fontSize: 20, padding: "4px 12px", borderRadius: 20, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.65, flex: 1, minWidth: 240, margin: 0 }}>{s.desc}</p>
                </div>
              </div>

              {s.arrow && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 36, gap: 10, color: "rgba(161,161,170,0.4)", fontSize: 13 }}>
                  <span>↓</span>
                  <span style={{ border: `1px solid rgba(255,255,255,0.12)`, borderRadius: 20, padding: "3px 14px", background: "rgba(255,255,255,0.03)", fontSize: 18, color: MUTED }}>
                    {s.arrow}
                  </span>
                  <span>↓</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
