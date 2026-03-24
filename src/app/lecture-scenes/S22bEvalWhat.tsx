import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const layers = [
  {
    level: "Level 1",
    title: "Model Eval",
    subtitle: "벤치마크",
    desc: "모델 자체의 능력 측정. 어떤 모델이 우리 태스크에 적합한지 비교한다.",
    examples: ["MMLU — 지식 + 추론 종합", "HumanEval — 코드 생성", "SWE-bench — 실제 이슈 해결"],
    highlight: false,
  },
  {
    level: "Level 2",
    title: "Task Eval",
    subtitle: "프롬프트 + 출력 평가",
    desc: "같은 모델이라도 프롬프트에 따라 결과가 다르다. 어떤 접근이 더 나은지 측정.",
    examples: ["A/B 프롬프트 비교", "LLM-as-Judge 자동 채점", "정확도 + 관련성 + 안전성"],
    highlight: true,
  },
  {
    level: "Level 3",
    title: "System Eval",
    subtitle: "파이프라인 검증",
    desc: "개별 컴포넌트는 OK인데 전체가 실패하는 경우. 에이전트 워크플로우 전체를 평가.",
    examples: ["RAG 검색 정확도", "에이전트 태스크 완료율", "E2E 성공률"],
    highlight: false,
  },
];

export const S22bEvalWhat: React.FC = () => {
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
        <p style={{ fontFamily: "monospace", fontSize: 20, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: MUTED, marginBottom: 16, ...fade(0) }}>
          08 · Evaluation
        </p>
        <h2 style={{ fontSize: 72, fontWeight: 700, color: FG, marginBottom: 12, lineHeight: 1.2, letterSpacing: "-0.02em", ...fade(5) }}>
          Eval — AI 성능을 측정하는 과학
        </h2>
        <p style={{ fontSize: 28, color: MUTED, marginBottom: 28, lineHeight: 1.6, ...fade(15) }}>
          측정할 수 없으면, 개선할 수 없다
        </p>

        {/* Core definition */}
        <div style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 16, padding: "22px 28px", marginBottom: 24, ...fade(25) }}>
          <p style={{ fontSize: 22, color: FG, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: PRIMARY }}>"AI가 잘했다"의 근거는?</strong>{" "}
            <span style={{ color: MUTED }}>Eval은 AI 출력을 체계적으로 측정하는 방법론이다. 시험지 없이는 성적을 매길 수 없듯, Eval 없이는 AI 품질도 알 수 없다.</span>
          </p>
        </div>

        {/* 3 layer cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 24, ...fade(40) }}>
          {layers.map((l) => (
            <div key={l.level} style={{ background: l.highlight ? "rgba(99,102,241,0.06)" : CARD_BG, border: `1px solid ${l.highlight ? "rgba(99,102,241,0.2)" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ padding: "16px 20px", borderBottom: `1px solid ${l.highlight ? "rgba(99,102,241,0.15)" : BORDER}`, background: l.highlight ? "rgba(99,102,241,0.05)" : "rgba(255,255,255,0.03)" }}>
                <p style={{ fontFamily: "monospace", fontSize: 14, color: l.highlight ? PRIMARY : "rgba(161,161,170,0.6)", marginBottom: 4 }}>{l.level}</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: FG, margin: 0 }}>{l.title}</p>
                <p style={{ fontSize: 14, color: MUTED, margin: 0 }}>{l.subtitle}</p>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 14 }}>{l.desc}</p>
                {l.examples.map((ex) => (
                  <p key={ex} style={{ fontFamily: "monospace", fontSize: 14, color: "rgba(161,161,170,0.8)", margin: "4px 0", lineHeight: 1.5 }}>{ex}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RLVR connection */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "18px 24px", ...fade(60) }}>
          <p style={{ fontSize: 18, color: FG, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ fontFamily: "monospace", color: PRIMARY }}>RLVR = Eval의 자동화.</strong>{" "}
            <span style={{ color: MUTED }}>RLVR의 V(Verifiable)가 바로 Eval이다. 코드 실행 여부, 수학 정답 일치 — 이 자동 평가가 AI의 초고속 자기개선을 가능하게 한다.</span>
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
