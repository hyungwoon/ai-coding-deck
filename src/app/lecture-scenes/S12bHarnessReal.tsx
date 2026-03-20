import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";

const omcItems = [
  "일 분배 — 큰 작업을 32개 전문 에이전트에 자동 위임",
  "실행 모드 — autopilot(완전자율), ralph(완료까지 반복), ultrawork(병렬처리)",
  "비용 절감 — 간단한 일은 Haiku, 어려운 일은 Opus",
  "검수 — 결과를 확인하고 틀리면 자동으로 고쳐서 다시 시도",
];

const hwItems = [
  "정밀 편집 — 줄 번호+해시로 위치 특정 (성공률 6.7%→68.3%)",
  "자동 복구 — 편집 실패 시 원인 분석 + 복구 가이드 자동 주입",
  "오류 보정 — 들여쓰기 깨짐, 줄 합쳐짐 같은 흔한 실수 자동 수정",
  "품질 검사 — 파일 저장할 때마다 문법·타입 오류 자동 검사",
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
          코딩 하네스 실전
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
          건축 현장에 비유하면 — 현장 감독 + 정밀 도구 세트
        </p>

        {/* 비유 설명 카드 */}
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
          <p style={{ fontSize: 20, color: MUTED, margin: 0, lineHeight: 1.7 }}>
            AI에게{" "}
            <span style={{ color: FG, fontWeight: 600 }}>
              &quot;로그인 기능 만들어줘&quot;
            </span>
            라고 하면 어떻게 될까? 하네스 없으면 AI가 혼자 대충 만든다.
            하네스가 있으면?{" "}
            <span style={{ color: FG, fontWeight: 600 }}>현장 감독(OMC)</span>
            이 이 작업을 분해한다 — DB 설계, API, 화면, 테스트.
            각각을 전문 작업자에게 위임한다. 그리고{" "}
            <span style={{ color: FG, fontWeight: 600 }}>정밀 공구(hwclaude)</span>
            가 코드를 수정할 때 정확한 위치를 찍어서 편집한다.
            실수하면? 자동으로 복구한다.
          </p>
        </div>

        {/* 두 플러그인 비교 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 16,
            ...fade(40),
          }}
        >
          {/* OMC */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: "20px 24px",
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 700, color: FG, margin: 0 }}>
              oh-my-claudecode (OMC)
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(161,161,170,0.6)",
                margin: "4px 0 12px",
              }}
            >
              비유: 건축 현장의 현장 감독
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
                    marginBottom: 8,
                    lineHeight: 1.5,
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
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: "20px 24px",
            }}
          >
            <p style={{ fontSize: 20, fontWeight: 700, color: FG, margin: 0 }}>
              oh-my-hwclaude
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(161,161,170,0.6)",
                margin: "4px 0 12px",
              }}
            >
              비유: 레이저 가이드가 달린 정밀 공구
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
                    marginBottom: 8,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ flexShrink: 0 }}>·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 실제 흐름 */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "16px 24px",
            textAlign: "center",
            ...fade(60),
          }}
        >
          <p style={{ fontSize: 18, color: MUTED, margin: 0, lineHeight: 1.7 }}>
            <span style={{ color: FG, fontWeight: 600 }}>실제 흐름:</span>{" "}
            &quot;로그인 만들어줘&quot; → OMC가 DB·API·UI·테스트로 분해 →
            각 에이전트에 위임 → hwclaude가 정확한 위치에 코드 편집 →
            실패 시 자동 복구 → 검수 통과까지 반복
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
