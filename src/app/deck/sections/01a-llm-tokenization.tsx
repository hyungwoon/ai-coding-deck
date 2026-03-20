"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const LlmTokenization = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        01 · LLM이란 무엇인가
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-8", anim(index))}>
        LLM이란 무엇인가
      </h2>

      {/* 핵심 정의 카드 */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
        <p className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          Large Language Model — 대규모 언어 모델
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          인터넷의 방대한 텍스트를 학습해서{" "}
          <span className="text-foreground font-medium">"다음에 올 가장 자연스러운 단어"를 확률적으로 예측</span>
          하는 모델. 번역·요약·코드 작성·추론이 모두 이 하나의 원리에서 나온다.
          지식을 저장한 게 아니라, 패턴을 학습한 것.
        </p>
      </div>

      {/* 토큰화 예시 */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-5">
          STEP 1 · 토큰화 — 텍스트를 숫자로
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              AI는 텍스트를 그대로 읽지 않는다. 먼저{" "}
              <span className="text-foreground font-medium">토큰</span>이라는 단위로 쪼개고,
              각 토큰을{" "}
              <span className="text-foreground font-medium">고유한 숫자 ID</span>로 변환한다.
            </p>
            <p>
              토큰은 단어 전체가 아닌{" "}
              <span className="text-foreground font-medium">의미 단위 조각</span>. 한국어는
              음절 단위로 더 잘게 쪼개져 같은 내용이어도 토큰 수가 더 많이 소모된다.
            </p>
          </div>
          <div className="font-mono text-sm bg-muted/30 rounded-xl p-4 space-y-3">
            <p className="text-muted-foreground text-xs uppercase tracking-widest">INPUT TEXT</p>
            <p className="text-foreground">&quot;Claude is powerful&quot;</p>
            <p className="text-muted-foreground">↓ 토큰 분해</p>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">Cl</span>
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">aude</span>
              <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded">is</span>
              <span className="bg-border/60 text-foreground px-2 py-0.5 rounded">power</span>
              <span className="bg-border/60 text-foreground px-2 py-0.5 rounded">ful</span>
            </div>
            <p className="text-muted-foreground">↓ 숫자 ID 변환</p>
            <p className="text-muted-foreground">
              <span className="text-primary">3_274</span> · <span className="text-primary">8_102</span> · 318 · 6_244 · 913
            </p>
            <p className="text-muted-foreground">↓ 벡터 임베딩</p>
            <p className="text-muted-foreground">[0.82, -0.31, 0.57 ... <span className="text-primary">×768차원</span>]</p>
          </div>
        </div>
      </div>

      {/* 3개 요약 카드 */}
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "200ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-2">학습</p>
          <p className="text-sm font-semibold mb-1.5">패턴 학습</p>
          <p className="text-sm text-muted-foreground leading-relaxed">수천억 개 텍스트에서 언어 패턴을 학습. 사실 저장이 아닌 확률 분포를 학습한다.</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-2">추론</p>
          <p className="text-sm font-semibold mb-1.5">토큰 예측</p>
          <p className="text-sm text-muted-foreground leading-relaxed">다음 토큰의 확률 분포를 계산하고 가장 자연스러운 답을 한 글자씩 생성한다.</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-2">제약</p>
          <p className="text-sm font-semibold mb-1.5">할루시네이션</p>
          <p className="text-sm text-muted-foreground leading-relaxed">모르는 것도 그럴듯하게 지어낼 수 있다. 중요한 정보는 반드시 검증이 필요하다.</p>
        </div>
      </div>
    </div>
  </SectionShell>
));
LlmTokenization.displayName = "LlmTokenization";
export default LlmTokenization;
