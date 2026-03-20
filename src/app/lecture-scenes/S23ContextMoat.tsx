import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const bullets = [
  {
    dot: PRIMARY,
    title: "모델은 공유된다",
    desc: "온톨로지는 나만의 것. 같은 AI를 써도 결과가 다른 이유.",
  },
  {
    dot: MUTED,
    title: "일찍 쌓을수록 유리하다",
    desc: "지금 구조화한 지식이 6개월 후 에이전트의 품질을 결정한다.",
  },
  {
    dot: "rgba(161,161,170,0.6)",
    title: "피드백 루프가 핵심이다",
    desc: "에이전트가 틀릴 때마다 온톨로지를 갱신하면 같은 실수를 반복하지 않는다.",
  },
  {
    dot: "rgba(99,102,241,0.6)",
    title: "조직이 AI와 함께 학습한다",
    desc: "RLVR이 모델을 개선하듯, 온톨로지 갱신이 조직의 AI를 개선한다.",
  },
];

const roadmap = [
  {
    label: "WEEK 1",
    title: "나의 맥락 문서화",
    desc: "CLAUDE.md에 역할·프로젝트·용어·선호 방식 작성. 반복 설명을 한 번에 정리.",
  },
  {
    label: "MONTH 1",
    title: "도메인 온톨로지 초안",
    desc: "자주 쓰는 개체·관계·규칙을 Notion에 구조화. 에이전트가 참조할 수 있는 형태로.",
  },
  {
    label: "ONGOING",
    title: "피드백 루프 운영",
    desc: "AI가 틀리거나 맥락을 놓칠 때마다 온톨로지 갱신. 쓸수록 정교해지는 나만의 AI.",
  },
];

export const S23ContextMoat: React.FC = () => {
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
          08 · 컨텍스트 축적
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
          컨텍스트 축적이 경쟁 우위
        </h2>
        <p
          style={{
            fontSize: 26,
            color: MUTED,
            marginBottom: 24,
            lineHeight: 1.6,
            ...fade(15),
          }}
        >
          모델은 공유된다. 온톨로지는 나만의 것이다.
        </p>

        {/* 4 bullet cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 24,
            ...fade(25),
          }}
        >
          {bullets.map(({ dot, title, desc }) => (
            <div
              key={title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "18px 22px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: dot,
                  flexShrink: 0,
                  marginTop: 5,
                }}
              />
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: FG, marginBottom: 6 }}>
                  {title}
                </p>
                <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div
          style={{
            background: "rgba(99,102,241,0.06)",
            border: `1px solid rgba(99,102,241,0.2)`,
            borderRadius: 16,
            padding: "22px 28px",
            ...fade(45),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: PRIMARY,
              marginBottom: 20,
            }}
          >
            지금 당장 시작할 수 있는 것
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {roadmap.map(({ label, title, desc }) => (
              <div
                key={label}
                style={{
                  background: "rgba(99,102,241,0.06)",
                  border: `1px solid rgba(99,102,241,0.15)`,
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 16,
                    letterSpacing: "0.12em",
                    color: PRIMARY,
                    marginBottom: 8,
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: 20, fontWeight: 600, color: FG, marginBottom: 8 }}>
                  {title}
                </p>
                <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
