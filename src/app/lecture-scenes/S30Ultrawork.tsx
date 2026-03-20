import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#e4e4e7";

const execModes = [
  { cmd: "autopilot", desc: "아이디어 → 코드 완전 자율 실행" },
  { cmd: "ralph", desc: "verify/fix 루프 — 완료까지 반복" },
  { cmd: "ulw", desc: "최대 병렬 실행 (ultrawork)" },
  { cmd: "/team N:executor", desc: "공유 태스크 리스트 협업 에이전트" },
  { cmd: "ccg", desc: "트리플 모델 오케스트레이션 (Claude + Codex + Gemini)" },
];

const vibeSteps = [
  { phase: "01 준비", title: "CLAUDE.md 작성", tip: "프로젝트 맥락·규칙·금지사항 선언 + 공식 문서 컨텍스트 등록 (hallucination 방지)" },
  { phase: "02 플래닝", title: "ultrathink 깊은 추론", tip: "요구사항 구체화 + 단계 분해 + 엣지케이스 정의 — 시간의 90%를 여기에" },
  { phase: "03 점검", title: "플랜 확인 후 승인", tip: '"플랜 출력해줘" → 방향 검증 → 구현 전에 반드시 멈춤' },
  { phase: "04 구현", title: "autopilot / ralph 자율 실행", tip: "서브에이전트 자동 위임 (리서치·코드·테스트) + /team 병렬 조율" },
  { phase: "05 개선", title: "verify/fix 루프 반복", tip: "ralph 자동 검증 → 문서 업데이트 → Phase 2로 반복하며 품질 향상" },
  { phase: "06 커밋", title: "컨벤셔널 커밋 + 맥락 보존", tip: "변경사항 리뷰 → 커밋 → 다음 세션을 위한 CLAUDE.md 갱신" },
];

export const S30Ultrawork: React.FC = () => {
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
          11 · 사용법
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: FG,
            marginTop: 0,
            marginBottom: 20,
            lineHeight: 1.2,
            ...fade(10),
          }}
        >
          실행 모드 &amp; 바이브 코딩
        </h2>

        {/* Top half: 5가지 실행 모드 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "20px 22px",
            marginBottom: 20,
            ...fade(20),
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
            oh-my-claudecode — 5가지 실행 모드
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {execModes.map(({ cmd, desc }) => (
              <div key={cmd} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: 18,
                    color: PRIMARY,
                    background: "rgba(228,228,231,0.1)",
                    padding: "4px 8px",
                    borderRadius: 6,
                    minWidth: 160,
                    flexShrink: 0,
                  }}
                >
                  {cmd}
                </code>
                <span style={{ fontSize: 18, color: MUTED }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom half: 바이브 코딩 6단계 */}
        <div style={{ ...fade(40) }}>
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
            바이브 코딩 프로세스 — 6단계
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
            }}
          >
            {vibeSteps.map(({ phase, title, tip }) => (
              <div
                key={phase}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: PRIMARY,
                    textTransform: "uppercase",
                    marginTop: 0,
                    marginBottom: 6,
                  }}
                >
                  {phase}
                </p>
                <p style={{ fontSize: 18, fontWeight: 600, color: FG, marginTop: 0, marginBottom: 4 }}>
                  {title}
                </p>
                <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.5, margin: 0 }}>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
