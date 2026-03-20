"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const TitleSection = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        Vibe Coding · 2026
      </p>
      <h1 className={cn("text-5xl font-bold tracking-tight sm:text-7xl", anim(index))}>
        AI는 어떻게 작동하고
        <br />
        <span className="text-muted-foreground">어떻게 쓰는가</span>
      </h1>
      <p className={cn("mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", anim(index))} style={{ transitionDelay: "150ms" }}>
        LLM의 작동 원리부터 에이전트 생태계, 그리고 실제 진화 경로까지 —
        <br className="hidden sm:block" />
        처음 접하는 사람도 읽을 수 있게 정리했습니다.
      </p>
      <div className={cn("mt-16 text-muted-foreground/40", anim(index))} style={{ transitionDelay: "300ms" }}>
        <p className="text-xs mb-2">SCROLL</p>
        <span className="text-lg animate-bounce inline-block">↓</span>
      </div>
    </div>
  </SectionShell>
));
TitleSection.displayName = "TitleSection";
export default TitleSection;
