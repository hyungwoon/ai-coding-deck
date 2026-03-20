"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S15rRecap2 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("text-sm font-bold text-primary tracking-widest uppercase mb-4", anim(index))}>
      Part 2 Recap
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      파트 2 요약
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "120ms" }}>
      {[
        { title: "Claude Code & 바이브 코딩", items: ["6가지 핵심 개념", "플래닝이 90%", "7가지 안티패턴 회피", "think / ultrathink"] },
        { title: "하네스", items: ["방향 없는 에이전트는 무의미", "코딩 하네스 (OMC + hwclaude)", "비즈니스 하네스 (16개 부서)", "Level 0 → Level 3 성숙도"] },
        { title: "도구 선택 & 비용", items: ["에디터 → 하이브리드 → 에이전트", "주도권의 스펙트럼", "Pro $20 / Max $100", "플래닝 = 비용 절감"] },
      ].map((col) => (
        <div key={col.title} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-bold mb-3">{col.title}</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            {col.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionShell>
));

S15rRecap2.displayName = "S15rRecap2";
export default S15rRecap2;
