"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const infra = ["MCP (tools)", "E2B / Browserbase (sandbox)", "Postgres / 기존 데이터 스토어", "기존 auth · observability"];

const econ = [
  "Per-action 비용",
  "Cache hit rate",
  "Retry-loop 비용",
  "모델 콜 분포",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · How to Move ⑥⑦⑧ · Infra · Econ · Models
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      지루한 인프라 · 비용 인식 · 분기 재평가
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">⑥ 지루한 인프라</p>
        <ul className="text-sm space-y-1 text-muted-foreground">
          {infra.map((i) => <li key={i}>• {i}</li>)}
        </ul>
        <p className="mt-3 text-xs text-muted-foreground italic">
          이국적 인프라가 win인 경우 드물다.
        </p>
      </div>

      <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-5", anim(index))} style={{ transitionDelay: "230ms" }}>
        <p className="font-mono text-xs text-destructive uppercase tracking-widest mb-3">⑦ Day 1 Unit Economics</p>
        <ul className="text-sm space-y-1 text-muted-foreground mb-3">
          {econ.map((e) => <li key={e}>• {e}</li>)}
        </ul>
        <p className="text-xs">
          $0.50/run PoC → <span className="font-bold text-destructive">월 $50K</span> @ 적당한 볼륨
        </p>
      </div>

      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "310ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">⑧ 모델 분기 재평가</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          한 분기 lock → 분기 끝에 eval suite 돌려서 데이터가 말하면 스위치.
        </p>
        <p className="mt-3 text-xs">
          모델 개선 <span className="text-primary font-semibold">upside</span>는 얻고, 매주 추격하는 카오스는 피함.
        </p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S22MoveInfraEcon";
export default S;
