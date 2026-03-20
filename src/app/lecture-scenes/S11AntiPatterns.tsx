import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";

const items = [
  {
    num: "01",
    title: "플래닝 없이 바로 구현 요청",
    desc: '"로그인 기능 만들어줘"처럼 모호하게 던지면 AI가 엉뚱한 방향으로. 무엇을, 왜, 어떻게를 먼저 정의하고 플랜을 확인한 뒤 구현 지시.',
    full: false,
  },
  {
    num: "02",
    title: "컨텍스트 오염 — 대화가 너무 길어짐",
    desc: "같은 세션에서 너무 많은 수정을 반복하면 AI가 혼란을 느낀다. 큰 방향이 바뀌면 새 세션을 시작하고 CLAUDE.md로 맥락을 주입.",
    full: false,
  },
  {
    num: "03",
    title: '무한 수정 루프 — "조금만 더 고쳐줘"',
    desc: "작은 수정을 계속 쌓으면 코드가 점점 복잡해진다. 일정 수준의 변경은 처음부터 다시 짜는 게 빠르다.",
    full: false,
  },
  {
    num: "04",
    title: "검증 없이 그냥 배포",
    desc: 'AI가 "완성됐다"고 해도 실제로 실행되는지 직접 확인해야 한다. AI 출력 = 초안이지 완성본이 아니다.',
    full: false,
  },
  {
    num: "05",
    title: "이해 못 한 채로 사용",
    desc: 'AI가 만든 코드를 블랙박스로 두면 버그가 났을 때 고칠 수 없다. "이 코드 한 줄씩 설명해줘"로 항상 이해하며 진행.',
    full: false,
  },
  {
    num: "06",
    title: "문서 업데이트 생략",
    desc: "구현 후 CLAUDE.md를 업데이트하지 않으면 다음 세션에서 AI가 이전 상황을 모른 채 시작한다. 구현 → 문서 업데이트는 세트.",
    full: false,
  },
  {
    num: "07",
    title: "너무 큰 태스크를 한 번에",
    desc: '"전체 앱 만들어줘"처럼 큰 요청은 방향이 틀어지면 수정 범위가 너무 넓어진다. 기능 단위로 잘게 쪼개서 각 단계를 확인하며 진행. 커밋도 작게 자주.',
    full: true,
  },
];

export const S11AntiPatterns: React.FC = () => {
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
            fontSize: 56,
            fontWeight: 700,
            color: FG,
            margin: 0,
            marginBottom: 8,
            letterSpacing: "-0.02em",
            ...fade(5),
          }}
        >
          바이브 코딩 안티패턴
        </h2>
        <p
          style={{
            fontSize: 22,
            color: MUTED,
            marginTop: 0,
            marginBottom: 36,
            ...fade(15),
          }}
        >
          흔한 실수 7가지 — 미리 알면 절반은 피할 수 있다
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            ...fade(28),
          }}
        >
          {items.map((item, idx) => (
            <div
              key={item.num}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                gridColumn: item.full ? "1 / -1" : undefined,
                ...fade(28 + idx * 8),
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  color: "rgba(161,161,170,0.4)",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {item.num}
              </span>
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: FG,
                    marginBottom: 6,
                    margin: 0,
                    marginBlockEnd: 6,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: MUTED,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
