import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

const steps = [
  {
    num: "01",
    title: "Claude Code 설치",
    code: "npm install -g @anthropic-ai/claude-code",
    note: null,
  },
  {
    num: "02",
    title: "oh-my-claudecode 설치",
    code: "/plugin marketplace add oh-my-claudecode",
    note: "또는 Claude Code 내에서 /setup 실행",
  },
  {
    num: "03",
    title: "Anthropic 인증",
    code: "claude auth login",
    note: "Pro / Max 구독 계정으로 OAuth 로그인",
  },
  {
    num: "04",
    title: "CLAUDE.md 초기화",
    code: "프로젝트 폴더에서 claude 실행 → CLAUDE.md 작성",
    note: "프로젝트 맥락·규칙·금지사항을 AI에게 선언하는 파일",
  },
];

export const S29Install: React.FC = () => {
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
          11 · 설치
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            marginTop: 0,
            marginBottom: 32,
            lineHeight: 1.2,
            ...fade(10),
          }}
        >
          설치 순서
        </h2>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            ...fade(20),
          }}
        >
          {steps.map(({ num, title, code, note }, i) => (
            <div
              key={num}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "20px 22px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                opacity: interpolate(frame, [20 + i * 12, 20 + i * 12 + 25], [0, 1], { extrapolateRight: "clamp" }),
                transform: `translateY(${interpolate(frame, [20 + i * 12, 20 + i * 12 + 25], [20, 0], { extrapolateRight: "clamp" })}px)`,
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(228,228,231,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 16,
                    fontWeight: 700,
                    color: PRIMARY,
                  }}
                >
                  {num}
                </span>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: FG,
                    marginTop: 0,
                    marginBottom: 8,
                  }}
                >
                  {title}
                </p>
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: 18,
                    background: "rgba(228,228,231,0.08)",
                    color: PRIMARY,
                    padding: "6px 12px",
                    borderRadius: 8,
                    display: "block",
                  }}
                >
                  {code}
                </code>
                {note && (
                  <p style={{ fontSize: 16, color: MUTED, marginTop: 6, marginBottom: 0 }}>
                    {note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
