"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const plans = [
  { name: "Claude Code (Pro)", desc: "claude.ai Pro 구독 포함 · 사용량 제한 있음", price: "$20", unit: "/mo" },
  { name: "Claude Code (Max)", desc: "헤비 유저용 · 5× 높은 사용량 한도", price: "$100", unit: "/mo" },
  { name: "API 직접 사용", desc: "토큰당 과금 · 사용량 무제한", price: "종량제", unit: "" },
];

const tips = [
  {
    label: "비용 줄이는 법",
    icon: "💰",
    desc: "작업 시작 전 플래닝에 투자. 무한 수정 루프가 토큰 낭비의 주범. 큰 파일 통째로 붙이지 말고 필요한 부분만.",
  },
  {
    label: "Haiku vs Sonnet",
    icon: "📊",
    desc: "단순 반복 작업은 Haiku(저렴)로. 복잡한 추론·설계는 Sonnet·Opus로. 용도에 맞게 선택하면 비용 대폭 절감.",
  },
  {
    label: "캐싱 활용",
    icon: "⚡",
    desc: "같은 시스템 프롬프트·문서 반복 사용 시 Prompt Caching으로 Input 비용 90% 절감. CLAUDE.md 같은 고정 내용에 효과적.",
  },
];

const S15Cost = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
      비용 현실 — 얼마나 드는가
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "100ms" }}>
      Claude Code 요금 구조와 API 토큰 비용 (2026년 기준)
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      {/* Left: Plans */}
      <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
        <div className="bg-muted/30 border-b border-border/40 px-5 py-3">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Claude Code 요금제</p>
        </div>
        <div className="p-4 flex flex-col gap-3">
          {plans.map((plan) => (
            <div key={plan.name} className="flex items-center justify-between rounded-xl border border-border/30 bg-muted/20 px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{plan.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{plan.desc}</p>
              </div>
              <p className="font-mono text-sm font-semibold text-primary shrink-0 ml-3">
                {plan.price}<span className="text-xs font-normal text-muted-foreground">{plan.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Token cost */}
      <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
        <div className="bg-muted/30 border-b border-border/40 px-5 py-3">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">API 토큰 요금 (Sonnet 4.5 기준)</p>
        </div>
        <div className="p-4">
          <div className="rounded-xl bg-muted/40 px-4 py-4 font-mono text-sm mb-3">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Input</span>
              <span className="text-primary font-semibold">$3 / 1M 토큰</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Output</span>
              <span className="text-primary font-semibold">$15 / 1M 토큰</span>
            </div>
            <div className="border-t border-border/40 pt-2 flex justify-between">
              <span className="text-muted-foreground text-xs">1M 토큰 ≈</span>
              <span className="text-muted-foreground/60 text-xs">A4 약 2,500장</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/30 bg-muted/20 px-4 py-3 text-xs text-muted-foreground leading-relaxed">
            💡 <strong className="text-foreground">실제 체감:</strong> 일반적인 바이브 코딩 세션(하루 2~3시간)은 월 $20 Pro로 대부분 커버됨. API 직접 쓰면 하루 집중 작업 기준 $2~5 수준.
          </div>
        </div>
      </div>
    </div>

    {/* Tips */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "250ms" }}>
      {tips.map((tip) => (
        <div key={tip.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-semibold mb-2">{tip.icon} {tip.label}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S15Cost.displayName = "S15Cost";
export default S15Cost;
