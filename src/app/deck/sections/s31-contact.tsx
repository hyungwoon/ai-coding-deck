"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideContact = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="relative overflow-hidden">
    {/* Radial gradient glow */}
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
    </div>

    <div className="relative text-center flex flex-col items-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-6", anim(index))}>
        ANTIEGG · HYUNGWOON
      </p>

      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-6xl mb-4", anim(index))} style={{ transitionDelay: "80ms" }}>
        AI 코딩 생태계 관계도
      </h2>

      <p className={cn("text-lg text-muted-foreground mb-10 max-w-md", anim(index))} style={{ transitionDelay: "160ms" }}>
        이 문서에 대해 궁금한 게 있으신가요?
      </p>

      <div className={cn("mb-16", anim(index))} style={{ transitionDelay: "240ms" }}>
        <p className="text-3xl font-bold tracking-tight text-primary mb-2">Thank you</p>
      </div>

      <div className={cn("flex flex-col items-center gap-3 text-muted-foreground/50", anim(index))} style={{ transitionDelay: "320ms" }}>
        <p className="text-xs font-mono tracking-widest uppercase">↑↓ 키로 탐색</p>
        <div className="h-px w-24 bg-border/40" />
        <p className="text-sm text-muted-foreground/40">© 2026 ANTIEGG HYUNGWOON</p>
      </div>
    </div>
  </SectionShell>
));
SlideContact.displayName = "SlideContact";
export default SlideContact;
