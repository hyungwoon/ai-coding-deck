import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1f1f1f";
const FG = "#fafafa";
const MUTED = "#a1a1aa";
const CARD_BG = "#262626";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const fade = (frame: number, s: number, e: number) =>
  interpolate(frame, [s, e], [0, 1], { extrapolateRight: "clamp" });
const slide = (frame: number, s: number, e: number, d = 24) =>
  interpolate(frame, [s, e], [d, 0], { extrapolateRight: "clamp" });

const GITHUB_CONCEPTS = [
  {
    term: "Repository",
    korean: "레포지토리",
    desc: "프로젝트 하나 = 레포 하나. 폴더·파일·변경 이력이 통째로 들어있는 프로젝트 상자. Claude Code는 이 레포를 통째로 읽고 작업한다.",
  },
  {
    term: "Commit",
    korean: "커밋",
    desc: '변경사항을 "저장점"으로 기록하는 행위. 언제든 이 시점으로 되돌아올 수 있다. AI가 작업할 때마다 커밋을 남기면 실수해도 복구 가능.',
  },
  {
    term: "Branch",
    korean: "브랜치",
    desc: '원본은 건드리지 않고 복사본에서 실험하는 공간. "기능A 브랜치"에서 AI가 작업하고, 잘 되면 메인에 합치는 방식. 실패해도 원본 안전.',
  },
  {
    term: "Pull Request",
    korean: "PR · 머지 요청",
    desc: "브랜치 작업이 끝나면 메인에 합쳐달라는 검토·승인 요청. 변경 내용이 한눈에 보이고, 사람이 확인 후 승인하면 합쳐진다.",
  },
];

const FLOW_STEPS = [
  "새 브랜치 생성",
  "Claude Code 작업 실행",
  "커밋으로 저장",
  "내가 결과 검토",
  "PR 열고 머지",
  "배포",
];

export const S05Github: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        padding: "64px 100px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p style={{ fontFamily: "monospace", fontSize: 20, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, opacity: fade(frame, 5, 22), transform: `translateY(${slide(frame, 5, 22)}px)` }}>
        02-B · 버전 관리
      </p>

      <h2 style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.02em", color: FG, margin: "0 0 36px", opacity: fade(frame, 12, 35), transform: `translateY(${slide(frame, 12, 35)}px)` }}>
        GitHub 기초
      </h2>

      {/* 4-card 2x2 grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20, opacity: fade(frame, 28, 52), transform: `translateY(${slide(frame, 28, 52)}px)` }}>
        {GITHUB_CONCEPTS.map(({ term, korean, desc }) => (
          <div key={term} style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 18, overflow: "hidden" }}>
            <div style={{ padding: "12px 20px", borderBottom: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)" }}>
              <p style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 600, color: PRIMARY, margin: "0 0 2px" }}>{term}</p>
              <p style={{ fontSize: 18, color: MUTED, margin: 0 }}>{korean}</p>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flow steps */}
      <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 18, padding: "20px 24px", opacity: fade(frame, 52, 74), transform: `translateY(${slide(frame, 52, 74)}px)` }}>
        <p style={{ fontFamily: "monospace", fontSize: 16, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 16 }}>
          AI 에이전트 + GitHub 실제 흐름
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
          {FLOW_STEPS.map((step, i) => (
            <React.Fragment key={step}>
              <span style={{
                background: i === FLOW_STEPS.length - 1 ? "rgba(167,139,250,0.1)" : "rgba(255,255,255,0.05)",
                border: i === FLOW_STEPS.length - 1 ? "1px solid rgba(167,139,250,0.35)" : `1px solid ${BORDER}`,
                color: i === FLOW_STEPS.length - 1 ? PRIMARY : MUTED,
                fontWeight: i === FLOW_STEPS.length - 1 ? 600 : 400,
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 15,
              }}>
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <span style={{ color: "rgba(161,161,170,0.4)", fontSize: 16 }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
