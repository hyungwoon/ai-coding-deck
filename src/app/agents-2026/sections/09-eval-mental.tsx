"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const moving = [
  "모델 새 버전 출시",
  "프레임워크 breaking change",
  "벤더가 엔드포인트 deprecate",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Eval · 멘탈 모델
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Eval = 움직이는 타깃 위의 unit test
    </h2>

    <div className={cn("rounded-3xl border border-primary/30 bg-primary/5 p-8 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
        나머지 모든 게 아래에서 바뀌는 동안{" "}
        <span className="text-primary">에이전트를 정직하게 유지하는 unit test.</span>
      </p>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6", anim(index))} style={{ transitionDelay: "250ms" }}>
      {moving.map((m) => (
        <div key={m} className="rounded-xl border border-border/40 bg-card/80 p-4 text-center">
          <p className="text-sm">{m}</p>
        </div>
      ))}
    </div>
    <p className={cn("text-center text-sm text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "320ms" }}>
      → 너의 eval만이 에이전트가 여전히 일하는지 알려준다.
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-muted/20 p-6", anim(index))} style={{ transitionDelay: "400ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">도구는 병목 아님</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {["Braintrust", "Langfuse", "LangSmith"].map((t) => (
          <span key={t} className="text-sm px-3 py-1 rounded-full border border-border/40 bg-card/60">{t}</span>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        병목은 <span className="text-foreground font-semibold">라벨링된 셋이 처음에 있느냐</span>다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S09EvalMental";
export default S;
