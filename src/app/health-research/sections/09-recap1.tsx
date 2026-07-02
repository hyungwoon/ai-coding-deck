"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const points = [
  { no: "01", body: "AI는 확률로 말한다" },
  { no: "02", body: "그래서 자신있게 틀린다" },
  { no: "03", body: "초안은 AI, 확인은 공식 출처" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 Recap
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      세 문장이면 충분하다
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {points.map((p) => (
        <div key={p.no} className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-3">{p.no}</p>
          <p className="text-xl sm:text-2xl font-bold leading-snug">{p.body}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S09Recap1";
export default S;
