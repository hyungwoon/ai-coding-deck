"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S12bHarnessReal = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      실전 하네스 사례
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      같은 Claude Code 위에 어떤 하네스를 씌웠느냐에 따라 완전히 다른 AI가 된다
    </p>

    {/* 사례 1: 코딩 하네스 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-sm font-mono text-muted-foreground/50">CASE 1</span>
        <h3 className="text-sm font-bold">코딩 하네스 — oh-my-claudecode + oh-my-hwclaude</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-3">
        두 플러그인이 서로 다른 레이어를 담당한다. OMC는 실행 전략(무엇을, 어떤 순서로), hwclaude는 실행 품질(얼마나 정확하게).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-border/30 bg-background/50 p-3">
          <p className="text-sm font-semibold mb-1">oh-my-claudecode (OMC)</p>
          <p className="text-sm text-muted-foreground/60 mb-2">멀티 에이전트 오케스트레이션</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>· 32개 특화 에이전트 자동 위임</li>
            <li>· autopilot / ralph / ultrawork 실행 모드</li>
            <li>· 스마트 모델 라우팅 (Haiku→Opus)</li>
            <li>· verify/fix 루프로 완료까지 반복</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border/30 bg-background/50 p-3">
          <p className="text-sm font-semibold mb-1">oh-my-hwclaude</p>
          <p className="text-sm text-muted-foreground/60 mb-2">정밀 편집 + 자동 복구</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>· hashline 편집: 성공률 6.7% → 68.3%</li>
            <li>· 실패 시 자동 복구 가이드 주입</li>
            <li>· 들여쓰기 손실, diff 오염 자동 보정</li>
            <li>· 품질 게이트 (lint, 타입체크 자동)</li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        <span className="font-semibold text-foreground">결과:</span> OMC가 "무엇을 할지" 결정하고, hwclaude가 "정확하게 실행"한다
      </p>
    </div>

    {/* 사례 2: 비즈니스 하네스 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-sm font-mono text-muted-foreground/50">CASE 2</span>
        <h3 className="text-sm font-bold">비즈니스 하네스 — business-ai-team</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-3">
        코딩이 아닌 비즈니스 도메인에 하네스를 적용한 사례. 마케팅, 영업, 법무, 재무 등 16개 전문가 에이전트가 자동으로 라우팅된다.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        <div className="rounded-xl border border-border/30 bg-background/50 p-3 text-center">
          <p className="text-lg font-bold">16</p>
          <p className="text-sm text-muted-foreground">전문가 에이전트</p>
          <p className="text-sm text-muted-foreground/50">마케팅·영업·법무·재무·HR...</p>
        </div>
        <div className="rounded-xl border border-border/30 bg-background/50 p-3 text-center">
          <p className="text-lg font-bold">110</p>
          <p className="text-sm text-muted-foreground">도메인 스킬</p>
          <p className="text-sm text-muted-foreground/50">17개 플러그인에 분산</p>
        </div>
        <div className="rounded-xl border border-border/30 bg-background/50 p-3 text-center">
          <p className="text-lg font-bold">RLVR</p>
          <p className="text-sm text-muted-foreground">자동 학습</p>
          <p className="text-sm text-muted-foreground/50">피드백 → knowledge/ 저장</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">흐름:</span> 요청 수신 → 도메인 분류 → 에이전트 로드 → 스킬 적용 → 온톨로지(Obsidian) 참조 → 학습 보정 → 전문가 응답
      </p>
    </div>
  </SectionShell>
));

S12bHarnessReal.displayName = "S12bHarnessReal";
export default S12bHarnessReal;
