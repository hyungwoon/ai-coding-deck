import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const BG = "#1a1a1a";
const FG = "#fafafa";
const CARD_BG = "#262626";
const MUTED = "#a1a1aa";
const BORDER = "rgba(255,255,255,0.1)";

const mechanisms = [
  {
    name: "에이전트 (Agent)",
    analogy: "전문 부서장",
    desc: "마케팅·영업·법무·재무·HR 등 16명의 부서장. 각자 도메인 전문 지식을 갖고 있다. 요청이 오면 해당 부서장이 직접 답한다.",
  },
  {
    name: "플러그인 (Plugin)",
    analogy: "부서의 업무 매뉴얼",
    desc: "각 부서가 보유한 업무 매뉴얼 묶음. 마케팅 부서엔 브랜드·캠페인·분석 매뉴얼이, 법무 부서엔 계약·컴플라이언스 매뉴얼이 있다. 17개 매뉴얼 세트.",
  },
  {
    name: "스킬 (Skill)",
    analogy: "매뉴얼 안의 절차서",
    desc: "매뉴얼(플러그인) 안에 있는 구체적 실행 절차. '경쟁사 분석하는 법', 'PRD 작성하는 법' 같은 110개의 상세 절차서.",
  },
  {
    name: "라우팅 (Routing)",
    analogy: "안내 데스크",
    desc: "'마케팅 캠페인 분석해줘' → 안내 데스크가 마케팅 부서장에게 전달 + 경쟁분석·퍼포먼스 매뉴얼을 꺼내준다. 모호한 요청은 먼저 인터뷰로 명확화.",
  },
  {
    name: "커맨드 (Command)",
    analogy: "단축 버튼",
    desc: "/ask 질문 → 전문가가 답변. /route 요청 → 자동 라우팅. /team → 부서 목록 확인. 복잡한 절차를 한 단어로 실행.",
  },
  {
    name: "훅 (Hook)",
    analogy: "자동 트리거",
    desc: "특정 이벤트가 발생하면 자동 실행. 파일 저장 → 자동 포맷. 세션 종료 → 작업 기록 자동 저장. 사람이 기억할 필요 없이 시스템이 처리.",
  },
];

const bottomCards = [
  {
    name: "온톨로지 (Obsidian 연동)",
    analogy: "회사의 지식 창고",
    desc: "조직의 모든 지식이 Obsidian에 구조화되어 있다. AI가 답할 때 이 창고에서 실데이터를 찾아 참조한다. 일반론이 아닌 \"우리 회사\" 맥락의 답변.",
  },
  {
    name: "RLVR 학습",
    analogy: "실수에서 배우는 시스템",
    desc: "\"아닌데, 그건 틀려\" 같은 피드백을 AI가 자동 감지 → knowledge/에 저장. 3건 쌓이면 스킬 매뉴얼에 자동 반영. 같은 실수를 두 번 하지 않는다.",
  },
];

export const S12cHarnessBiz: React.FC = () => {
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
          비즈니스 하네스 실전
        </h2>
        <p
          style={{
            fontSize: 28,
            color: MUTED,
            marginTop: 0,
            marginBottom: 6,
            ...fade(15),
          }}
        >
          대기업에 전문 부서 시스템이 있듯, AI에게도 부서를 만들어줄 수 있다
        </p>
        <p
          style={{
            fontSize: 18,
            color: "rgba(161,161,170,0.6)",
            marginTop: 0,
            marginBottom: 24,
            ...fade(20),
          }}
        >
          business-ai-team — 16개 전문가 에이전트 · 17개 플러그인 · 110개 스킬 · 자동 라우팅 · RLVR 학습
        </p>

        {/* 6개 메커니즘 카드 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
            marginBottom: 10,
            ...fade(30),
          }}
        >
          {mechanisms.map((m) => (
            <div
              key={m.name}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: FG,
                    margin: 0,
                  }}
                >
                  {m.name}
                </p>
                <span
                  style={{
                    fontSize: 15,
                    color: "rgba(161,161,170,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  = {m.analogy}
                </span>
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: MUTED,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2개 하단 카드 (온톨로지 + RLVR) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            ...fade(55),
          }}
        >
          {bottomCards.map((c) => (
            <div
              key={c.name}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "16px 20px",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: FG,
                  margin: 0,
                  marginBottom: 2,
                }}
              >
                {c.name}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(161,161,170,0.5)",
                  margin: "0 0 8px",
                }}
              >
                = {c.analogy}
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: MUTED,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
