"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { n: "1", t: "프로덕션 트레이스 수확", d: "실패 라벨링 → regression set으로 취급" },
  { n: "2", t: "새 실패 → 셋 추가", d: "ship된 실패는 곧 다음 회귀 테스트" },
  { n: "3", t: "LLM-as-judge + exact-match", d: "주관 vs 객관 부분을 분리" },
  { n: "4", t: "모든 변경 전에 스위트", d: "prompt·model·tool 변경은 모두 게이트" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Learn ④ · Eval & Golden Dataset
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      최고 레버리지, 최저 투자된 습관
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      신뢰성 있는 에이전트 ship하는 팀 = 다 eval 있다. 안 ship하는 팀 = 다 없다.
    </p>

    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {steps.map((s) => (
        <div key={s.n} className="rounded-2xl border border-border/40 bg-card/80 p-4 backdrop-blur-sm">
          <p className="font-mono text-xs text-primary mb-2">STEP {s.n}</p>
          <p className="text-sm font-semibold mb-1">{s.t}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6 mb-4", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Spotify 사례</p>
      <p className="text-2xl sm:text-3xl font-bold">judge 레이어가 출력의 ~25%를 ship 전 거부</p>
      <p className="mt-2 text-sm text-muted-foreground">없었으면 4개 중 1개의 나쁜 결과가 사용자에게 도달.</p>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-muted/20 p-5", anim(index))} style={{ transitionDelay: "380ms" }}>
      <p className="text-sm">
        🎯 <span className="font-semibold">Day 1에 50개 손라벨로 시작.</span>{" "}
        <span className="text-muted-foreground">오후 한 번이면 충분. 변명 없음.</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S08EvalGolden";
export default S;
