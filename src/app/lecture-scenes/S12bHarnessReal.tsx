import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const omcItems = [
  "32개 특화 에이전트 자동 위임",
  "autopilot / ralph / ultrawork 실행 모드",
  "스마트 모델 라우팅 (Haiku→Opus)",
  "verify/fix 루프로 완료까지 반복",
];

const hwItems = [
  "hashline 편집: 성공률 6.7% → 68.3%",
  "실패 시 자동 복구 가이드 주입",
  "들여쓰기 손실, diff 오염 자동 보정",
  "품질 게이트 (lint, 타입체크 자동)",
];

const bizStats = [
  { value: "16", label: "전문가 에이전트", sub: "마케팅·영업·법무·재무·HR..." },
  { value: "110", label: "도메인 스킬", sub: "17개 플러그인에 분산" },
  { value: "RLVR", label: "자동 학습", sub: "피드백 → knowledge/ 저장" },
];

export const S12bHarnessReal: React.FC = () => {
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
          실전 하네스 사례
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginTop: 0,
            marginBottom: 24,
            ...fade(15),
          }}
        >
          같은 Claude Code 위에 어떤 하네스를 씌웠느냐에 따라 완전히 다른 AI가 된다
        </p>

        {/* CASE 1: 코딩 하네스 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "20px 24px",
            marginBottom: 16,
            ...fade(25),
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 13,
                color: "rgba(161,161,170,0.5)",
              }}
            >
              CASE 1
            </span>
            <p style={{ fontSize: 20, fontWeight: 700, color: FG, margin: 0 }}>
              코딩 하네스 — oh-my-claudecode + oh-my-hwclaude
            </p>
          </div>
          <p style={{ fontSize: 20, color: MUTED, margin: 0, marginBottom: 14, lineHeight: 1.5 }}>
            두 플러그인이 서로 다른 레이어를 담당한다. OMC는 실행 전략(무엇을, 어떤 순서로), hwclaude는 실행 품질(얼마나 정확하게).
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {/* OMC */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <p style={{ fontSize: 20, fontWeight: 600, color: FG, margin: 0 }}>
                oh-my-claudecode (OMC)
              </p>
              <p style={{ fontSize: 16, color: "rgba(161,161,170,0.6)", margin: "4px 0 10px" }}>
                멀티 에이전트 오케스트레이션
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {omcItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 8,
                      fontSize: 18,
                      color: MUTED,
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* hwclaude */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "14px 18px",
              }}
            >
              <p style={{ fontSize: 20, fontWeight: 600, color: FG, margin: 0 }}>
                oh-my-hwclaude
              </p>
              <p style={{ fontSize: 16, color: "rgba(161,161,170,0.6)", margin: "4px 0 10px" }}>
                정밀 편집 + 자동 복구
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {hwItems.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 8,
                      fontSize: 18,
                      color: MUTED,
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            style={{
              fontSize: 18,
              color: MUTED,
              margin: "12px 0 0",
              textAlign: "center",
            }}
          >
            <span style={{ color: FG, fontWeight: 600 }}>결과:</span>{" "}
            OMC가 "무엇을 할지" 결정하고, hwclaude가 "정확하게 실행"한다
          </p>
        </div>

        {/* CASE 2: 비즈니스 하네스 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "20px 24px",
            ...fade(45),
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 13,
                color: "rgba(161,161,170,0.5)",
              }}
            >
              CASE 2
            </span>
            <p style={{ fontSize: 20, fontWeight: 700, color: FG, margin: 0 }}>
              비즈니스 하네스 — business-ai-team
            </p>
          </div>
          <p style={{ fontSize: 20, color: MUTED, margin: 0, marginBottom: 14, lineHeight: 1.5 }}>
            코딩이 아닌 비즈니스 도메인에 하네스를 적용한 사례. 마케팅, 영업, 법무, 재무 등 16개 전문가 에이전트가 자동으로 라우팅된다.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 14 }}>
            {bizStats.map((stat) => (
              <div
                key={stat.value}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "14px 18px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: PRIMARY,
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: 18, color: FG, margin: "4px 0 2px" }}>{stat.label}</p>
                <p style={{ fontSize: 15, color: "rgba(161,161,170,0.5)", margin: 0 }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 18, color: MUTED, margin: 0, lineHeight: 1.6 }}>
            <span style={{ color: FG, fontWeight: 600 }}>흐름:</span>{" "}
            요청 수신 → 도메인 분류 → 에이전트 로드 → 스킬 적용 → 온톨로지(Obsidian) 참조 → 학습 보정 → 전문가 응답
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
