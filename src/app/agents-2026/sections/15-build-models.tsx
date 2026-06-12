"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const models = [
  { workload: "신뢰성 툴 use, 멀티스텝 코히런스, graceful 실패 복구", model: "Claude Opus 4.7 / Sonnet 4.6", note: "Sonnet = cost-perf sweet spot" },
  { workload: "강한 CLI/터미널 추론, OpenAI infra", model: "GPT-5.4 / 5.5", note: "" },
  { workload: "Long-context heavy, multimodal heavy", model: "Gemini 2.5 / 3", note: "" },
  { workload: "비용이 top-end 성능보다 중요, narrow 태스크", model: "DeepSeek-V3.2 / Qwen 3.6", note: "" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Build · Models (2026-04)
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      모델은 swappable로 다뤄라
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      벤치마크 추격은 피곤하고 대부분 도움 안 됨. 실용적 picks:
    </p>

    <div className={cn("flex flex-col gap-3 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {models.map((m) => (
        <div key={m.model} className="rounded-2xl border border-border/40 bg-card/80 p-4 backdrop-blur-sm flex flex-col sm:flex-row gap-3 sm:items-center">
          <p className="text-sm text-muted-foreground sm:w-1/2">{m.workload}</p>
          <div className="sm:w-1/2 flex flex-col">
            <p className="text-base font-bold text-primary">{m.model}</p>
            {m.note && <p className="text-xs text-muted-foreground">{m.note}</p>}
          </div>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "320ms" }}>
      <p className="text-base font-semibold mb-2">한 모델에서만 작동하는 에이전트 = moat 아니라 smell.</p>
      <p className="text-sm text-muted-foreground">
        Eval로 deploy 결정. <span className="text-foreground font-semibold">분기마다 재평가</span>, 매주 아님.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S15BuildModels";
export default S;
