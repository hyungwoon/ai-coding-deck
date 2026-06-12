"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const JOURNEY = [
  { t: "00", label: "셋업", desc: "Claude Desktop + MCP", min: "10분" },
  { t: "01", label: "전통 vs AI Native Design", desc: "무엇이 바뀌었나", min: "30분" },
  { t: "02", label: "Design System → DESIGN.md", desc: "AI가 읽는 디자인", min: "30분" },
  { t: "03", label: "Atomic: 추출 vs 암묵지", desc: "무엇이 자동화 안 되나", min: "20분" },
  { t: "04", label: "DESIGN.md 구축법", desc: "실무 가이드", min: "40분" },
  { t: "05", label: "핸즈온 실습", desc: "내 DESIGN.md 4개 + MCP", min: "90분" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      오늘의 목표
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      4시간 뒤, 당신 손에 <span className="text-muted-foreground">DESIGN.md 4개와 MCP</span>가 남는다
    </h2>
    <p className={cn("text-muted-foreground mb-10 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      당신의 디자인 시스템을, AI가 읽고 일관되게 구현하는 형태로 직접 만든다.
    </p>
    <div className="space-y-2">
      {JOURNEY.map((j, i) => (
        <div
          key={j.t}
          className={cn(
            "flex items-center gap-4 rounded-xl border border-border/40 bg-card/60 px-5 py-3",
            anim(index),
          )}
          style={{ transitionDelay: `${150 + i * 60}ms` }}
        >
          <span className="font-mono text-sm text-primary">{j.t}</span>
          <span className="font-semibold">{j.label}</span>
          <span className="ml-auto hidden text-sm text-muted-foreground sm:block">{j.desc}</span>
          <span className="font-mono text-xs text-muted-foreground/60">{j.min}</span>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S01Goal";
export default S;
