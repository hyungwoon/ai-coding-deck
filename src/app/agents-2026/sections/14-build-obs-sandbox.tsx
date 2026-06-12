"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const obs = [
  { tool: "Langfuse", case: "OSS default. self-hostable, MIT, 트레이싱 + 프롬프트 버전 + judge" },
  { tool: "LangSmith", case: "이미 LangChain shop이면 더 타이트하게 통합" },
  { tool: "Braintrust", case: "리서치 스타일 eval, 엄격한 비교" },
  { tool: "OpenLLMetry / Traceloop", case: "polyglot 스택에 vendor-neutral OTel" },
];

const sandbox = [
  { tool: "E2B", case: "일반 sandboxed 코드 실행" },
  { tool: "Browserbase + Stagehand", case: "브라우저 자동화" },
  { tool: "Anthropic Computer Use", case: "진짜 OS 레벨 데스크탑 컨트롤" },
  { tool: "Modal", case: "짧은 burst" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Build · Observability + Sandbox
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      트레이싱·Eval · Runtime Sandbox
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Observability</p>
        <div className="space-y-2">
          {obs.map((o) => (
            <div key={o.tool} className="flex gap-3 text-sm">
              <span className="font-semibold w-44 shrink-0">{o.tool}</span>
              <span className="text-muted-foreground text-xs">{o.case}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Sandbox</p>
        <div className="space-y-2">
          {sandbox.map((s) => (
            <div key={s.tool} className="flex gap-3 text-sm">
              <span className="font-semibold w-44 shrink-0">{s.tool}</span>
              <span className="text-muted-foreground text-xs">{s.case}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5 mb-3", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="text-sm leading-relaxed">
        <span className="font-semibold">트레이싱(뭐 했나) + Eval(어제보다 나아졌나)</span>{" "}
        — <span className="text-muted-foreground">둘 다 필수. 블라인드 굴리는 비용 = 제대로 배선의 10배.</span>
      </p>
    </div>

    <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="text-sm">
        🚫 <span className="font-semibold">Unsandboxed 코드 실행 절대 금지.</span>{" "}
        <span className="text-muted-foreground">Prompt-injected 에이전트의 blast radius는 하고 싶지 않은 이야기다.</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S14BuildObsSandbox";
export default S;
