"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        AI Native Design · 2026
      </p>
      <h1 className={cn("text-5xl font-bold tracking-tight sm:text-7xl", anim(index))}>
        Design System에서
        <br />
        <span className="text-muted-foreground">DESIGN.md</span>로
      </h1>
      <p className={cn("mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", anim(index))} style={{ transitionDelay: "150ms" }}>
        디자이너가 AI와 함께 도구·크래프트·팀을 재설계하는 시대.
        <br className="hidden sm:block" />
        당신의 디자인 시스템을 AI가 읽는 DESIGN.md로 만든다.
      </p>
      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "250ms" }}>
        4시간 핸즈온 워크숍 · 형운
      </p>
      <div className={cn("mt-16 text-muted-foreground/40", anim(index))} style={{ transitionDelay: "300ms" }}>
        <p className="text-xs mb-2">SCROLL</p>
        <span className="text-lg animate-bounce inline-block">↓</span>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S00Title";
export default S;
