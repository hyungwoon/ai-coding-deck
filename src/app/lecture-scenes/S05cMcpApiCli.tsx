import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const fade = (frame: number, s: number, e: number) =>
  interpolate(frame, [s, e], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, s: number, e: number, d = 24) =>
  interpolate(frame, [s, e], [d, 0], { extrapolateRight: "clamp" });

const CONCEPTS = [
  {
    title: "API",
    subtitle: "Application Programming Interface",
    analogy: "식당의 메뉴판",
    desc: "두 프로그램이 대화하는 규칙. \"이 주소로 이 형식으로 보내면 이 결과를 돌려줄게.\" 웹의 모든 것이 API로 연결된다.",
    examples: [
      "REST API — 웹 표준 방식",
      "OpenAI API — AI 모델 호출",
      "Slack API — 메시지 전송",
    ],
    accent: "#60a5fa",
  },
  {
    title: "CLI",
    subtitle: "Command Line Interface",
    analogy: "직접 명령하는 리모컨",
    desc: "마우스 대신 텍스트 명령어로 컴퓨터를 조작. 개발자에게는 GUI보다 빠르고 강력하다. AI 에이전트의 실행 환경.",
    examples: [
      "claude — Claude Code 실행",
      "git — 코드 버전 관리",
      "npm/pnpm — 패키지 설치",
    ],
    accent: "#34d399",
  },
  {
    title: "MCP",
    subtitle: "Model Context Protocol",
    analogy: "AI의 만능 어댑터",
    desc: "AI 에이전트가 외부 앱을 직접 읽고 쓸 수 있게 해주는 프로토콜. API를 일일이 연결할 필요 없이, MCP 하나로 여러 도구에 접근.",
    examples: [
      "mcp:// Notion — 문서 읽기/쓰기",
      "mcp:// Slack — 메시지 전송",
      "mcp:// GitHub — 코드 관리",
    ],
    accent: PRIMARY,
  },
];

export const S05cMcpApiCli: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 20,
          letterSpacing: "0.2em",
          color: MUTED,
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: fade(frame, 5, 22),
          transform: `translateY(${slide(frame, 5, 22)}px)`,
        }}
      >
        02-D · 핵심 개념
      </p>

      <h2
        style={{
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: FG,
          margin: "0 0 12px",
          opacity: fade(frame, 12, 35),
          transform: `translateY(${slide(frame, 12, 35)}px)`,
        }}
      >
        API · CLI · MCP
      </h2>

      <p
        style={{
          fontSize: 28,
          color: MUTED,
          margin: "0 0 36px",
          opacity: fade(frame, 20, 42),
          transform: `translateY(${slide(frame, 20, 42)}px)`,
        }}
      >
        AI 코딩에서 반복해서 등장하는 세 가지 핵심 개념
      </p>

      {/* Three-column cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 18,
          marginBottom: 24,
          opacity: fade(frame, 30, 55),
          transform: `translateY(${slide(frame, 30, 55)}px)`,
        }}
      >
        {CONCEPTS.map(({ title, subtitle, analogy, desc, examples, accent }) => (
          <div
            key={title}
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderTop: `3px solid ${accent}`,
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 22px",
                borderBottom: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: accent,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    color: MUTED,
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {subtitle}
                </p>
              </div>
              <p style={{ fontSize: 18, color: MUTED, margin: 0 }}>
                비유: <span style={{ color: FG }}>{analogy}</span>
              </p>
            </div>
            <div style={{ padding: "16px 22px" }}>
              <p
                style={{
                  fontSize: 18,
                  color: MUTED,
                  lineHeight: 1.65,
                  margin: "0 0 14px",
                }}
              >
                {desc}
              </p>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12 }}>
                {examples.map((ex) => (
                  <p
                    key={ex}
                    style={{
                      fontFamily: "monospace",
                      fontSize: 16,
                      color: MUTED,
                      opacity: 0.7,
                      margin: "0 0 4px",
                    }}
                  >
                    · {ex}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Relationship summary */}
      <div
        style={{
          background: CARD_BG,
          border: `1px solid ${BORDER}`,
          borderRadius: 18,
          padding: "20px 28px",
          opacity: fade(frame, 52, 74),
          transform: `translateY(${slide(frame, 52, 74)}px)`,
        }}
      >
        <p style={{ fontSize: 24, color: MUTED, margin: 0, textAlign: "center" }}>
          <span style={{ color: FG, fontWeight: 700 }}>관계: </span>
          Claude Code{" "}
          <span style={{ color: "#34d399" }}>(CLI)</span>가 OpenAI{" "}
          <span style={{ color: "#60a5fa" }}>(API)</span>를 호출하고,{" "}
          <span style={{ color: PRIMARY }}>MCP</span>로 Notion·Slack을 직접 조작한다
        </p>
      </div>
    </AbsoluteFill>
  );
};
