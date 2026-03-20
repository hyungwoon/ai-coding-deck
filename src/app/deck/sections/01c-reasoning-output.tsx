"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const ReasoningOutput = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        STEP 3 · 4 · 추론과 출력
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-8", anim(index))}>
        어텐션 추론과{" "}
        <span className="text-muted-foreground">스트리밍 출력</span>
      </h2>

      <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        {/* 추론 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-3">
            STEP 3 · 어텐션 그래프로 의미 연결
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            각 토큰은 다른 모든 토큰과{" "}
            <span className="text-foreground font-medium">"얼마나 관련 있는가"</span>를 계산한다.
            이 관계망을 수백 개 레이어에서 반복 계산해{" "}
            <span className="text-foreground font-medium">문맥 속 의미</span>를 추론한다.
          </p>
          <div className="font-mono text-sm bg-muted/30 rounded-xl p-4 space-y-2">
            <p className="text-muted-foreground/60 text-xs mb-3">예: "그가 공을 찼다"</p>
            <div className="flex items-center gap-2">
              <span className="text-foreground font-bold w-8">그</span>
              <div className="h-0.5 flex-1 bg-primary/70 rounded" />
              <span className="text-foreground font-bold w-10">찼다</span>
              <span className="text-primary text-xs">강</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground w-8">공을</span>
              <div className="h-px flex-1 bg-primary/30 rounded" />
              <span className="text-foreground font-bold w-10">찼다</span>
              <span className="text-muted-foreground text-xs">중</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground font-bold w-8">그</span>
              <div className="h-px flex-1 bg-border/40 rounded border-dashed" />
              <span className="text-muted-foreground w-10">공을</span>
              <span className="text-muted-foreground/40 text-xs">약</span>
            </div>
            <p className="text-muted-foreground/40 text-center text-xs pt-1">선이 굵을수록 강한 연관 (attention weight)</p>
          </div>
        </div>

        {/* 출력 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-3">
            STEP 4 · 토큰 하나씩 생성 → 스트리밍
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            추론 결과로{" "}
            <span className="text-foreground font-medium">다음에 올 토큰의 확률 분포</span>가 나온다.
            가장 높은 확률의 토큰을 선택 → 컨텍스트에 추가 → 다시 추론. 이 과정을 반복하며 한 글자씩 생성.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            ChatGPT·Claude에서 답변이 흘러나오듯 표시되는 이유가 이 구조 때문이다.
          </p>
          <div className="font-mono text-sm bg-muted/30 rounded-xl p-4">
            <p className="text-muted-foreground/60 text-xs mb-3">토큰 생성 루프</p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-primary font-mono">1.</span>
                <span className="text-muted-foreground">확률 분포 계산</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-mono">2.</span>
                <span className="text-muted-foreground">최고 확률 토큰 선택</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-mono">3.</span>
                <span className="text-muted-foreground">컨텍스트에 추가</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-mono">4.</span>
                <span className="text-foreground font-medium">반복 → 스트리밍 출력</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 개념 3개 */}
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "200ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-2">CONCEPT</p>
          <p className="text-sm font-semibold mb-1.5">컨텍스트 윈도우</p>
          <p className="text-sm text-muted-foreground leading-relaxed">한 번에 처리할 수 있는 텍스트 한도. Claude 최대 200K 토큰 — A4 약 500장.</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-2">CONCEPT</p>
          <p className="text-sm font-semibold mb-1.5">할루시네이션</p>
          <p className="text-sm text-muted-foreground leading-relaxed">모르는 것도 그럴듯하게 지어냄. "패턴 예측" 구조이기 때문. 중요 정보는 검증 필수.</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest mb-2">CONCEPT</p>
          <p className="text-sm font-semibold mb-1.5">프롬프트 엔지니어링</p>
          <p className="text-sm text-muted-foreground leading-relaxed">어떻게 질문하느냐가 출력 품질을 결정. 역할 부여, 예시, 단계 분해로 결과가 달라진다.</p>
        </div>
      </div>
    </div>
  </SectionShell>
));
ReasoningOutput.displayName = "ReasoningOutput";
export default ReasoningOutput;
