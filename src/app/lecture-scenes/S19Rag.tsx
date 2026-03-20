import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const comparison = [
  {
    label: "RAG 없는 AI",
    desc: "학습된 것만 안다. 내 회사 문서, 최신 정보, 개인 자료는 모른다. 할루시네이션 위험.",
  },
  {
    label: "RAG 있는 AI",
    desc: "내 문서를 벡터DB에 넣으면 AI가 실시간으로 검색해서 답변. 출처도 함께 제시.",
  },
  {
    label: "온톨로지 + RAG",
    desc: "온톨로지로 구조화 → 벡터DB 저장 → RAG로 검색. 내 지식이 AI의 장기기억이 됨.",
  },
];

const flowSteps = [
  { label: "사용자 질문", sub: '"우리 환불 정책은?"', highlight: false },
  { label: "벡터DB 검색", sub: "Semantic Search", highlight: true },
  { label: "컨텍스트 조립", sub: "질문 + 검색 결과", highlight: false },
  { label: "LLM 생성", sub: "Claude · GPT", highlight: true },
  { label: "정확한 답변", sub: "문서 기반 · 출처 포함", highlight: false },
];

export const S19Rag: React.FC = () => {
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
        <h2
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: FG,
            marginBottom: 12,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            ...fade(0),
          }}
        >
          RAG — AI가 모르는 것을 검색해서 답하는 방법
        </h2>
        <p
          style={{
            fontSize: 20,
            color: MUTED,
            marginBottom: 28,
            lineHeight: 1.6,
            ...fade(15),
          }}
        >
          Retrieval-Augmented Generation — 검색과 생성의 결합으로 LLM의 지식 한계를 극복한다
        </p>

        {/* Definition */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "22px 28px",
            marginBottom: 22,
            ...fade(25),
          }}
        >
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: 0 }}>
            LLM의 가장 큰 약점은{" "}
            <strong style={{ color: FG }}>학습 데이터 이후의 정보를 모른다</strong>는 것. RAG는 질문이 들어오면 먼저 관련 문서를 벡터DB에서 검색해서 컨텍스트에 넣고, 그 내용을 바탕으로 답변을 생성한다.
          </p>
        </div>

        {/* Flow strip */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 22,
            ...fade(35),
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderBottom: `1px solid ${BORDER}`,
              padding: "12px 20px",
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: MUTED,
                margin: 0,
              }}
            >
              RAG 작동 흐름
            </p>
          </div>
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {flowSteps.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    background: step.highlight ? "rgba(99,102,241,0.06)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${step.highlight ? "rgba(99,102,241,0.3)" : BORDER}`,
                    borderRadius: 12,
                    padding: "12px 18px",
                    textAlign: "center",
                    minWidth: 130,
                  }}
                >
                  <p style={{ fontSize: 13, fontWeight: 600, color: FG, margin: "0 0 4px" }}>
                    {step.label}
                  </p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{step.sub}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3-column comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            ...fade(50),
          }}
        >
          {comparison.map((item) => (
            <div
              key={item.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "22px 24px",
              }}
            >
              <p style={{ fontSize: 17, fontWeight: 600, color: PRIMARY, marginBottom: 10 }}>
                {item.label}
              </p>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
