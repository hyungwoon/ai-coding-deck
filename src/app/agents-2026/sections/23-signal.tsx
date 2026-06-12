"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const signals = [
  "숫자 있는 포스트모템 (adoption claim 아님)",
  "Primitive — 프로토콜·패턴·인프라",
  "교체가 아니라 인터옵",
  "Capability가 아니라 실패 모드 해결을 설명",
  "&ldquo;뭐가 안 됐는지&rdquo; 글이 쓰일 만큼 오래 살아남음",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 6 · Reading the Tide · Signal
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Signal의 구체적 신호
    </h2>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {signals.map((s, i) => (
        <div key={i} className="rounded-2xl border border-primary/30 bg-primary/5 p-5 flex gap-3 items-start">
          <span className="text-primary text-xl shrink-0">✓</span>
          <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: s }} />
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S23Signal";
export default S;
