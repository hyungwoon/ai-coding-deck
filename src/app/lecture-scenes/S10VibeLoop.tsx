import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const phases = [
  {
    num: "1",
    label: "준비",
    note: "CLAUDE.md 작성\n공식 문서 등록\n스킬 파일 세팅",
    star: false,
  },
  {
    num: "2★",
    label: "플래닝",
    note: "요구사항 구체화\n단계 분해 (think)\n엣지케이스 정의",
    star: true,
  },
  {
    num: "3",
    label: "플랜 점검",
    note: "플랜 출력 요청\n방향 맞는지 확인\n수정 후 재확인",
    star: false,
  },
  {
    num: "4",
    label: "구현",
    note: "AI가 코드 작성\n서브 에이전트 위임\n나는 지켜보기",
    star: false,
  },
  {
    num: "5↺",
    label: "점검·개선",
    note: "의도대로 됐는지\n문서 업데이트\n→ PHASE 2 반복",
    star: false,
  },
];

const tips = [
  {
    title: "공식 문서를 컨텍스트에",
    desc: "Claude Code 공식 docs를 CLAUDE.md에 링크하거나 직접 붙여넣으면 hallucination이 줄고 정확도가 올라간다.",
  },
  {
    title: "플래닝엔 think / ultrathink",
    desc: '"think"나 "ultrathink"를 프롬프트에 포함하면 Claude가 실행 전에 더 깊게 추론한다. 복잡한 태스크일수록 효과적.',
  },
  {
    title: "문서 업데이트를 루틴으로",
    desc: "구현 후 CLAUDE.md·README를 항상 업데이트. 다음 세션의 Claude가 이걸 읽고 시작하기 때문에 맥락이 누적된다.",
  },
];

export const S10VibeLoop: React.FC = () => {
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
          바이브 코딩 루프
        </h2>
        <p
          style={{
            fontSize: 22,
            color: MUTED,
            marginTop: 0,
            marginBottom: 36,
            ...fade(15),
          }}
        >
          플래닝이 90%다 — 구현은 AI가 한다
        </p>

        {/* Phase grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid ${BORDER}`,
            marginBottom: 24,
            ...fade(25),
          }}
        >
          {phases.map((p, i) => (
            <div
              key={p.num}
              style={{
                padding: "18px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                borderRight: i < phases.length - 1 ? `1px solid ${BORDER}` : "none",
                background: p.star ? "rgba(167,139,250,0.06)" : CARD_BG,
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: p.star ? PRIMARY : "rgba(161,161,170,0.5)",
                }}
              >
                PHASE {p.num}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: p.star ? PRIMARY : FG,
                }}
              >
                {p.label}
              </span>
              <p
                style={{
                  fontSize: 11,
                  color: MUTED,
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                  marginTop: 4,
                  margin: 0,
                  marginBlockStart: 4,
                }}
              >
                {p.note}
              </p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            ...fade(45),
          }}
        >
          {tips.map((t, idx) => (
            <div
              key={t.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "24px 28px",
                ...fade(45 + idx * 10),
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: PRIMARY,
                  marginBottom: 6,
                  margin: 0,
                  marginBlockEnd: 6,
                }}
              >
                {t.title}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: MUTED,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
