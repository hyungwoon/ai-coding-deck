import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const elements = [
  {
    tag: "ENTITY · 개체",
    title: "존재하는 것들의 목록",
    desc: "사람, 제품, 팀, 고객, 프로세스 등. \"우리 회사에 존재하는 것은 무엇인가.\"",
    code: "- 브랜드: Sparta Club\n- 팀: 디자인팀\n- 고객: B2B 기업",
  },
  {
    tag: "RELATION · 관계",
    title: "개체들이 어떻게 연결되는지",
    desc: "\"A는 B에 속한다\", \"A는 B를 담당한다\" 같은 연결 구조.",
    code: "디자인팀 → 브랜드 관리\n캠페인 → 브랜드에 종속\n고객 → 팀 배정됨",
  },
  {
    tag: "ATTRIBUTE · 속성",
    title: "각 개체가 가진 특성·값",
    desc: "브랜드 컬러, 톤앤매너, 타겟, 제약사항 같은 구체적 정보.",
    code: "Primary: #FF6B35\n톤: 에너지·도전\n금지: 파스텔 계열",
  },
  {
    tag: "RULE · 규칙",
    title: "판단 기준·제약·워크플로우",
    desc: "\"이럴 땐 이렇게 해야 한다\"는 로직. AI가 자율 판단할 때 따르는 기준.",
    code: "SNS 발행 → 승인 필요\n로고 변형 → 금지\n캠페인 → 브리프 선행",
  },
];

export const S18OntologyElements: React.FC = () => {
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
            fontSize: 56,
            fontWeight: 700,
            color: FG,
            marginBottom: 12,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            ...fade(0),
          }}
        >
          온톨로지를 구성하는 4가지 요소
        </h2>
        <p
          style={{
            fontSize: 22,
            color: MUTED,
            marginBottom: 40,
            lineHeight: 1.6,
            ...fade(15),
          }}
        >
          Entity, Relation, Attribute, Rule — 이 네 가지로 AI의 지식 구조를 설계한다
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            ...fade(25),
          }}
        >
          {elements.map((el) => (
            <div
              key={el.tag}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: PRIMARY,
                  marginBottom: 10,
                }}
              >
                {el.tag}
              </p>
              <p style={{ fontSize: 18, fontWeight: 600, color: FG, marginBottom: 10 }}>
                {el.title}
              </p>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.65, marginBottom: 16 }}>
                {el.desc}
              </p>
              <div
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "monospace",
                  fontSize: 14,
                  color: MUTED,
                  lineHeight: 1.7,
                  whiteSpace: "pre-line",
                }}
              >
                {el.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
