"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const targets = [
  "지원 티켓 deflection",
  "1차 법무 리뷰 초안",
  "인바운드 리드 qualifying",
  "월간 리포트 생성",
];

const constrained = [
  { q: "어떤 프레임워크?", a: "철학적 X. Outcome을 가장 빨리 ship하는 것." },
  { q: "어떤 모델?", a: "벤치마크 논쟁 X. 이 일에 너의 eval이 작동한다고 말하는 것." },
  { q: "메모리 / subagent / 커스텀 harness 필요?", a: "Thought experiment X. 너의 실패 모드가 요구하는 것만." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · How to Move ① · Outcome
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      이미 중요한 outcome 하나를 골라라
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      문샷 X · 호리즌탈 &ldquo;에이전트 플랫폼&rdquo; X · 비즈니스가 이미 신경 쓰는 측정 가능한 것 ✓
    </p>

    <div className={cn("flex flex-wrap gap-2 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {targets.map((t) => (
        <span key={t} className="text-sm px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-foreground">
          {t}
        </span>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6 mb-8", anim(index))} style={{ transitionDelay: "230ms" }}>
      <p className="text-base font-semibold">그 outcome이 움직이면 = 에이전트 성공</p>
      <p className="mt-1 text-sm text-muted-foreground">Day 1부터 이게 너의 eval target.</p>
    </div>

    <h3 className={cn("text-xl font-bold mb-4", anim(index))} style={{ transitionDelay: "300ms" }}>
      이 스텝이 후속 결정을 모두 제약한다
    </h3>
    <div className={cn("flex flex-col gap-2", anim(index))} style={{ transitionDelay: "380ms" }}>
      {constrained.map((c) => (
        <div key={c.q} className="rounded-xl border border-border/40 bg-card/80 p-4 flex gap-3 items-start">
          <span className="font-mono text-sm text-muted-foreground/60 shrink-0">→</span>
          <div>
            <p className="text-sm font-semibold mb-0.5">{c.q}</p>
            <p className="text-xs text-muted-foreground">{c.a}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S19MoveOutcome";
export default S;
