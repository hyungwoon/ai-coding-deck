import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const cards = [
  {
    icon: "🎨",
    title: "디자인 → 코드",
    desc: "Figma 화면 스크린샷을 붙여넣고 \"이 디자인을 HTML/CSS로 구현해줘\"라고 하면 레이아웃·컬러·폰트까지 그대로 코드로 변환. 개발자 없이 시안을 바로 프로토타입으로.",
    example: '[스크린샷 첨부]\n"이 UI를 React 컴포넌트로 만들어줘. Tailwind 사용"',
  },
  {
    icon: "🐛",
    title: "에러 화면 → 디버깅",
    desc: "터미널 에러 메시지나 브라우저 콘솔 스크린샷을 그대로 붙이면 무슨 에러인지, 왜 났는지, 어떻게 고치는지를 바로 설명. 에러 텍스트를 일일이 복사할 필요 없음.",
    example: '[에러 스크린샷 첨부]\n"이 에러 왜 나는거야? 어떻게 고쳐?"',
  },
  {
    icon: "📄",
    title: "문서·PDF → 구조화",
    desc: "계약서·기획서·보고서 PDF를 넣고 \"주요 내용 요약해줘\" 또는 \"온톨로지로 정리해줘\"라고 하면 구조화된 지식으로 변환. 문서 분석 시간 대폭 절감.",
    example: '[PDF 첨부]\n"주요 내용 요약하고 온톨로지로 정리해줘"',
  },
  {
    icon: "📊",
    title: "데이터·표 → 인사이트",
    desc: "엑셀 화면, 대시보드 스크린샷을 붙이고 \"이 데이터에서 뭘 읽을 수 있어?\"라고 하면 패턴·이상값·인사이트를 즉시 분석. 데이터 분석가 없이도 가능.",
    example: '[대시보드 스크린샷 첨부]\n"이 데이터에서 뭘 읽을 수 있어?"',
  },
];

export const S16Multimodal: React.FC = () => {
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
          멀티모달 — 이미지를 AI에게 보여주기
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
          Claude는 텍스트만 받는 게 아니다. 이미지·스크린샷·PDF를 그대로 붙여넣으면 읽고 분석하고 구현한다.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            ...fade(25),
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderBottom: `1px solid ${BORDER}`,
                  padding: "14px 20px",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: 600, color: FG, margin: 0 }}>
                  {card.icon} {card.title}
                </p>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <p
                  style={{
                    fontSize: 15,
                    color: MUTED,
                    lineHeight: 1.65,
                    marginBottom: 14,
                    margin: "0 0 14px",
                  }}
                >
                  {card.desc}
                </p>
                <div
                  style={{
                    background: "#1a1a1a",
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontFamily: "monospace",
                    fontSize: 13,
                    color: PRIMARY,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
