"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const mechanisms = [
  {
    name: "에이전트 (Agent)",
    analogy: "전문 부서장",
    desc: "마케팅·영업·법무·재무·HR 등 16명의 부서장. 각자 도메인 전문 지식을 갖고 있다.",
  },
  {
    name: "플러그인 (Plugin)",
    analogy: "부서의 업무 매뉴얼",
    desc: "각 부서가 보유한 매뉴얼 묶음. 마케팅엔 브랜드·캠페인, 법무엔 계약·컴플라이언스. 17개 세트.",
  },
  {
    name: "스킬 (Skill)",
    analogy: "매뉴얼 안의 절차서",
    desc: "'경쟁사 분석하는 법', 'PRD 작성하는 법' 같은 110개의 구체적 실행 절차.",
  },
  {
    name: "라우팅 (Routing)",
    analogy: "안내 데스크",
    desc: "요청을 해당 부서에 전달 + 관련 매뉴얼을 꺼내준다. 모호하면 먼저 인터뷰로 명확화.",
  },
  {
    name: "커맨드 (Command)",
    analogy: "단축 버튼",
    desc: "/ask → 전문가 답변. /route → 자동 라우팅. /team → 부서 목록. 한 단어로 실행.",
  },
  {
    name: "훅 (Hook)",
    analogy: "자동 트리거",
    desc: "세션 종료 → 작업 기록 자동 저장. 파일 저장 → 자동 포맷. 사람이 기억할 필요 없음.",
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
    <p className={cn("text-sm text-muted-foreground/60 mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      business-ai-team — 31개 네이티브 스킬 · 112개 Plugin 스킬 · 5개 커맨드 · 4개 자동 규칙
    </p>

    {/* 구성 요소 비유 카드 */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5", anim(index))} style={{ transitionDelay: "140ms" }}>
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

    {/* 온톨로지 + 피드백 루프 */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4", anim(index))} style={{ transitionDelay: "200ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">온톨로지 (Obsidian 연동)</p>
        <p className="text-sm text-muted-foreground/50 mb-1">= 회사의 지식 창고</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          조직의 모든 지식이 Obsidian에 구조화되어 있다. AI가 답할 때 이 창고에서 실데이터를 찾아 참조한다. 일반론이 아닌 &quot;우리 회사&quot; 맥락의 답변.
        </p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">피드백 루프</p>
        <p className="text-sm text-muted-foreground/50 mb-1">= 실수에서 배우는 시스템</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          &quot;아닌데, 그건 틀려&quot; 같은 피드백을 자동 감지 &rarr; knowledge/에 저장. 3건 쌓이면 SKILL.md에 자동 반영. 같은 실수를 두 번 하지 않는다.
        </p>
      </div>
    </div>

    <div className={cn("text-right", anim(index))} style={{ transitionDelay: "320ms" }}>
      <a
        href="/architecture.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-border"
      >
        아키텍처 전체 보기 &rarr;
      </a>
    </div>
  </SectionShell>
));

S12cHarnessBiz.displayName = "S12cHarnessBiz";
export default S12cHarnessBiz;
