import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const concepts = [
  {
    emoji: "📄",
    title: "CLAUDE.md",
    desc: "프로젝트 루트에 두는 에이전트 행동 지침서. 세션 시작 시 자동 로드.",
  },
  {
    emoji: "🔀",
    title: "서브 에이전트",
    desc: "메인 에이전트가 하위 태스크를 별도 에이전트에게 위임. 병렬 실행으로 속도 향상.",
  },
  {
    emoji: "⚡",
    title: "커맨드 (슬래시)",
    desc: "/로 시작하는 단축 명령어. 자주 쓰는 프롬프트를 한 단어로 호출.",
  },
  {
    emoji: "🪝",
    title: "훅 (Hooks)",
    desc: "특정 이벤트 발생 시 자동으로 실행되는 스크립트. 파일 저장 후 린트, 커밋 전 테스트 등.",
  },
  {
    emoji: "🧩",
    title: "스킬 (Skills)",
    desc: "반복 작업 방식을 파일로 정의해두는 재사용 가능한 지식 모듈.",
  },
  {
    emoji: "🔗",
    title: "MCP 서버",
    desc: "Claude Code가 Notion·Slack·GitHub 등 외부 앱을 직접 읽고 쓸 수 있게 해주는 연결 프로토콜.",
  },
];

export const S09ClaudeConcepts: React.FC = () => {
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
            fontSize: 72,
            fontWeight: 700,
            color: FG,
            margin: 0,
            marginBottom: 8,
            letterSpacing: "-0.02em",
            ...fade(5),
          }}
        >
          Claude Code 핵심 개념
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginTop: 0,
            marginBottom: 40,
            ...fade(15),
          }}
        >
          단순한 CLI 도구가 아닌, 작업 흐름 전체를 설계하는 프레임워크
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            ...fade(30),
          }}
        >
          {concepts.map((c, idx) => (
            <div
              key={c.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                ...fade(30 + idx * 10),
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 24 }}>{c.emoji}</span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 20,
                    fontWeight: 700,
                    color: PRIMARY,
                  }}
                >
                  {c.title}
                </span>
              </div>
              <p
                style={{
                  fontSize: 20,
                  color: MUTED,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
