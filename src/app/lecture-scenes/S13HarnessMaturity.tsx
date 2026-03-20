import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const levels = [
  {
    lv: "LV.0",
    title: "무장비",
    tag: "하네스 없음",
    desc: "ChatGPT에 질문만\n매번 처음부터 설명",
    active: false,
  },
  {
    lv: "LV.1",
    title: "기본 제어",
    tag: "맥락 하네스",
    desc: "CLAUDE.md 작성\n프로젝트 맥락 전달",
    active: true,
  },
  {
    lv: "LV.2",
    title: "도구 연결",
    tag: "행동 하네스",
    desc: "MCP로 외부 연동\n스킬 파일·규칙 추가",
    active: true,
  },
  {
    lv: "LV.3",
    title: "자율 순환",
    tag: "풀 하네스",
    desc: "온톨로지 + RAG\n피드백 루프 운영",
    active: true,
  },
];

export const S13HarnessMaturity: React.FC = () => {
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
          하네스 성숙도
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginTop: 0,
            marginBottom: 44,
            ...fade(15),
          }}
        >
          어디까지 왔는가 — 4단계로 보는 에이전트 제어 수준
        </p>

        {/* Level grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid ${BORDER}`,
            marginBottom: 24,
            ...fade(28),
          }}
        >
          {levels.map((lv, i) => (
            <div
              key={lv.lv}
              style={{
                padding: "22px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                borderRight: i < levels.length - 1 ? `1px solid ${BORDER}` : "none",
                background: lv.active ? CARD_BG : "rgba(255,255,255,0.02)",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: lv.active ? PRIMARY : "rgba(161,161,170,0.35)",
                }}
              >
                {lv.lv}
              </span>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: lv.active ? FG : "rgba(250,250,250,0.4)",
                }}
              >
                {lv.title}
              </span>
              <p
                style={{
                  fontSize: 16,
                  color: MUTED,
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                  marginTop: 4,
                  margin: 0,
                  marginBlockStart: 4,
                }}
              >
                {lv.desc}
              </p>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  marginTop: 8,
                  color: lv.active ? "rgba(167,139,250,0.7)" : "rgba(161,161,170,0.25)",
                }}
              >
                {lv.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom insight card */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "22px 28px",
            ...fade(48),
          }}
        >
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: 0 }}>
            <span style={{ color: FG, fontWeight: 600 }}>
              하네스 = 에이전트의 진짜 차별화 포인트.
            </span>{" "}
            모델은 공유된다 — 누구나 같은 Claude, 같은 GPT를 쓴다. 하지만{" "}
            <span style={{ color: PRIMARY, fontWeight: 500 }}>
              어떤 하네스를 씌웠느냐
            </span>
            에 따라 결과는 완전히 다르다. 잘 만든 하네스는 곧{" "}
            <span style={{ color: FG, fontWeight: 500 }}>복제 불가능한 경쟁 우위</span>
            다.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
