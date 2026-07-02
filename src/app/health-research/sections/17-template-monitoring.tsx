"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { num: "①", title: "주장 분해", desc: "의심 콘텐츠의 주장을 문장 단위로 쪼갠다", star: true },
  { num: "②", title: "3분류", desc: "주장별로 근거 있음 / 없음 / 과장", star: false },
  { num: "③", title: "10원칙 매핑", desc: "가이드라인 10가지 기본원칙 중 무엇을 위반했나", star: false },
  { num: "④", title: "보고서 초안 (T5)", desc: "발견 경위→문제점→대조→올바른 정보→출처", star: false },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Template T4 + T5
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      모니터링 — <span className="text-muted-foreground">주장 분해 → 출처 대조</span>
    </h2>

    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-0 rounded-2xl border border-border/40 overflow-hidden mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {steps.map((s, i) => (
        <div
          key={s.num}
          className={cn(
            "p-4 border-border/40",
            i % 2 === 0 && "border-r",
            i % 2 === 1 && i !== 3 && "sm:border-r",
            i < 2 && "border-b sm:border-b-0",
            s.star && "bg-primary/5",
          )}
        >
          <p className="font-mono text-xs text-muted-foreground mb-1">{s.num}{s.star && " ★"}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{s.title}</p>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-sm backdrop-blur-sm mb-10", anim(index))} style={{ transitionDelay: "225ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase mb-1">✗ Anti-pattern</p>
      <p className="text-lg font-semibold leading-snug mb-1">통째로 「이거 맞아?」 금지</p>
      <p className="text-sm text-muted-foreground">두루뭉술한 질문엔 두루뭉술한 답이 돌아온다 — 문장 단위로 쪼개서 물어야 판정이 가능해진다.</p>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">분해와 대조까지가 AI의 일.</p>
      <p className="text-xl sm:text-2xl font-bold">
        AI는 판정 보조 — <span className="text-primary">최종 판정은 언제나 사람</span>.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S17TemplateMonitoring";
export default S;
