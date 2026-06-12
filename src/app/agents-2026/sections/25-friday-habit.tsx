"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const sources = [
  { name: "Anthropic 엔지니어링 블로그", desc: "프로덕션 에이전트 디자인의 가장 솔직한 1차 소스" },
  { name: "Simon Willison's notes", desc: "필드 전체를 읽고 큐레이션하는 가장 신뢰할 만한 한 사람" },
  { name: "Latent Space", desc: "리더십 인터뷰와 리서치 헤드라인의 신호 비중" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 6 · 주간 습관
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      금요일 30분, 필드를 위해 reserve
    </h2>

    <div className={cn("rounded-3xl border border-primary/30 bg-primary/5 p-8 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-2xl sm:text-3xl font-bold mb-2">3가지 읽기 + 1~2개 포스트모템 skim.</p>
      <p className="text-sm text-muted-foreground">그 주의 나머지는 다 스킵. 의미 있는 것들을 알게 될 거다.</p>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "280ms" }}>
      {sources.map((s, i) => (
        <div key={s.name} className="rounded-2xl border border-border/40 bg-card/80 p-5 backdrop-blur-sm">
          <p className="font-mono text-xs text-primary mb-2">#{i + 1}</p>
          <p className="text-base font-bold mb-2">{s.name}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S25FridayHabit";
export default S;
