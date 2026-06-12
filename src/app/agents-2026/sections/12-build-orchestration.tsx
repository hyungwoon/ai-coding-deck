"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const picks = [
  { env: "프로덕션 default", tool: "LangGraph", note: "대기업 ~1/3 사용. typed state, conditional edge, durable workflow, HITL checkpoint. verbose함이 features." },
  { env: "TypeScript", tool: "Mastra", note: "de facto 픽. 가장 깔끔한 멘탈 모델." },
  { env: "Pydantic / 타입 안전성 1급", tool: "Pydantic AI", note: "v1.0 (2025년 말). 모멘텀 진짜." },
  { env: "프로바이더 네이티브", tool: "Claude Agent SDK / OpenAI Agents SDK", note: "computer use, voice, real-time. LangGraph 노드 안에서. heterogeneous 시스템의 top-level orchestrator로 만들지 마라." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Build · Orchestration
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      구체적 추천 (2026년 4월)
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      천천히 변할 거다. 여기서는 지루하게 골라라.
    </p>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {picks.map((p) => (
        <div key={p.env} className="rounded-2xl border border-border/40 bg-card/80 p-5 backdrop-blur-sm flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="sm:w-44 shrink-0">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{p.env}</p>
          </div>
          <div className="sm:w-56 shrink-0">
            <p className="text-base font-bold text-primary">{p.tool}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.note}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S12BuildOrchestration";
export default S;
