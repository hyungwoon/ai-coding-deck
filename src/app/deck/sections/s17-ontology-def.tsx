"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S17OntologyDef = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
      온톨로지 — AI의 장기 기억을 설계한다
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "100ms" }}>
      맥락을 매번 넣는 것과 온톨로지를 구축하는 것은 다르다
    </p>

    {/* Definition */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">온톨로지(Ontology)란?</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        개념·관계·규칙을 구조적으로 정의한 <strong className="text-foreground">지식의 지도</strong>. 단순한 메모나 문서가 아니라, <strong className="text-foreground">"무엇이 무엇과 어떻게 연결되어 있는가"</strong>를 기계가 읽을 수 있는 형태로 정의한 것.
        맥락은 매번 넣어줘야 하지만, 온톨로지는 <strong className="text-foreground">한 번 구조화하면 에이전트가 스스로 참조하는 영구적인 지식 기반</strong>이 된다.
      </p>
    </div>

    {/* Comparison */}
    <div className={cn("grid grid-cols-2 gap-4", anim(index))} style={{ transitionDelay: "200ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">온톨로지 없는 AI</p>
        <p className="text-base font-semibold mb-3">매번 처음부터 가르쳐야 하는 직원</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          "우리 회사가 뭐 하는 곳이에요?" "이 고객이 누구예요?" "우리 팀의 용어는요?"
          <br /><br />
          세션이 끝나면 모두 사라짐. <strong className="text-foreground">매번 설명을 반복해야 함.</strong>
        </p>
      </div>

      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm backdrop-blur-sm">
        <p className="text-xs font-mono tracking-widest text-primary/70 uppercase mb-3">온톨로지 갖춘 AI</p>
        <p className="text-base font-semibold mb-3">맥락을 내재화한 전문 어시스턴트</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          회사 구조, 제품, 고객, 용어, 관계, 규칙이 이미 구조화되어 있음.
          <br /><br />
          <strong className="text-foreground">지시만 하면 됨. 설명은 필요 없음.</strong>
        </p>
      </div>
    </div>

    <div className={cn("mt-5 rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-xs text-muted-foreground leading-relaxed text-center">
        💡 온톨로지를 구현하는 형식은 자유 — <strong className="text-foreground">CLAUDE.md · Notion DB · JSON · 마크다운</strong> 어느 것이든, 구조화만 되어 있으면 된다
      </p>
    </div>
  </SectionShell>
));
S17OntologyDef.displayName = "S17OntologyDef";
export default S17OntologyDef;
