"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

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

const S12cHarnessBiz = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      비즈니스 하네스 실전
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-3", anim(index))} style={{ transitionDelay: "80ms" }}>
      대기업에 전문 부서 시스템이 있듯, AI에게도 부서를 만들어줄 수 있다
    </p>
    <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      business-ai-team — 16개 전문가 에이전트 · 17개 플러그인 · 110개 스킬 · 자동 라우팅 · RLVR 학습
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      {mechanisms.map((m) => (
        <div key={m.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-baseline gap-2 mb-1">
            <p className="text-sm font-bold">{m.name}</p>
            <span className="text-sm text-muted-foreground/50">= {m.analogy}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">온톨로지 (Obsidian 연동)</p>
        <p className="text-sm text-muted-foreground/50 mb-1">= 회사의 지식 창고</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          조직의 모든 지식이 Obsidian에 구조화되어 있다. AI가 답할 때 이 창고에서 실데이터를 찾아 참조한다. 일반론이 아닌 &quot;우리 회사&quot; 맥락의 답변.
        </p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">RLVR 학습</p>
        <p className="text-sm text-muted-foreground/50 mb-1">= 실수에서 배우는 시스템</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          &quot;아닌데, 그건 틀려&quot; 같은 피드백을 AI가 자동 감지 → knowledge/에 저장. 3건 쌓이면 스킬 매뉴얼에 자동 반영. 같은 실수를 두 번 하지 않는다.
        </p>
      </div>
    </div>
  </SectionShell>
));

S12cHarnessBiz.displayName = "S12cHarnessBiz";
export default S12cHarnessBiz;
