"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        2026 절주서포터즈 · 생성형 AI 활용
      </p>
      <h1 className={cn("text-5xl font-bold tracking-tight sm:text-7xl", anim(index))}>
        같은 얼굴,
        <br />
        <span className="text-muted-foreground">맞는 사실</span>
      </h1>
      <p className={cn("mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", anim(index))} style={{ transitionDelay: "150ms" }}>
        생성형 AI로 절주 콘텐츠 만들기 —
        <br className="hidden sm:block" />
        2026 트렌드 · 생성 원리 · 일관성 프롬프팅 · 공공 메시지 검증
      </p>
      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "250ms" }}>
        형운 · AI Product Manager
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
