"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const single = ["LangGraph 또는 Pydantic AI", "Sonnet 4.6 또는 GPT-5", "잘 설계된 툴 3~7개", "FS 또는 DB = 상태", "작은 청중에 ship → 트레이스 봐라"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · How to Move ②③ · Tracing+Eval · Single-Agent
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Ship 전에 배선 · 싱글 에이전트로 시작
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">② Ship 전 트레이싱+Eval</p>
        <ul className="text-sm leading-relaxed space-y-1.5 mb-4">
          <li>• Langfuse 또는 LangSmith 배선</li>
          <li>• Golden dataset 손으로 50개</li>
          <li>• 측정 못 하는 건 개선 못 한다</li>
        </ul>
        <p className="text-sm font-semibold">
          나중 비용 ≈ <span className="text-primary">지금 짓는 비용의 10배</span>
        </p>
      </div>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">③ 싱글 에이전트 루프</p>
        <ul className="text-sm leading-relaxed space-y-1.5 text-muted-foreground">
          {single.map((s) => <li key={s}>• {s}</li>)}
        </ul>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S20MoveTracingEval";
export default S;
