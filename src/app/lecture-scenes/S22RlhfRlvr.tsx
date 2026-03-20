import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

export const S22RlhfRlvr: React.FC = () => {
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
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%" }}>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 20,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: MUTED,
            marginBottom: 16,
            ...fade(0),
          }}
        >
          08 · RLHF → RLVR
        </p>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: FG,
            marginBottom: 12,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            ...fade(5),
          }}
        >
          RLHF → RLVR
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginBottom: 28,
            lineHeight: 1.6,
            ...fade(15),
          }}
        >
          쓸수록 똑똑해지는 AI의 시대
        </p>

        {/* Core claim */}
        <div
          style={{
            background: "rgba(99,102,241,0.06)",
            border: `1px solid rgba(99,102,241,0.2)`,
            borderRadius: 16,
            padding: "22px 28px",
            marginBottom: 24,
            ...fade(25),
          }}
        >
          <p style={{ fontSize: 24, fontWeight: 700, color: FG, marginBottom: 6 }}>
            "AI를 얼마나 잘 쓰느냐"가 아니라
          </p>
          <p style={{ fontSize: 24, fontWeight: 700, color: PRIMARY, margin: 0 }}>
            "AI가 얼마나 나를 잘 아느냐"가 격차를 만든다
          </p>
        </div>

        {/* RLHF vs RLVR */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 0,
            alignItems: "stretch",
            ...fade(40),
          }}
        >
          {/* RLHF */}
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
                padding: "20px 24px",
                borderBottom: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: 18, color: MUTED, marginBottom: 6 }}>
                RLHF
              </p>
              <p style={{ fontSize: 24, fontWeight: 700, color: FG, margin: 0, lineHeight: 1.3 }}>
                인간 피드백 강화학습
              </p>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 18 }}>
                사람이 A/B를 비교해 선호를 학습. ChatGPT·Claude 초기 방식의 핵심.{" "}
                <strong style={{ color: FG }}>느리고 비쌈. 사람의 주관에 의존.</strong>
              </p>
              <div
                style={{
                  background: "#0d0d0d",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "monospace",
                  fontSize: 20,
                  color: MUTED,
                  lineHeight: 1.7,
                }}
              >
                AI 출력 → 사람이 A/B 비교
                <br />
                → 선호 학습 →{" "}
                <span style={{ color: "rgba(161,161,170,0.4)" }}>반복 (느림)</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              padding: "0 20px",
            }}
          >
            <span style={{ fontSize: 28, color: PRIMARY }}>→</span>
            <span style={{ fontFamily: "monospace", fontSize: 16, color: MUTED }}>진화</span>
          </div>

          {/* RLVR */}
          <div
            style={{
              background: "rgba(99,102,241,0.06)",
              border: `1px solid rgba(99,102,241,0.2)`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: `1px solid rgba(99,102,241,0.15)`,
                background: "rgba(99,102,241,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 18,
                  color: PRIMARY,
                  marginBottom: 6,
                }}
              >
                RLVR
              </p>
              <p style={{ fontSize: 24, fontWeight: 700, color: FG, margin: 0, lineHeight: 1.3 }}>
                검증 가능한 결과 강화학습
              </p>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 18 }}>
                코드 실행, 수학 정답, 테스트 통과 — 객관적 기준으로 자동 평가.{" "}
                <strong style={{ color: FG }}>사람 없이도 초고속 자기개선 가능.</strong>
              </p>
              <div
                style={{
                  background: "#0d0d0d",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "monospace",
                  fontSize: 20,
                  color: MUTED,
                  lineHeight: 1.7,
                }}
              >
                AI 출력 → 자동 검증
                <br />
                → 자율 학습 →{" "}
                <span style={{ color: PRIMARY }}>초고속 반복</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
