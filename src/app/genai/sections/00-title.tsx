"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        생성형 AI · 원리에서 유도하는 프롬프트
      </p>
      <h1 className={cn("text-5xl font-bold tracking-tight sm:text-7xl", anim(index))}>
        조건을 좁히는 일
      </h1>
      <p className={cn("mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", anim(index))} style={{ transitionDelay: "150ms" }}>
        텍스트·이미지·영상은 어떤 로직으로 만들어지는가 —
        <br className="hidden sm:block" />
        그리고 그 로직에서 「잘 만드는 법」은 어떻게 유도되는가
      </p>
      <div className={cn("mt-10 flex flex-wrap justify-center gap-2 text-xs", anim(index))} style={{ transitionDelay: "220ms" }}>
        {["LLM 기초", "이미지 생성·참조", "영상 생성", "노드 파이프라인", "실전 원칙"].map((t) => (
          <span key={t} className="rounded-full border border-border/50 bg-card/60 px-3 py-1 text-muted-foreground">{t}</span>
        ))}
      </div>
      <div className={cn("mt-16 text-muted-foreground/40", anim(index))} style={{ transitionDelay: "300ms" }}>
        <p className="text-xs mb-2">SCROLL</p>
        <span className="text-lg animate-bounce inline-block">↓</span>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S00Title";
export default S;
