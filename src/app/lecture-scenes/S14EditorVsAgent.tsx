import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const rows = [
  {
    label: "에디터",
    sub: "VS Code, Zed",
    unit: "줄 / 함수",
    human: "매 스텝",
    terminal: "없음",
    control: "사람",
    highlight: false,
  },
  {
    label: "에디터 내 에이전트",
    sub: "Cursor Agent",
    unit: "피처 / 태스크",
    human: "승인만",
    terminal: "제한적",
    control: "사람 → AI",
    highlight: false,
  },
  {
    label: "순수 에이전트",
    sub: "Claude Code",
    unit: "태스크 / 레포",
    human: "시작·끝만",
    terminal: "풀 권한",
    control: "AI",
    highlight: true,
  },
];

const insights = [
  {
    label: "자동화 수준",
    value: "에디터 < 에이전트",
    desc: "AI가 점점 더 많은 결정을 스스로 내린다",
  },
  {
    label: "터미널 권한",
    value: "없음 → 풀 권한",
    desc: "에이전트는 명령어 실행까지 직접 처리",
  },
  {
    label: "사람의 역할",
    value: "조작 → 감독",
    desc: "코드 작성 대신 목표와 방향을 지시",
  },
];

export const S14EditorVsAgent: React.FC = () => {
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
          에디터 vs 에이전트 핵심 차이
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
          작업 단위와 주도권이 AI로 이동하는 스펙트럼
        </p>

        {/* Comparison table */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 24,
            ...fade(28),
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr",
              background: "rgba(255,255,255,0.04)",
              borderBottom: `1px solid ${BORDER}`,
              padding: "12px 24px",
            }}
          >
            {["구분", "작업 단위", "사람 개입", "터미널 실행", "주도권"].map(
              (h) => (
                <span
                  key={h}
                  style={{ fontSize: 18, fontWeight: 500, color: MUTED }}
                >
                  {h}
                </span>
              )
            )}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr",
                padding: "18px 24px",
                alignItems: "center",
                borderBottom:
                  i < rows.length - 1 ? `1px solid ${BORDER}` : "none",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: FG,
                    margin: 0,
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    fontSize: 18,
                    color: MUTED,
                    marginTop: 3,
                    margin: 0,
                    marginBlockStart: 3,
                  }}
                >
                  {row.sub}
                </p>
              </div>
              <span style={{ fontSize: 20, color: MUTED }}>{row.unit}</span>
              <span
                style={{
                  display: "inline-block",
                  borderRadius: 999,
                  padding: "4px 12px",
                  fontSize: 16,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.06)",
                  color: MUTED,
                  width: "fit-content",
                }}
              >
                {row.human}
              </span>
              <span
                style={{
                  display: "inline-block",
                  borderRadius: 999,
                  padding: "4px 12px",
                  fontSize: 16,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.06)",
                  color: MUTED,
                  width: "fit-content",
                }}
              >
                {row.terminal}
              </span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: row.highlight ? PRIMARY : FG,
                }}
              >
                {row.control}
              </span>
            </div>
          ))}
        </div>

        {/* Insight cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            ...fade(48),
          }}
        >
          {insights.map((item, idx) => (
            <div
              key={item.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "22px 24px",
                ...fade(48 + idx * 10),
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 16,
                  color: MUTED,
                  marginBottom: 6,
                  margin: 0,
                  marginBlockEnd: 6,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: PRIMARY,
                  marginBottom: 6,
                  margin: 0,
                  marginBlockEnd: 6,
                }}
              >
                {item.value}
              </p>
              <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
