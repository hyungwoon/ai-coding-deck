"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Learn ③ · Multi-Agent Synthesis
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      Orchestrator-Subagent 패턴
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      2024-2025 멀티에이전트 논쟁의 결론 — 모두가 ship하는 합의
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-destructive mb-2">Naïve 멀티</p>
        <p className="text-sm font-semibold mb-1">공유 상태 동시 write</p>
        <p className="text-xs text-muted-foreground">에러 복리 → 재앙적 실패</p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">싱글 에이전트</p>
        <p className="text-sm font-semibold mb-1">하나의 루프</p>
        <p className="text-xs text-muted-foreground">생각보다 멀리 스케일된다</p>
      </div>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Orchestrator-Subagent</p>
        <p className="text-sm font-semibold mb-1">Read-only 위임 + 합성</p>
        <p className="text-xs text-muted-foreground">프로덕션에서 작동하는 유일한 모양</p>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 mb-4", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">규칙</p>
      <ul className="text-sm leading-relaxed space-y-1.5">
        <li>• Subagent: 작고 격리된 컨텍스트, <span className="text-muted-foreground">공유 상태 mutate 불가</span></li>
        <li>• Orchestrator: <span className="text-foreground font-semibold">write 소유</span></li>
        <li>• 사례: Anthropic 리서치 시스템, Claude Code subagent, Spring AI</li>
      </ul>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "380ms" }}>
      <p className="text-base font-semibold mb-1">Default to single-agent.</p>
      <p className="text-sm text-muted-foreground">
        진짜 벽(컨텍스트 압박, sequential 툴 콜 latency, heterogeneity)을 느끼기 전에 짓는 건 — 필요 없는 복잡도를 ship하는 것.
      </p>
    </div>

    <p className={cn("mt-4 text-xs text-muted-foreground italic", anim(index))} style={{ transitionDelay: "450ms" }}>
      📖 Cognition — Don&apos;t Build Multi-Agents · Anthropic — How we built our multi-agent research system (같은 얘기, 다른 어휘)
    </p>
  </SectionShell>
));
S.displayName = "S07OrchestratorSubagent";
export default S;
