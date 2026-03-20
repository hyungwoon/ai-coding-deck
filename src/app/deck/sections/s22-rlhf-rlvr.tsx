"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideRlhfRlvr = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        08 · RLHF → RLVR
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
        RLHF → RLVR
      </h2>
      <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
        쓸수록 똑똑해지는 AI의 시대
      </p>

      {/* 핵심 주장 */}
      <div className={cn("rounded-2xl border border-primary/20 bg-primary/5 p-5 mb-5", anim(index))} style={{ transitionDelay: "120ms" }}>
        <p className="text-sm font-bold leading-relaxed mb-1">
          "AI를 얼마나 잘 쓰느냐"가 아니라
        </p>
        <p className="text-sm font-bold leading-relaxed text-primary">
          "AI가 얼마나 나를 잘 아느냐"가 격차를 만든다
        </p>
      </div>

      {/* RLHF vs RLVR */}
      <div className={cn("grid gap-4 mb-0", anim(index))} style={{ gridTemplateColumns: "1fr auto 1fr", transitionDelay: "200ms" }}>
        {/* RLHF */}
        <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-border/40 bg-card/60">
            <p className="font-mono text-sm text-muted-foreground mb-1">RLHF</p>
            <p className="text-sm font-bold leading-snug">인간 피드백 강화학습</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              사람이 A/B를 비교해 선호를 학습. ChatGPT·Claude 초기 방식의 핵심.
              <span className="text-foreground font-medium"> 느리고 비쌈. 사람의 주관에 의존.</span>
            </p>
            <div className="font-mono text-sm bg-black/30 rounded-lg px-3 py-2 text-muted-foreground leading-relaxed">
              AI 출력 → 사람이 A/B 비교<br />
              → 선호 학습 → <span className="text-muted-foreground/40">반복 (느림)</span>
            </div>
          </div>
        </div>

        {/* 화살표 */}
        <div className="flex flex-col items-center justify-center gap-1 px-1">
          <span className="text-xl text-primary">→</span>
          <span className="font-mono text-sm text-muted-foreground">진화</span>
        </div>

        {/* RLVR */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-primary/15 bg-primary/8">
            <p className="font-mono text-sm text-primary mb-1">RLVR</p>
            <p className="text-sm font-bold leading-snug">검증 가능한 결과 강화학습</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              코드 실행, 수학 정답, 테스트 통과 — 객관적 기준으로 자동 평가.
              <span className="text-foreground font-medium"> 사람 없이도 초고속 자기개선 가능.</span>
            </p>
            <div className="font-mono text-sm bg-black/30 rounded-lg px-3 py-2 text-muted-foreground leading-relaxed">
              AI 출력 → 자동 검증<br />
              → 자율 학습 → <span className="text-primary">초고속 반복</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
));
SlideRlhfRlvr.displayName = "SlideRlhfRlvr";
export default SlideRlhfRlvr;
