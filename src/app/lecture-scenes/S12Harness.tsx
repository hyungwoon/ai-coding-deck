import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const withoutItems = [
  '매번 "우리 프로젝트는…" 반복 설명',
  "코딩 스타일이 매번 달라짐",
  "금지 규칙을 모름 → 실수 반복",
  "외부 도구·DB에 접근 불가",
  "세션이 바뀌면 리셋 → 맥락 소멸",
];

const withItems = [
  { label: "CLAUDE.md", desc: "프로젝트 맥락 자동 전달" },
  { label: "스킬 파일", desc: "일관된 코딩 패턴 유지" },
  { label: "규칙", desc: "금지 사항·제약 조건 강제" },
  { label: "MCP", desc: "DB·API·외부 도구 직접 조작" },
  { label: "온톨로지", desc: "장기 기억 역할 → 맥락 유지" },
];

export const S12Harness: React.FC = () => {
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
          하네스 — AI 에이전트를 길들이는 구조
        </h2>
        <p
          style={{
            fontSize: 22,
            color: MUTED,
            marginTop: 0,
            marginBottom: 28,
            ...fade(15),
          }}
        >
          에이전트는 강력하다. 하지만 방향 없이는 쓸모없다.
        </p>

        {/* Description card */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "20px 28px",
            marginBottom: 24,
            ...fade(25),
          }}
        >
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: 0 }}>
            하네스(Harness)는 원래{" "}
            <span style={{ color: FG, fontWeight: 500 }}>말에 채우는 고삐·마구</span>
            를 뜻한다. 말의 힘은 그대로 두면서 방향만 잡아주는 것. AI 에이전트도 마찬가지
            — LLM의 범용 능력은 유지하면서{" "}
            <span style={{ color: PRIMARY, fontWeight: 500 }}>
              내 프로젝트·도메인·규칙에 맞게 제어
            </span>
            하는 장치가 하네스다.
          </p>
        </div>

        {/* Two-column comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            ...fade(38),
          }}
        >
          {/* Without harness */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                borderBottom: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 600, color: FG, margin: 0 }}>
                하네스 없는 에이전트
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  color: MUTED,
                  marginTop: 4,
                  margin: 0,
                  marginBlockStart: 4,
                }}
              >
                = 고삐 없는 말
              </p>
            </div>
            <ul style={{ padding: "14px 20px", margin: 0, listStyle: "none" }}>
              {withoutItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 13,
                    color: MUTED,
                    marginBottom: 10,
                  }}
                >
                  <span style={{ flexShrink: 0, color: "rgba(239,68,68,0.7)" }}>✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With harness */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                borderBottom: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 600, color: FG, margin: 0 }}>
                하네스 있는 에이전트
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  color: MUTED,
                  marginTop: 4,
                  margin: 0,
                  marginBlockStart: 4,
                }}
              >
                = 조련된 경주마
              </p>
            </div>
            <ul style={{ padding: "14px 20px", margin: 0, listStyle: "none" }}>
              {withItems.map((item) => (
                <li
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 13,
                    color: MUTED,
                    marginBottom: 10,
                  }}
                >
                  <span style={{ flexShrink: 0, color: PRIMARY }}>✓</span>
                  <span>
                    <span style={{ color: FG, fontWeight: 500 }}>{item.label}</span>
                    {" — "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
