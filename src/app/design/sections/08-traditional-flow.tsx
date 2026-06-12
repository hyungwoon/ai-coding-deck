"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const STEPS = ["Figma 디자인", "정적 목업", "개발자 핸드오프", "70% 구현", "피드백 루프"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      전통 UIUX 워크플로
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      그림을 그려 넘기고, <span className="text-muted-foreground">기다린다</span>
    </h2>

    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {STEPS.map((s, i) => (
        <div key={s} className="flex items-center gap-2 sm:gap-3">
          <div
            className={cn("rounded-xl border border-border/40 bg-card/60 px-4 py-3 text-sm font-medium", anim(index))}
            style={{ transitionDelay: `${150 + i * 90}ms` }}
          >
            {s}
          </div>
          {i < STEPS.length - 1 && (
            <span className={cn("text-muted-foreground/40", anim(index))} style={{ transitionDelay: `${190 + i * 90}ms` }}>→</span>
          )}
        </div>
      ))}
    </div>

    <div className={cn("mt-10 rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "650ms" }}>
      <p className="text-lg leading-relaxed">
        &ldquo;디자인을 그림으로 그려 엔지니어에게 넘기고, <span className="text-foreground font-semibold">70% 완성된 채로 돌려받아</span> 피드백 루프를 도는 과정이 필요했다.&rdquo;
      </p>
      <p className="mt-3 text-sm text-muted-foreground">— Nick Inzucchi · Product Designer, Cursor</p>
    </div>
  </SectionShell>
));
S.displayName = "S08TraditionalFlow";
export default S;
