"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const blocks = [
  { num: "①", label: "SOURCE", name: "출처 위계", text: "국가건강정보포털·질병관리청 등 공공기관 자료를 우선 인용해. 출처가 불분명하면 인용하지 마." },
  { num: "②", label: "HONESTY", name: "정직 강제", text: "확실하지 않으면 모른다고 답해. 절대 지어내지 마." },
  { num: "③", label: "CITATION", name: "표기 강제", text: "모든 주장에 출처 URL과 발행 날짜를 붙여." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Fixed Blocks
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      어떤 프롬프트에든 넣는 <span className="text-muted-foreground">고정 블록 3</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      프롬프트 끝에 복붙하는 상수 — 외울 필요 없음.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {blocks.map((b) => (
        <div key={b.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground uppercase mb-1">{b.num} {b.label}</p>
          <p className="text-lg font-semibold leading-snug mb-3">{b.name}</p>
          <div className="rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line">
            {b.text}
          </div>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">받아 적지 마세요.</p>
      <p className="text-xl sm:text-2xl font-bold">
        <span className="text-primary">킷 페이지에서 복사</span> — <span className="font-mono text-lg sm:text-xl">/health-research/kit</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S13FixedBlocks";
export default S;
