"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const incidents = [
  { title: "의료 정보 환각률 15.6%", desc: "주요 AI 모델이 의료 정보 답변에서 지어낸 내용을 섞은 비율.", src: "NIA 보고서" },
  { title: "허위 진단 기록 생성", desc: "AI가 편도염 환자 기록에 허위 당뇨 진단·협심증 기록을 만들어냄.", src: "영국 NHS · 2025" },
  { title: "플랫폼 20개 전수 오류", desc: "조사 대상 AI 의료기록 플랫폼 20개 전부에서 오류 발견.", src: "캐나다 온타리오주 감사원" },
  { title: "의료 상담 절반이 부정확", desc: "AI 챗봇 의료 상담의 약 절반이 부정확하거나 부적절.", src: "2026 보도" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · AI 이해
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      이건 실험실 얘기가 아니다
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {incidents.map((it) => (
        <div key={it.title} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-lg font-semibold leading-snug mb-1">{it.title}</p>
          <p className="text-sm text-muted-foreground">{it.desc}</p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">출처 · {it.src}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">실제 의료 현장에서 이미 벌어진 일들</p>
      <p className="text-xl sm:text-2xl font-bold">
        건강정보에서 환각은 「틀린 답」이 아니라 <span className="text-primary">「사고」</span>다
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S06RealIncidents";
export default S;
