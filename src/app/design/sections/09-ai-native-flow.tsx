"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const STEPS = ["의도 · 문제 정의", "AI와 직접 빌드", "작동하는 결과물", "곧장 종착점으로"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-primary uppercase mb-3", anim(index))}>
      AI Native 워크플로
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      핸드오프를 건너뛰고, <span className="text-primary">직접 만든다</span>
    </h2>

    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {STEPS.map((s, i) => (
        <div key={s} className="flex items-center gap-2 sm:gap-3">
          <div
            className={cn("rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-medium", anim(index))}
            style={{ transitionDelay: `${150 + i * 100}ms` }}
          >
            {s}
          </div>
          {i < STEPS.length - 1 && (
            <span className={cn("text-primary/50", anim(index))} style={{ transitionDelay: `${200 + i * 100}ms` }}>→</span>
          )}
        </div>
      ))}
    </div>

    <div className={cn("mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "650ms" }}>
      <p className="text-lg leading-relaxed">
        &ldquo;코딩을 하면 <span className="text-foreground font-semibold">금속(metal)에 더 가까이</span> 붙는다. 70% 완성으로 돌려받는 피드백 루프가 없다. 곧장 종착점까지 가서 내 비전을 직접 만든다.&rdquo;
      </p>
      <p className="mt-3 text-sm text-muted-foreground">— Nick Inzucchi · Product Designer, Cursor</p>
    </div>
  </SectionShell>
));
S.displayName = "S09AiNativeFlow";
export default S;
