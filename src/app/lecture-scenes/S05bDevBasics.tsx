import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";

const fade = (frame: number, s: number, e: number) =>
  interpolate(frame, [s, e], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, s: number, e: number, d = 24) =>
  interpolate(frame, [s, e], [d, 0], { extrapolateRight: "clamp" });

const LAYERS = [
  {
    title: "프론트엔드 (클라이언트)",
    desc: "사용자가 보는 화면. 브라우저에서 실행된다.",
    items: [
      "HTML — 구조 (뼈대)",
      "CSS — 스타일 (옷)",
      "JavaScript — 동작 (근육)",
      "React / Next.js — 프레임워크",
    ],
    accent: "#60a5fa",
  },
  {
    title: "백엔드 (서버)",
    desc: "눈에 안 보이는 뒷단. 데이터 처리와 비즈니스 로직을 담당한다.",
    items: [
      "API — 프론트와 백의 대화 창구",
      "인증 — 로그인, 권한 관리",
      "비즈니스 로직 — 결제, 추천, 알림",
      "Node.js / Python / Go",
    ],
    accent: "#34d399",
  },
  {
    title: "데이터베이스 (DB)",
    desc: "데이터를 저장하고 꺼내는 곳. 앱의 기억 장치.",
    items: [
      "SQL (PostgreSQL, MySQL) — 구조화된 데이터",
      "NoSQL (MongoDB) — 유연한 구조",
      "Supabase / Firebase — 백엔드+DB 올인원",
      "ORM (Drizzle, Prisma) — 코드로 DB 조작",
    ],
    accent: "#fbbf24",
  },
];

export const S05bDevBasics: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 20,
          letterSpacing: "0.2em",
          color: MUTED,
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: fade(frame, 5, 22),
          transform: `translateY(${slide(frame, 5, 22)}px)`,
        }}
      >
        02-C · 개발 구조
      </p>

      <h2
        style={{
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: FG,
          margin: "0 0 12px",
          opacity: fade(frame, 12, 35),
          transform: `translateY(${slide(frame, 12, 35)}px)`,
        }}
      >
        개발의 기본 구조
      </h2>

      <p
        style={{
          fontSize: 28,
          color: MUTED,
          margin: "0 0 36px",
          opacity: fade(frame, 20, 42),
          transform: `translateY(${slide(frame, 20, 42)}px)`,
        }}
      >
        프론트엔드 · 백엔드 · 데이터베이스 — 모든 앱은 이 세 층으로 이루어져 있다
      </p>

      {/* Three-column cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 18,
          marginBottom: 24,
          opacity: fade(frame, 30, 55),
          transform: `translateY(${slide(frame, 30, 55)}px)`,
        }}
      >
        {LAYERS.map(({ title, desc, items, accent }) => (
          <div
            key={title}
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderTop: `3px solid ${accent}`,
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 22px",
                borderBottom: `1px solid ${BORDER}`,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: FG,
                  margin: "0 0 4px",
                }}
              >
                {title}
              </p>
              <p style={{ fontSize: 18, color: MUTED, margin: 0, lineHeight: 1.5 }}>
                {desc}
              </p>
            </div>
            <div style={{ padding: "16px 22px" }}>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 18,
                      color: MUTED,
                      lineHeight: 1.7,
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: accent, opacity: 0.6, marginTop: 2 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Flow summary */}
      <div
        style={{
          background: CARD_BG,
          border: `1px solid ${BORDER}`,
          borderRadius: 18,
          padding: "20px 28px",
          opacity: fade(frame, 52, 74),
          transform: `translateY(${slide(frame, 52, 74)}px)`,
        }}
      >
        <p style={{ fontSize: 24, color: MUTED, margin: 0, textAlign: "center" }}>
          <span style={{ color: FG, fontWeight: 700 }}>흐름: </span>
          사용자가 버튼 클릭{" "}
          <span style={{ color: "#60a5fa" }}>(프론트)</span> →{" "}
          API 요청{" "}
          <span style={{ color: "#34d399" }}>(백엔드)</span> →{" "}
          데이터 조회{" "}
          <span style={{ color: "#fbbf24" }}>(DB)</span> →{" "}
          결과 반환 → 화면 표시
        </p>
      </div>
    </AbsoluteFill>
  );
};
