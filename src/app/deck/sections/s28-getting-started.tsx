"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideGettingStarted = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        11 · 시작 가이드
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
        첫 시작 가이드
      </h2>

      {/* 경고 카드 */}
      <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-5 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        <p className="font-mono text-xs tracking-widest text-destructive uppercase mb-2">
          ⚠ 2026.02 업데이트
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="text-foreground font-semibold">OpenCode + Claude 조합 사용 불가.</span>{" "}
          Anthropic이 서드파티 도구의 Claude 구독 OAuth 토큰을 기술적으로 차단했습니다.
          OpenCode는 2026-02-19 Anthropic OAuth 코드를 전면 제거했습니다 (사유: <span className="text-destructive font-medium">anthropic legal requests</span>).
        </p>
      </div>

      {/* 추천 조합 하이라이트 */}
      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5 mb-5", anim(index))} style={{ transitionDelay: "180ms" }}>
        <p className="font-mono text-xs tracking-widest text-primary uppercase mb-2">
          추천 조합
        </p>
        <p className="text-sm font-semibold text-foreground mb-1">
          Claude Code + oh-my-claudecode
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Anthropic 공식 CLI 에이전트 + 멀티 에이전트 오케스트레이션 플러그인.
          32개 특화 에이전트·31개 스킬. oh-my-opencode의 Claude Code 버전.
        </p>
      </div>

      {/* 사전 요구사항 3개 */}
      <div className={cn("grid grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "260ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">필수 01</p>
          <p className="text-sm font-semibold mb-1">Anthropic 계정</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Claude Code Pro ($20) 또는 Max ($100) 구독. Opus 모델 사용 시 Max 권장.
          </p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">필수 02</p>
          <p className="text-sm font-semibold mb-1">Node.js / Bun</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            oh-my-claudecode 설치에 필요. Bun 권장 —{" "}
            <span className="font-mono text-xs text-primary">brew install bun</span>
          </p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">필수 03</p>
          <p className="text-sm font-semibold mb-1">Git</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            코드 버전 관리 필수. macOS는 기본 설치됨. 없으면{" "}
            <span className="font-mono text-xs text-primary">brew install git</span>
          </p>
        </div>
      </div>
    </div>
  </SectionShell>
));
SlideGettingStarted.displayName = "SlideGettingStarted";
export default SlideGettingStarted;
