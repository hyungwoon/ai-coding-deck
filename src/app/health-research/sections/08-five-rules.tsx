"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rules = [
  { no: "01", rule: "출처 확인", apply: "AI가 준 링크는 클릭해서 실존하는지 확인한다." },
  { no: "02", rule: "날짜 확인", apply: "언제 기준 정보인지 묻고, 최신 자료와 대조한다." },
  { no: "03", rule: "목적 확인", apply: "광고·홍보가 섞인 답은 아닌지 살핀다." },
  { no: "04", rule: "여러 정보 비교", apply: "공식 포털·다른 AI와 교차 확인한다." },
  { no: "05", rule: "합리적 의심", apply: "너무 단정적이면 일단 의심한다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · AI 이해
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      검증법은 이미 배웠다
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))}>
      가이드라인 이용자 5수칙이 곧 AI 검증 5수칙.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {rules.map((r) => (
        <div key={r.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-2">수칙 {r.no}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{r.rule}</p>
          <p className="text-sm text-muted-foreground">{r.apply}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">새로 외울 것이 없다</p>
      <p className="text-xl sm:text-2xl font-bold">
        새 이론이 아니다 — <span className="text-primary">이미 배운 수칙을 AI에게 그대로</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S08FiveRules";
export default S;
