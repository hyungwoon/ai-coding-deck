"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const checklist = [
  "Outcome 하나를 골라라",
  "Ship 전에 트레이싱 + eval 배선",
  "LangGraph (또는 팀 동등물) 사용",
  "MCP 사용",
  "Runtime sandbox",
  "Default to single-agent",
  "실패 모드가 pull할 때만 scope 추가",
  "모델은 분기마다 재평가",
  "금요일에 3가지 읽기",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 9 · The Playbook
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      Playbook 1-Page
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      모든 걸 배울 필요 없다. 복리 쌓이는 것만.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {checklist.map((c, i) => (
        <div key={c} className="rounded-xl border border-border/40 bg-card/80 p-4 flex gap-3 items-start backdrop-blur-sm">
          <span className="font-mono text-xs text-muted-foreground/50 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-sm font-medium">{c}</span>
        </div>
      ))}
    </div>

    <div className={cn("rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="text-base text-muted-foreground mb-2">나머지는 — 취향, ship velocity, 안 추격하는 인내.</p>
      <p className="text-xl sm:text-3xl font-bold leading-snug">
        만드는 자가 되기에
        <br />
        <span className="text-primary">이보다 좋은 창은 없었다.</span>
      </p>
    </div>

    <p className={cn("mt-6 text-center text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "450ms" }}>
      원저: Rohit (@rohit4verse) — What to Learn, Build, and Skip in AI Agents (2026)
      <br />
      한국어 정리: 형운 · 2026-05-03
    </p>
  </SectionShell>
));
S.displayName = "S30Playbook";
export default S;
