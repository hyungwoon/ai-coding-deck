"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const STATS = [
  { n: "91%", l: "AI를 주간 단위로 사용", sub: "2025년 54% → +37%p" },
  { n: "3→7", l: "평균 AI 툴스택 (2배)", sub: "1년 만에 두 배로" },
  { n: "50%", l: "AI 코드를 프로덕션 배포", sub: "design engineer만의 일이 아니다" },
  { n: "78%", l: "Claude 사용 · ChatGPT 추월", sub: "2025 ChatGPT 우위 → 역전" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      데이터로 보는 전환
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      1년 만에, 디자인의 기본값이 바뀌었다
    </h2>

    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {STATS.map((s, i) => (
        <div
          key={s.l}
          className={cn("rounded-2xl border border-border/40 bg-card/60 p-6", anim(index))}
          style={{ transitionDelay: `${150 + i * 90}ms` }}
        >
          <div className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">{s.n}</div>
          <p className="mt-3 font-medium">{s.l}</p>
          <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
        </div>
      ))}
    </div>

    <p className={cn("mt-6 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "550ms" }}>
      출처: AI in Design survey, Q1 2026
    </p>
  </SectionShell>
));
S.displayName = "S07DataShift";
export default S;
