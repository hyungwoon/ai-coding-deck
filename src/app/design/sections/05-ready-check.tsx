"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const CHECKS = [
  "Claude Desktop 설치 + 로그인",
  "Code 탭 진입 확인",
  "유료 Claude 구독 활성",
  "실습 예제 폴더 준비 (강사 제공 또는 자기 프로젝트)",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      준비 체크
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      시작 전, 이것만 확인
    </h2>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {CHECKS.map((c, i) => (
        <div
          key={c}
          className={cn("flex items-center gap-3 rounded-xl border border-border/40 bg-card/60 px-5 py-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 80}ms` }}
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary">✓</span>
          <span className="text-sm">{c}</span>
        </div>
      ))}
    </div>

    <p className={cn("mt-8 text-lg font-medium", anim(index))} style={{ transitionDelay: "500ms" }}>
      다 됐으면 — <span className="text-muted-foreground">시작합니다.</span>
    </p>
  </SectionShell>
));
S.displayName = "S05ReadyCheck";
export default S;
