import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const tddSteps = ["테스트 케이스 작성", "코드 구현", "테스트 통과 확인", "리팩토링"];
const eddSteps = ["Eval 데이터셋 정의", "프롬프트 + 에이전트 구현", "Eval 점수 확인", "프롬프트 최적화"];

const pipeline = [
  { label: "골든 데이터셋", sub: "기대 입출력 쌍" },
  { label: "에이전트 실행", sub: "프롬프트 → 결과" },
  { label: "자동 채점", sub: "LLM-as-Judge" },
  { label: "점수 비교", sub: "변경 전후 Diff" },
  { label: "개선 반복", sub: "프롬프트 최적화" },
];

const benefits = [
  { title: "재현 가능한 품질", desc: "\"느낌\"이 아닌 숫자로 품질 관리" },
  { title: "회귀 방지", desc: "CI/CD처럼 매 변경마다 Eval 실행" },
  { title: "팀 스케일링", desc: "Eval 기준 공유로 일관된 품질" },
];

export const S22cEvalDriven: React.FC = () => {
  const frame = useCurrentFrame();
  const fade = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 25], [0, 1], { extrapolateRight: "clamp" }),
    transform: `translateY(${interpolate(frame, [delay, delay + 25], [20, 0], { extrapolateRight: "clamp" })}px)`,
  });

  const stepStyle = (highlight: boolean, i: number) => ({
    display: "flex" as const,
    alignItems: "center" as const,
    gap: 10,
    fontSize: 18,
    color: highlight ? FG : MUTED,
    fontWeight: highlight ? 500 : 400,
    padding: "6px 0",
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
          08 · Eval-Driven Development
        </p>
        <h2 style={{ fontSize: 72, fontWeight: 700, color: FG, marginBottom: 12, lineHeight: 1.2, letterSpacing: "-0.02em", ...fade(5) }}>
          Eval-Driven Development
        </h2>
        <p style={{ fontSize: 28, color: MUTED, marginBottom: 28, lineHeight: 1.6, ...fade(15) }}>
          테스트가 소프트웨어를 만들듯, Eval이 AI를 만든다
        </p>

        {/* TDD vs EDD */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, alignItems: "stretch", marginBottom: 24, ...fade(25) }}>
          <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)" }}>
              <p style={{ fontFamily: "monospace", fontSize: 18, color: MUTED, marginBottom: 4 }}>TDD</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: FG, margin: 0 }}>Test-Driven Development</p>
            </div>
            <div style={{ padding: "16px 24px" }}>
              {tddSteps.map((s, i) => (
                <div key={s} style={stepStyle(false, i)}>
                  <span style={{ fontFamily: "monospace", fontSize: 14, color: "rgba(161,161,170,0.5)", width: 20 }}>{i + 1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "0 24px" }}>
            <span style={{ fontSize: 28, color: PRIMARY }}>→</span>
            <span style={{ fontFamily: "monospace", fontSize: 16, color: MUTED }}>AI 시대</span>
          </div>

          <div style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(99,102,241,0.15)", background: "rgba(99,102,241,0.05)" }}>
              <p style={{ fontFamily: "monospace", fontSize: 18, color: PRIMARY, marginBottom: 4 }}>EDD</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: FG, margin: 0 }}>Eval-Driven Development</p>
            </div>
            <div style={{ padding: "16px 24px" }}>
              {eddSteps.map((s, i) => (
                <div key={s} style={stepStyle(true, i)}>
                  <span style={{ fontFamily: "monospace", fontSize: 14, color: "rgba(99,102,241,0.5)", width: 20 }}>{i + 1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden", marginBottom: 24, ...fade(45) }}>
          <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: `1px solid ${BORDER}`, padding: "12px 24px" }}>
            <p style={{ fontFamily: "monospace", fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: MUTED, margin: 0 }}>EDD 파이프라인</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "20px 24px" }}>
            {pipeline.map((step, i) => (
              <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ border: `1px solid ${i % 2 ? "rgba(99,102,241,0.3)" : BORDER}`, background: i % 2 ? "rgba(99,102,241,0.06)" : "transparent", borderRadius: 12, padding: "14px 20px", textAlign: "center" as const, minWidth: 140 }}>
                  <p style={{ fontSize: 18, fontWeight: 600, color: FG, margin: 0 }}>{step.label}</p>
                  <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>{step.sub}</p>
                </div>
                {i < pipeline.length - 1 && <span style={{ color: "rgba(161,161,170,0.4)", fontSize: 18 }}>→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, ...fade(60) }}>
          {benefits.map((b) => (
            <div key={b.title} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "18px 22px" }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: PRIMARY, marginBottom: 6 }}>{b.title}</p>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
