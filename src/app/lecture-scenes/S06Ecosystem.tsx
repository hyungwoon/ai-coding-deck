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

const layers = [
  {
    badge: "AI 모델",
    desc: "foundation — 모든 도구가 호출하는 기반",
    tools: ["Claude (Sonnet/Opus)", "GPT-4o", "Gemini 2.5", "오픈소스 (Llama/Qwen)"],
  },
  {
    badge: "코딩 에이전트",
    desc: "autonomous — AI 주도, 태스크 자율 실행",
    tools: ["Claude Code (CLI)", "Devin (클라우드)", "Aider (오픈소스)"],
  },
  {
    badge: "에디터 내 에이전트",
    desc: "hybrid — 에디터 안에 에이전트 기능 탑재",
    tools: ["Cursor Agent Mode", "Windsurf Cascade", "Cline", "GitHub Copilot"],
  },
  {
    badge: "에디터 / IDE",
    desc: "human-driven — 사람 주도, AI가 보조",
    tools: ["Cursor", "Windsurf", "VS Code", "Zed", "JetBrains"],
  },
  {
    badge: "터미널 환경",
    desc: "infrastructure — 에이전트 실행 기반",
    tools: ["Tmux", "iTerm2", "Warp (AI 내장)", "zsh"],
  },
];

export const S06Ecosystem: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ fontSize: 58, fontWeight: 700, letterSpacing: "-0.02em", color: FG, margin: "0 0 12px", opacity: fade(frame, 5, 30), transform: `translateY(${slide(frame, 5, 30)}px)` }}>
        AI 코딩 생태계 전체 관계도
      </h2>

      <p style={{ fontSize: 24, color: MUTED, marginBottom: 40, opacity: fade(frame, 18, 38), transform: `translateY(${slide(frame, 18, 38)}px)` }}>
        위에서 아래로 — 모델이 에이전트를 구동하고, 에이전트가 에디터·터미널 위에서 실행된다
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 0, opacity: fade(frame, 30, 55), transform: `translateY(${slide(frame, 30, 55)}px)` }}>
        {layers.map((layer, i) => (
          <React.Fragment key={layer.badge}>
            <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "18px 24px", display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 600, color: PRIMARY, width: 140, flexShrink: 0 }}>
                {layer.badge}
              </span>
              <span style={{ fontSize: 20, color: MUTED, width: 220, flexShrink: 0 }}>
                {layer.desc}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {layer.tools.map((t) => (
                  <span key={t} style={{ fontSize: 20, padding: "4px 12px", borderRadius: 20, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 28, color: "rgba(161,161,170,0.4)", fontSize: 14 }}>
                ↓
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </AbsoluteFill>
  );
};
