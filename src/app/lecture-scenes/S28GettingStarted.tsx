import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

export const S28GettingStarted: React.FC = () => {
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
          11 · 시작 가이드
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
          첫 시작 가이드
        </h2>

        {/* 추천 조합 */}
        <div
          style={{
            background: "rgba(228,228,231,0.05)",
            border: "1px solid rgba(228,228,231,0.3)",
            borderRadius: 16,
            padding: "20px 22px",
            marginBottom: 20,
            ...fade(20),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: "0.2em",
              color: PRIMARY,
              textTransform: "uppercase",
              marginTop: 0,
              marginBottom: 8,
            }}
          >
            추천 조합
          </p>
          <p style={{ fontSize: 20, fontWeight: 600, color: FG, marginTop: 0, marginBottom: 4 }}>
            Claude Code + oh-my-claudecode
          </p>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, margin: 0 }}>
            Anthropic 공식 CLI 에이전트 + 멀티 에이전트 오케스트레이션 레이어.
            32개 특화 에이전트 · 스마트 모델 라우팅 (Haiku / Sonnet / Opus). 10.6k GitHub Stars.
          </p>
        </div>

        {/* 5가지 실행 모드 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "20px 22px",
            marginBottom: 20,
            ...fade(36),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: MUTED,
              textTransform: "uppercase",
              marginTop: 0,
              marginBottom: 12,
            }}
          >
            5가지 실행 모드
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["autopilot", "ralph", "ultrawork (ulw)", "/team N:executor", "ccg"].map((mode) => (
              <span
                key={mode}
                style={{
                  fontFamily: "monospace",
                  fontSize: 16,
                  color: PRIMARY,
                  background: "rgba(228,228,231,0.1)",
                  padding: "6px 12px",
                  borderRadius: 8,
                }}
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* 사전 요구사항 3개 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            ...fade(52),
          }}
        >
          {[
            {
              num: "필수 01",
              title: "Anthropic 구독",
              desc: "Claude Code Pro ($20) 또는 Max ($100). Opus 사용 시 Max 권장.",
              code: null,
            },
            {
              num: "필수 02",
              title: "Node.js",
              desc: "Claude Code CLI 설치에 필요.",
              code: "node -v",
            },
            {
              num: "필수 03",
              title: "Git",
              desc: "코드 버전 관리 필수. macOS는 기본 설치됨. 없으면",
              code: "brew install git",
            },
          ].map(({ num, title, desc, code }) => (
            <div
              key={num}
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
                  letterSpacing: "0.2em",
                  color: MUTED,
                  textTransform: "uppercase",
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                {num}
              </p>
              <p style={{ fontSize: 20, fontWeight: 600, color: FG, marginTop: 0, marginBottom: 4 }}>
                {title}
              </p>
              <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                {desc}{" "}
                {code && (
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 16,
                      color: PRIMARY,
                    }}
                  >
                    {code}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
