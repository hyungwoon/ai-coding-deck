import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const reasons = [
  {
    num: "#1",
    title: "순수 마크다운",
    desc: "모든 노트가 .md 파일. 특정 앱에 종속되지 않고, AI가 가공 없이 바로 읽을 수 있다. LLM이 가장 잘 이해하는 포맷이 마크다운. Notion은 API로 변환해야 하지만 Obsidian은 파일 시스템에서 직접 접근 가능.",
  },
  {
    num: "#2",
    title: "양방향 링크 = 관계 정의",
    desc: "[[고객사A]]에서 [[프로젝트X]]로 링크 → AI가 \"고객사A는 프로젝트X와 연결됨\"을 자동으로 파악. 온톨로지의 관계(Relation)가 링크 하나로 정의됨. 별도 스키마 설계 없이 쌓이는 구조.",
  },
  {
    num: "#3",
    title: "그래프 뷰 = 온톨로지 시각화",
    desc: "노트 간 연결을 그래프로 시각화하면, 온톨로지 지식 그래프가 눈앞에 펼쳐진다. 어떤 지식이 고립됐는지, 어디가 허브인지 한눈에 파악 → 지식의 빈 곳을 발견할 수 있다.",
  },
];

export const S20Obsidian: React.FC = () => {
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
          Obsidian — AI의 지식 저장소
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
          로컬 마크다운 + 양방향 링크 + 지식 그래프 — RAG에 최적화된 개인 온톨로지 저장소
        </p>

        {/* Definition */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "22px 28px",
            marginBottom: 22,
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            ...fade(25),
          }}
        >
          <span style={{ fontSize: 32, flexShrink: 0 }}>💎</span>
          <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: 0 }}>
            모든 노트가 마크다운 파일로 저장되고,{" "}
            <code
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "2px 8px",
                borderRadius: 6,
                fontFamily: "monospace",
                fontSize: 20,
              }}
            >
              [[링크]]
            </code>
            로 노트끼리 연결하면{" "}
            <strong style={{ color: FG }}>지식 그래프가 자동으로 만들어진다.</strong> 온톨로지를 쌓기에 가장 자연스러운 도구이면서, AI 에이전트가 직접 읽고 검색할 수 있는{" "}
            <strong style={{ color: FG }}>RAG 최적의 지식 저장소.</strong>
          </p>
        </div>

        {/* 3 reasons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            marginBottom: 22,
            ...fade(35),
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.num}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "22px 24px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 16,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: PRIMARY,
                  marginBottom: 10,
                }}
              >
                REASON {r.num}
              </p>
              <p style={{ fontSize: 22, fontWeight: 600, color: FG, marginBottom: 10 }}>
                {r.title}
              </p>
              <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Notion vs Obsidian */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            padding: "22px 28px",
            ...fade(50),
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: 16,
            }}
          >
            Notion vs Obsidian — 한 줄 비교
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <p style={{ fontSize: 17, fontWeight: 600, color: FG, marginBottom: 8 }}>Notion</p>
              <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                팀 협업·프로젝트 관리에 강함. 독점 포맷 — API 없이 AI가 직접 접근 불가.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 17, fontWeight: 600, color: PRIMARY, marginBottom: 8 }}>
                Obsidian
              </p>
              <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, margin: 0 }}>
                개인 지식 축적·AI RAG 연동에 강함. 순수 .md — AI가 가공 없이 바로 읽음.
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: 20,
              color: MUTED,
              marginTop: 16,
              paddingTop: 16,
              borderTop: `1px solid ${BORDER}`,
              margin: "16px 0 0",
            }}
          >
            💡 둘 다 쓰는 것도 좋은 전략 — Notion으로 팀 작업하고, Obsidian에 나만의 온톨로지를 쌓는 방식.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
