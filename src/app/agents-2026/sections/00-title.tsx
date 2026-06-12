"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        AI Agents · 2026
      </p>
      <h1 className={cn("text-5xl font-bold tracking-tight sm:text-7xl", anim(index))}>
        무엇을 배우고
        <br />
        <span className="text-muted-foreground">무엇으로 만들고</span>
        <br />
        무엇을 버릴 것인가
      </h1>
      <p className={cn("mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", anim(index))} style={{ transitionDelay: "150ms" }}>
        매일 새 프레임워크, 새 벤치마크, 새 &ldquo;10x&rdquo; 런칭이 쏟아지는 시대.
        <br className="hidden sm:block" />
        진짜 신호는 무엇이고, 긴급함의 옷을 입은 노이즈는 무엇인가.
      </p>
      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "250ms" }}>
        원저: Rohit (@rohit4verse) · 한국어 정리: 형운
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
