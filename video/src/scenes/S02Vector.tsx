import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const CARD_BG = "#262626";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const fade = (frame: number, s: number, e: number) =>
  interpolate(frame, [s, e], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, s: number, e: number, d = 24) =>
  interpolate(frame, [s, e], [d, 0], { extrapolateRight: "clamp" });

const contextRows = [
  { label: "시스템 프롬프트 (지침)", pct: 0.25 },
  { label: "업로드한 문서·코드", pct: 0.33 },
  { label: "대화 히스토리", pct: 0.2 },
  { label: "현재 질문", pct: 0.1 },
];

const bottomCards = [
  { title: "컨텍스트 윈도우", body: "한 번에 처리할 수 있는 텍스트 한도. Claude 최대 200K 토큰." },
  { title: "시맨틱 서치", body: "벡터 유사도로 의미가 같은 내용을 찾는다. 키워드가 달라도 정확히 검색." },
  { title: "RAG 패턴", body: "외부 지식을 벡터 DB에 저장 → 검색 → 컨텍스트에 주입. 최신 정보 활용 가능." },
];

export const S02Vector: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, opacity: fade(frame, 5, 22), transform: `translateY(${slide(frame, 5, 22)}px)` }}>
        STEP 1-2 · 벡터 임베딩 + 컨텍스트 윈도우
      </p>

      <h2 style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.02em", color: FG, margin: "0 0 36px", opacity: fade(frame, 12, 35), transform: `translateY(${slide(frame, 12, 35)}px)` }}>
        의미의 좌표와{" "}
        <span style={{ color: MUTED }}>AI의 책장</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20, opacity: fade(frame, 28, 52), transform: `translateY(${slide(frame, 28, 52)}px)` }}>
        {/* Vector embedding */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 14 }}>
            벡터 임베딩(Vector Embedding)
          </p>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, marginBottom: 18 }}>
            숫자 배열은 단순한 ID가 아니다. 각 숫자는{" "}
            <span style={{ color: FG, fontWeight: 600 }}>의미의 좌표</span>다.
            "강아지"와 "고양이"는 벡터 공간에서{" "}
            <span style={{ color: FG, fontWeight: 600 }}>가까이 위치</span>하고, "자동차"는 멀리 있다.
          </p>
          {[
            { title: "의미가 같으면 가깝다", body: '"강아지"와 "개"는 벡터 공간에서 거의 같은 위치' },
            { title: "벡터 연산이 가능하다", body: "왕 − 남자 + 여자 ≈ 여왕. 의미를 더하고 빼는 수식이 동작" },
            { title: "온톨로지 + 벡터DB (RAG)", body: "지식을 벡터로 저장하면 AI가 의미 기반으로 검색 가능", primary: true },
          ].map(({ title, body, primary: p }) => (
            <div key={title} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: p ? PRIMARY : FG, marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Context window */}
        <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "24px 28px" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 14 }}>
            STEP 2 · 컨텍스트 윈도우
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: FG, marginBottom: 12 }}>AI의 책장</p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
            컨텍스트 윈도우는{" "}
            <span style={{ color: FG, fontWeight: 600 }}>AI가 한 번에 펼쳐볼 수 있는 책장</span>이다.
            책장 안에 든 것만 참고할 수 있고, 책장 밖은 존재하지 않는 것과 같다.
            대화가 길어질수록 오래된 내용이{" "}
            <span style={{ color: FG, fontWeight: 600 }}>밖으로 밀려난다.</span>
          </p>
          <div style={{ fontFamily: "monospace", fontSize: 13, background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 20 }}>
            <p style={{ fontSize: 10, color: MUTED, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>컨텍스트 윈도우 (200K tokens)</p>
            {contextRows.map(({ label, pct }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ height: 6, borderRadius: 3, background: "rgba(167,139,250,0.4)", width: `${pct * 100}%`, flexShrink: 0 }} />
                <span style={{ color: MUTED, fontSize: 12 }}>{label}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{ height: 6, borderRadius: 3, border: "1px dashed rgba(255,255,255,0.2)", flex: 1 }} />
              <span style={{ color: "rgba(161,161,170,0.5)", fontSize: 12 }}>남은 공간</span>
            </div>
            <p style={{ color: "rgba(161,161,170,0.5)", fontSize: 10, margin: 0 }}>Claude 200K = A4 약 500장 분량</p>
          </div>
        </div>
      </div>

      {/* Bottom 3-cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, opacity: fade(frame, 52, 74), transform: `translateY(${slide(frame, 52, 74)}px)` }}>
        {bottomCards.map(({ title, body }) => (
          <div key={title} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 22px" }}>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 8 }}>CONCEPT</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: FG, marginBottom: 8 }}>{title}</p>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
