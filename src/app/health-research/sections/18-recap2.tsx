"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const mapping = [
  { step: "주제 발굴", tpl: "T1", name: "아이디어 브레인스토밍" },
  { step: "리서치", tpl: "T2", name: "출처 강제 리서치" },
  { step: "카드뉴스 초안", tpl: "T3", name: "카드뉴스 8장 초안" },
  { step: "모니터링 판정", tpl: "T4", name: "모니터링 판정 보조" },
  { step: "보고서", tpl: "T5", name: "모니터링 보고서 구조화" },
  { step: "다듬기", tpl: "T6", name: "후속 다듬기 3종" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 Recap
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      워크플로우 × 템플릿 — <span className="text-muted-foreground">실습 직전 지도</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {mapping.map((m) => (
        <div key={m.tpl} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-1">{m.step} →</p>
          <p className="text-lg font-semibold leading-snug">
            <span className="font-mono text-primary">{m.tpl}</span> · {m.name}
          </p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-10", anim(index))} style={{ transitionDelay: "225ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase mb-1">＋ Common</p>
      <p className="text-lg font-semibold leading-snug">
        고정 블록 3 (SOURCE · HONESTY · CITATION)은 모든 단계에 공통 — 프롬프트 끝에 항상 붙인다.
      </p>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">외울 것도, 받아 적을 것도 없습니다.</p>
      <p className="text-xl sm:text-2xl font-bold">
        전부 <span className="text-primary">킷 페이지에 복사 버튼과 함께</span> 있습니다 — <span className="font-mono text-lg sm:text-xl">/health-research/kit</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S18Recap2";
export default S;
