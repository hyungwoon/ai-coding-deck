"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const checks = [
  { no: "Q1", title: "출처를 클릭해서 확인했나", note: null },
  { no: "Q2", title: "날짜가 최신인가", note: null },
  { no: "Q3", title: "가이드라인 10원칙을 통과하나", note: null },
  { no: "Q4", title: "AI 활용을 표시했나", note: "개정 가이드라인 권고" },
  { no: "Q5", title: "진단·치료 수준 내용이면 전문가 감수를 받았나", note: null },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · 마무리
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      게시 전 <span className="text-muted-foreground">5문</span> 체크리스트
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      다섯 질문에 모두 예라고 답할 수 있을 때만 게시한다 — 하나라도 아니면 멈춘다.
    </p>

    <div className={cn("space-y-3 mb-10", anim(index))} style={{ transitionDelay: "300ms" }}>
      {checks.map((c) => (
        <div key={c.no} className="flex items-start gap-4 rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground pt-1">{c.no}</p>
          <div>
            <p className="text-lg font-semibold leading-snug">{c.title}</p>
            {c.note && <p className="text-sm text-muted-foreground mt-1">{c.note}</p>}
          </div>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">인쇄해서 붙여둘 한 장</p>
      <p className="text-xl sm:text-2xl font-bold">
        <span className="text-primary">팀 게시 규칙</span>으로 채택하세요
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S24Checklist";
export default S;
