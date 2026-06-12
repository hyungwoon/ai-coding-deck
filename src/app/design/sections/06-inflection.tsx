"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8", anim(index))}>
        An Inflection Point · 변곡점
      </p>
      <h2 className={cn("text-3xl font-bold leading-tight tracking-tight sm:text-5xl", anim(index))}>
        2025년, 디자이너는 AI를
        <br />
        <span className="text-muted-foreground">실험(experimenting)</span>하고 있었다.
      </h2>
      <div className={cn("my-8 text-2xl text-muted-foreground/40", anim(index))} style={{ transitionDelay: "200ms" }}>
        ↓
      </div>
      <h2 className={cn("text-3xl font-bold leading-tight tracking-tight sm:text-5xl", anim(index))} style={{ transitionDelay: "300ms" }}>
        2026년, 그들은 AI를 중심으로
        <br />
        <span className="text-primary">재설계(rebuilding)</span>한다.
      </h2>
      <p className={cn("mt-12 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "450ms" }}>
        AI in Design Report 2026 · Designer Fund × Foundation Capital · 60+개국 906명 설문
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S06Inflection";
export default S;
