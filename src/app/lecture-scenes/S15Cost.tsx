import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";
const PRIMARY = "#a78bfa";

const plans = [
  {
    name: "Claude Code (Pro)",
    desc: "claude.ai Pro 구독 포함 · 사용량 제한 있음",
    price: "$20",
    unit: "/mo",
  },
  {
    name: "Claude Code (Max)",
    desc: "헤비 유저용 · 5× 높은 사용량 한도",
    price: "$100",
    unit: "/mo",
  },
  {
    name: "API 직접 사용",
    desc: "토큰당 과금 · 사용량 무제한",
    price: "종량제",
    unit: "",
  },
];

const tips = [
  {
    label: "비용 줄이는 법",
    icon: "💰",
    desc: "작업 시작 전 플래닝에 투자. 무한 수정 루프가 토큰 낭비의 주범. 큰 파일 통째로 붙이지 말고 필요한 부분만.",
  },
  {
    label: "Haiku vs Sonnet",
    icon: "📊",
    desc: "단순 반복 작업은 Haiku(저렴)로. 복잡한 추론·설계는 Sonnet·Opus로. 용도에 맞게 선택하면 비용 대폭 절감.",
  },
  {
    label: "캐싱 활용",
    icon: "⚡",
    desc: "같은 시스템 프롬프트·문서 반복 사용 시 Prompt Caching으로 Input 비용 90% 절감. CLAUDE.md 같은 고정 내용에 효과적.",
  },
];

export const S15Cost: React.FC = () => {
  const frame = useCurrentFrame();

  const fade = (delay: number) => ({
    opacity: interpolate(frame, [delay, delay + 25], [0, 1], {
      extrapolateRight: "clamp",
    }),
    transform: `translateY(${interpolate(frame, [delay, delay + 25], [20, 0], {
      extrapolateRight: "clamp",
    })}px)`,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 120px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%" }}>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: FG,
            margin: 0,
            marginBottom: 8,
            letterSpacing: "-0.02em",
            ...fade(5),
          }}
        >
          비용 현실 — 얼마나 드는가
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginTop: 0,
            marginBottom: 36,
            ...fade(15),
          }}
        >
          Claude Code 요금 구조와 API 토큰 비용 (2026년 기준)
        </p>

        {/* Two-column: Plans + Token cost */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 20,
            ...fade(28),
          }}
        >
          {/* Plans */}
          <div
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
                padding: "12px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: MUTED,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Claude Code 요금제
              </p>
            </div>
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 12,
                    border: `1px solid ${BORDER}`,
                    background: "rgba(255,255,255,0.03)",
                    padding: "14px 18px",
                  }}
                >
                  <div>
                    <p style={{ fontSize: 20, fontWeight: 600, color: FG, margin: 0 }}>
                      {plan.name}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        color: MUTED,
                        marginTop: 3,
                        margin: 0,
                        marginBlockStart: 3,
                      }}
                    >
                      {plan.desc}
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: 20,
                      fontWeight: 600,
                      color: PRIMARY,
                      flexShrink: 0,
                      marginLeft: 12,
                      margin: 0,
                      marginInlineStart: 12,
                    }}
                  >
                    {plan.price}
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 400,
                        color: MUTED,
                      }}
                    >
                      {plan.unit}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Token cost */}
          <div
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
                padding: "12px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: MUTED,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                API 토큰 요금 (Sonnet 4.5 기준)
              </p>
            </div>
            <div style={{ padding: 16 }}>
              <div
                style={{
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  padding: "18px 20px",
                  fontFamily: "monospace",
                  fontSize: 20,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span style={{ color: MUTED }}>Input</span>
                  <span style={{ color: PRIMARY, fontWeight: 600 }}>
                    $3 / 1M 토큰
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span style={{ color: MUTED }}>Output</span>
                  <span style={{ color: PRIMARY, fontWeight: 600 }}>
                    $15 / 1M 토큰
                  </span>
                </div>
                <div
                  style={{
                    borderTop: `1px solid ${BORDER}`,
                    paddingTop: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: MUTED, fontSize: 12 }}>1M 토큰 ≈</span>
                  <span style={{ color: "rgba(161,161,170,0.5)", fontSize: 12 }}>
                    A4 약 2,500장
                  </span>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 12,
                  border: `1px solid ${BORDER}`,
                  background: "rgba(255,255,255,0.03)",
                  padding: "14px 18px",
                  fontSize: 18,
                  color: MUTED,
                  lineHeight: 1.6,
                }}
              >
                💡{" "}
                <strong style={{ color: FG }}>실제 체감:</strong> 일반적인 바이브
                코딩 세션(하루 2~3시간)은 월 $20 Pro로 대부분 커버됨. API 직접
                쓰면 하루 집중 작업 기준 $2~5 수준.
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
            ...fade(48),
          }}
        >
          {tips.map((tip, idx) => (
            <div
              key={tip.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "22px 24px",
                ...fade(48 + idx * 10),
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: FG,
                  marginBottom: 8,
                  margin: 0,
                  marginBlockEnd: 8,
                }}
              >
                {tip.icon} {tip.label}
              </p>
              <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
