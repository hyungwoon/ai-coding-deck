import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

export const S17OntologyDef: React.FC = () => {
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
            fontSize: 72,
            fontWeight: 700,
            color: FG,
            marginBottom: 12,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            ...fade(0),
          }}
        >
          온톨로지 — AI의 장기 기억을 설계한다
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginBottom: 40,
            lineHeight: 1.6,
            ...fade(15),
          }}
        >
          맥락을 매번 넣는 것과 온톨로지를 구축하는 것은 다르다
        </p>

        {/* Definition card */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "28px 32px",
            marginBottom: 24,
            ...fade(25),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: 14,
            }}
          >
            온톨로지(Ontology)란?
          </p>
          <p style={{ fontSize: 24, color: MUTED, lineHeight: 1.7, margin: 0 }}>
            개념·관계·규칙을 구조적으로 정의한{" "}
            <strong style={{ color: FG }}>지식의 지도</strong>. 단순한 메모나 문서가 아니라,{" "}
            <strong style={{ color: FG }}>"무엇이 무엇과 어떻게 연결되어 있는가"</strong>를 기계가 읽을 수 있는 형태로 정의한 것.
            맥락은 매번 넣어줘야 하지만, 온톨로지는{" "}
            <strong style={{ color: FG }}>한 번 구조화하면 에이전트가 스스로 참조하는 영구적인 지식 기반</strong>이 된다.
          </p>
        </div>

        {/* Comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 24,
            ...fade(40),
          }}
        >
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 16,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 14,
              }}
            >
              온톨로지 없는 AI
            </p>
            <p style={{ fontSize: 26, fontWeight: 600, color: FG, marginBottom: 14 }}>
              매번 처음부터 가르쳐야 하는 직원
            </p>
            <p style={{ fontSize: 22, color: MUTED, lineHeight: 1.7, margin: 0 }}>
              "우리 회사가 뭐 하는 곳이에요?" "이 고객이 누구예요?" "우리 팀의 용어는요?"
              <br /><br />
              세션이 끝나면 모두 사라짐.{" "}
              <strong style={{ color: FG }}>매번 설명을 반복해야 함.</strong>
            </p>
          </div>

          <div
            style={{
              background: "rgba(99,102,241,0.06)",
              border: `1px solid rgba(99,102,241,0.25)`,
              borderRadius: 16,
              padding: "28px 32px",
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 16,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(99,102,241,0.7)",
                marginBottom: 14,
              }}
            >
              온톨로지 갖춘 AI
            </p>
            <p style={{ fontSize: 26, fontWeight: 600, color: FG, marginBottom: 14 }}>
              맥락을 내재화한 전문 어시스턴트
            </p>
            <p style={{ fontSize: 22, color: MUTED, lineHeight: 1.7, margin: 0 }}>
              회사 구조, 제품, 고객, 용어, 관계, 규칙이 이미 구조화되어 있음.
              <br /><br />
              <strong style={{ color: FG }}>지시만 하면 됨. 설명은 필요 없음.</strong>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "18px 28px",
            textAlign: "center",
            ...fade(55),
          }}
        >
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, margin: 0 }}>
            💡 온톨로지를 구현하는 형식은 자유 —{" "}
            <strong style={{ color: FG }}>CLAUDE.md · Notion DB · JSON · 마크다운</strong>{" "}
            어느 것이든, 구조화만 되어 있으면 된다
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
