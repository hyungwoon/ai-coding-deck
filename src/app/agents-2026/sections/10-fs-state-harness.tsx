"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const converged = ["Claude Code", "Cursor", "Devin", "Aider", "OpenHands", "goose"];
const harnessJobs = [
  "다음 액션 검증",
  "Sandbox에서 실행",
  "출력 캡처",
  "뭘 다시 줄지 결정",
  "언제 멈출지 결정",
  "체크포인트 결정",
  "Subagent spawn",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Learn ⑤ · File-System-as-State
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      Think → Act → Observe → repeat
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      파일 시스템 = source of truth. 모든 액션 로깅·재생 가능.
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">수렴한 사례</p>
      <div className="flex flex-wrap gap-2">
        {converged.map((c) => (
          <span key={c} className="text-sm px-3 py-1 rounded-full border border-border/40 bg-muted/30">{c}</span>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6 mb-6", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">더 깊은 가르침</p>
      <p className="text-xl sm:text-2xl font-bold">Harness가 모델보다 더 일한다.</p>
      <p className="mt-3 text-sm text-muted-foreground">
        모델 = stateless · Harness = stateful. 단발 툴 콜 이상의 에이전트라면 — harness에 시간을 써라. 모델은 그 안의 컴포넌트.
      </p>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-muted/20 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">모델이 하는 일 vs Harness가 하는 일</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <p className="text-sm font-semibold mb-1">모델</p>
          <p className="text-xs text-muted-foreground">다음 액션을 고른다</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Harness</p>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            {harnessJobs.map((j) => <li key={j}>• {j}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S10FsStateHarness";
export default S;
