import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const stages = [
  {
    num: "04",
    title: "AI-native 터미널 환경 구축",
    tag: "입문 완성 단계",
    desc: "여러 Claude Code 세션을 탭·패널로 동시에 운용. 세션마다 별도 컨텍스트 유지. Warp로 iTerm2+Tmux 없이도 멀티세션 구현.",
    tools: ["Warp", "Claude Code", "에디터 (확인용)"],
    arrow: "단일 에이전트의 한계",
  },
  {
    num: "05",
    title: "멀티 에이전트 + 하네스",
    tag: "에이전트를 조율하는 에이전트",
    desc: '여러 에이전트를 목적별로 조합. 하네스(harness)로 어떤 태스크를 어떤 에이전트에게 넘길지 흐름을 설계. → "외부 앱이랑도 연결하고 싶다"',
    tools: ["Claude Code", "oh-my-claudecode", "Aider"],
    arrow: "외부 연결 확장",
  },
  {
    num: "06",
    title: "MCP — 외부 앱과 에이전트 연결",
    tag: "에이전트 생태계 완성",
    desc: "Claude Code가 Notion·Slack·Gmail 등 외부 앱을 직접 읽고 씀. Zapier 없이 AI 에이전트가 앱 간 판단·실행까지 처리.",
    tools: ["MCP 서버", "Notion", "Slack", "GitHub", "Figma"],
    arrow: null,
  },
];

export const S08EvolutionAdv: React.FC = () => {
  const frame = useCurrentFrame();

  const fade = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 25], [0, 1], {
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [delay, delay + 25], [20, 0], {
      extrapolateRight: "clamp",
    })}px)`,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 120px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%" }}>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: FG,
            margin: 0,
            marginBottom: 8,
            letterSpacing: "-0.02em",
            ...fade(5),
          }}
        >
          AI 툴 진화 경로 (심화)
        </h2>
        <p
          style={{
            fontSize: 22,
            color: MUTED,
            marginTop: 0,
            marginBottom: 40,
            ...fade(15),
          }}
        >
          터미널 환경을 갖춘 뒤, 멀티 에이전트·MCP로 확장된다
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, ...fade(30) }}>
          {stages.map((s, idx) => (
            <div key={s.num}>
              <div
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  ...fade(30 + idx * 12),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "12px 20px",
                    borderBottom: `1px solid ${BORDER}`,
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: PRIMARY,
                    }}
                  >
                    STAGE {s.num}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: FG }}>
                    {s.title}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "monospace",
                      fontSize: 11,
                      color: MUTED,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "16px 20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                      flexShrink: 0,
                    }}
                  >
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          padding: "2px 10px",
                          borderRadius: 999,
                          border: `1px solid ${BORDER}`,
                          background: "rgba(255,255,255,0.04)",
                          color: MUTED,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: MUTED,
                      lineHeight: 1.6,
                      flex: 1,
                      minWidth: 200,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
              {s.arrow && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 36,
                    color: "rgba(255,255,255,0.2)",
                    fontSize: 12,
                    gap: 8,
                    userSelect: "none",
                  }}
                >
                  <span>↓</span>
                  <span
                    style={{
                      border: `1px solid ${BORDER}`,
                      borderRadius: 999,
                      padding: "2px 12px",
                      background: "rgba(255,255,255,0.03)",
                      fontSize: 10,
                    }}
                  >
                    {s.arrow}
                  </span>
                  <span>↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
