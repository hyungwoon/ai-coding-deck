import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#6366f1";

const steps = [
  {
    num: "01",
    label: "수집",
    desc: "뭐든 일단 Vault에",
    highlight: false,
    star: false,
  },
  {
    num: "02",
    label: "연결 ★",
    desc: "[[링크]] · 태그 · MOC",
    highlight: true,
    star: true,
  },
  {
    num: "03",
    label: "구조화",
    desc: "YAML · 폴더 · Dataview",
    highlight: false,
    star: false,
  },
  {
    num: "04",
    label: "AI 연동",
    desc: "내 지식이 AI의 기억",
    highlight: false,
    star: false,
  },
];

const methods = [
  {
    tag: "METHOD 1 — 추천",
    title: "MCP 서버 연결",
    desc: "Obsidian Vault를 MCP 서버로 노출하면 Claude Code 등 에이전트가 노트를 직접 읽고·검색·수정할 수 있다.",
    code: "Claude Code\n├─ mcp:// Obsidian Vault\n├─ mcp:// Notion\n└─ mcp:// Slack",
  },
  {
    tag: "METHOD 2 — 간단",
    title: "로컬 파일 직접 참조",
    desc: "Obsidian Vault는 그냥 폴더다. Claude Code에서 경로만 지정하면 .md 파일을 바로 읽는다. CLAUDE.md에 Vault 경로를 명시해두면 매번 알려줄 필요 없음.",
    code: "# CLAUDE.md에 추가\n지식 저장소: ~/Vault/\n참조 시 .md 파일을 검색할 것",
  },
  {
    tag: "METHOD 3 — Obsidian 내장",
    title: "Smart Connections",
    desc: "Obsidian 안에서 노트를 벡터 임베딩하고, AI 채팅으로 Vault 내용을 질문할 수 있는 플러그인. Obsidian 자체가 RAG 시스템이 됨.",
    code: 'Community Plugins에서\n"Smart Connections" 설치\n→ 자동 임베딩 생성\n→ AI Chat 패널 활성화',
  },
];

export const S21OntologyPractice: React.FC = () => {
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
          온톨로지 실전
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
          수집 → 연결 → 구조화 → AI 연동 — 쌓으면 쌓을수록 AI가 똑똑해지는 구조
        </p>

        {/* 4-step workflow strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid ${BORDER}`,
            marginBottom: 24,
            ...fade(25),
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.label}
              style={{
                padding: "22px 24px",
                borderRight: i < steps.length - 1 ? `1px solid rgba(255,255,255,0.08)` : "none",
                background: step.highlight ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.02)",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: MUTED,
                  marginBottom: 8,
                }}
              >
                STEP {step.num}
              </p>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: step.highlight ? PRIMARY : FG,
                  marginBottom: 6,
                }}
              >
                {step.label}
              </p>
              <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
              {step.star && (
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    background: "rgba(99,102,241,0.2)",
                    color: PRIMARY,
                    borderRadius: 999,
                    padding: "2px 10px",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  핵심
                </span>
              )}
            </div>
          ))}
        </div>

        {/* AI integration methods */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            ...fade(40),
          }}
        >
          {methods.map((m) => (
            <div
              key={m.title}
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
                  padding: "14px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: PRIMARY,
                    marginBottom: 6,
                  }}
                >
                  {m.tag}
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: FG, margin: 0 }}>{m.title}</p>
              </div>
              <div style={{ padding: "14px 18px" }}>
                <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, marginBottom: 14 }}>
                  {m.desc}
                </p>
                <div
                  style={{
                    background: "#1a1a1a",
                    borderRadius: 10,
                    padding: "12px 14px",
                    fontFamily: "monospace",
                    fontSize: 18,
                    color: MUTED,
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                  }}
                >
                  {m.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
