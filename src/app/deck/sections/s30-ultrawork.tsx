"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideUltrawork = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        11 · 사용법
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
        에이전트 팀 &amp; 사용법
      </h2>

      {/* 3 Agent Cards */}
      <div className={cn("grid grid-cols-3 gap-4 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">오케스트레이터</p>
          <p className="text-sm font-semibold mb-2">Sisyphus</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            메인 오케스트레이터. 전체 작업을 분해하고 서브 에이전트에 위임·조율한다.
          </p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">전략 기획</p>
          <p className="text-sm font-semibold mb-2">Prometheus</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            전략 기획가. 인터뷰 모드로 요구사항을 정제하고 실행 플랜을 설계한다.
          </p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">실행 전문가</p>
          <p className="text-sm font-semibold mb-2">Hephaestus</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Sisyphus 위임을 받아 코드베이스 깊숙이 자율 실행하는 구현 전문가.
          </p>
        </div>
      </div>

      {/* Core Commands */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">핵심 명령어</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <code className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded min-w-28">ultrawork</code>
            <span className="text-xs text-muted-foreground">전체 자동 실행 — Prometheus 플래닝 완료 후 전체 파이프라인 실행</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded min-w-28">ralph</code>
            <span className="text-xs text-muted-foreground">Prometheus 인터뷰 모드 진입 — 요구사항을 정제한 뒤 실행</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded min-w-28">/plan</code>
            <span className="text-xs text-muted-foreground">Prometheus 단독 플래닝 — 실행 없이 계획만 수립</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded min-w-28">/team</code>
            <span className="text-xs text-muted-foreground">팀 현황 확인 — 활성 에이전트 목록 및 상태 조회</span>
          </div>
        </div>
      </div>

      {/* First Session Flow */}
      <div className={cn("flex items-center gap-2", anim(index))} style={{ transitionDelay: "300ms" }}>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mr-1">첫 세션</p>
        {[
          "claude 실행",
          "Tab → Prometheus 기획",
          "ultrawork 입력",
          "완료 대기",
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs bg-muted/60 text-foreground px-3 py-1.5 rounded-lg whitespace-nowrap">{step}</span>
            {i < 3 && <span className="text-muted-foreground/50 text-xs">→</span>}
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));
SlideUltrawork.displayName = "SlideUltrawork";
export default SlideUltrawork;
