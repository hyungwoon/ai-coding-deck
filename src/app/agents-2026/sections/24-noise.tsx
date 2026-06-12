"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const noises = [
  "30일 후에도 프로덕션 케이스 스터디 없는 데모 비디오",
  "너무 깔끔해서 진짜라고 믿기 힘든 벤치마크 도약",
  "&ldquo;autonomous&rdquo;, &ldquo;agent OS&rdquo;, &ldquo;build any agent&rdquo; 단서 없이 쓰는 피치",
  "기존 트레이싱·auth·config를 버리라고 가정하는 docs",
  "Star ↑인데 commit · release · contributor는 정체",
  "Twitter velocity O / GitHub velocity X",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 6 · Reading the Tide · Noise
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Noise의 구체적 신호
    </h2>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {noises.map((n, i) => (
        <div key={i} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 flex gap-3 items-start">
          <span className="text-destructive text-xl shrink-0">✗</span>
          <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: n }} />
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S24Noise";
export default S;
