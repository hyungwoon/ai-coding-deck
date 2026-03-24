"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const pipeline = [
  { label: "골든 데이터셋", sub: "기대 입출력 쌍", color: "border-border/40 bg-card/80" },
  { label: "에이전트 실행", sub: "프롬프트 -> 결과", color: "border-primary/30 bg-primary/5" },
  { label: "자동 채점", sub: "LLM-as-Judge", color: "border-border/40 bg-card/80" },
  { label: "점수 비교", sub: "변경 전후 Diff", color: "border-primary/30 bg-primary/5" },
  { label: "개선 반복", sub: "프롬프트 최적화", color: "border-border/40 bg-card/80" },
];

const benefits = [
  {
    title: "재현 가능한 품질",
    desc: "\"느낌\"이 아닌 숫자로 품질 관리. \"지난주보다 정확도 12% 향상\" — 이런 대화가 가능해진다.",
  },
  {
    title: "회귀 방지",
    desc: "프롬프트 수정이 기존 케이스를 깨뜨리지 않는지 자동 확인. CI/CD처럼 매 변경마다 Eval을 돌린다.",
  },
  {
    title: "팀 스케일링",
    desc: "개인의 감에 의존하지 않고 Eval 기준을 팀이 공유. 누가 작업해도 일관된 품질을 유지할 수 있다.",
  },
];

const SlideEvalDriven = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        08 · Eval-Driven Development
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
        Eval-Driven Development
      </h2>
      <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
        테스트가 소프트웨어를 만들듯, Eval이 AI를 만든다
      </p>

      {/* TDD vs EDD comparison */}
      <div className={cn("grid gap-4 mb-5", anim(index))} style={{ gridTemplateColumns: "1fr auto 1fr", transitionDelay: "150ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border/40 bg-card/60">
            <p className="font-mono text-sm text-muted-foreground mb-1">TDD</p>
            <p className="text-sm font-bold leading-snug">Test-Driven Development</p>
          </div>
          <div className="px-5 py-4 space-y-2">
            {["테스트 케이스 작성", "코드 구현", "테스트 통과 확인", "리팩토링"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground/50 w-4">{i + 1}.</span>
                <span className="text-sm text-muted-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 px-1">
          <span className="text-xl text-primary">&rarr;</span>
          <span className="font-mono text-xs text-muted-foreground">AI 시대</span>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-primary/15 bg-primary/8">
            <p className="font-mono text-sm text-primary mb-1">EDD</p>
            <p className="text-sm font-bold leading-snug">Eval-Driven Development</p>
          </div>
          <div className="px-5 py-4 space-y-2">
            {["Eval 데이터셋 정의", "프롬프트 + 에이전트 구현", "Eval 점수 확인", "프롬프트 최적화"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary/50 w-4">{i + 1}.</span>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDD Pipeline flow strip */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden mb-5", anim(index))} style={{ transitionDelay: "220ms" }}>
        <div className="bg-muted/30 border-b border-border/40 px-5 py-3">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">EDD 파이프라인</p>
        </div>
        <div className="px-5 py-4 flex items-center gap-2 overflow-x-auto">
          {pipeline.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 shrink-0">
              <div className={cn("rounded-xl border px-4 py-3 text-center min-w-[110px]", step.color)}>
                <p className="text-sm font-semibold">{step.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{step.sub}</p>
              </div>
              {i < pipeline.length - 1 && (
                <span className="text-muted-foreground/40 text-sm">&rarr;</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "280ms" }}>
        {benefits.map((b) => (
          <div key={b.title} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="text-sm font-semibold text-primary mb-1">{b.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));
SlideEvalDriven.displayName = "SlideEvalDriven";
export default SlideEvalDriven;
