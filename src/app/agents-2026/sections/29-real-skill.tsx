"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const compounds = ["Context engineering", "Tool design", "Orchestrator-subagent 패턴", "Eval 규율", "Harness mindset"];
const noCompound = ["화요일에 런칭한 프레임워크의 API 표면을 외우기"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 8 · 진짜 스킬
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      &ldquo;에이전트&rdquo;가 아니다
    </h2>

    <div className={cn("rounded-3xl border border-primary/30 bg-primary/5 p-8 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
        표면이 계속 바뀌는 필드에서{" "}
        <span className="text-primary">어떤 일이 복리로 쌓이는지 알아내는 규율.</span>
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">복리 ✓</p>
        <ul className="space-y-2">
          {compounds.map((c) => (
            <li key={c} className="text-base font-semibold flex gap-2 items-center">
              <span className="text-primary">↑</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-6", anim(index))} style={{ transitionDelay: "330ms" }}>
        <p className="font-mono text-xs text-destructive uppercase tracking-widest mb-3">복리 ✗</p>
        <ul className="space-y-2">
          {noCompound.map((c) => (
            <li key={c} className="text-base flex gap-2 items-start">
              <span className="text-destructive shrink-0">→</span>
              <span className="text-muted-foreground">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          6개월 뒤면 다 다르다.
        </p>
      </div>
    </div>

    <p className={cn("mt-8 text-center text-base text-muted-foreground", anim(index))} style={{ transitionDelay: "420ms" }}>
      구분되면 → 주간 런칭 = <span className="text-foreground font-semibold">압박 X · 무시할 수 있는 노이즈.</span>
    </p>
  </SectionShell>
));
S.displayName = "S29RealSkill";
export default S;
