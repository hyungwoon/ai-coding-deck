"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideGettingStarted = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        11 · 시작 가이드
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-6", anim(index))}>
        첫 시작 가이드
      </h2>

      {/* 추천 조합 하이라이트 */}
      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        <p className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          추천 조합
        </p>
        <p className="text-sm font-semibold text-foreground mb-1">
          Claude Code + oh-my-claudecode
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Anthropic 공식 CLI 에이전트 + 멀티 에이전트 오케스트레이션 레이어.
          32개 특화 에이전트 · 스마트 모델 라우팅 (Haiku / Sonnet / Opus). 10.6k GitHub Stars.
        </p>
      </div>

      {/* 5가지 실행 모드 */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-5", anim(index))} style={{ transitionDelay: "180ms" }}>
        <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-3">5가지 실행 모드</p>
        <div className="flex flex-wrap gap-2">
          {["autopilot", "ralph", "ultrawork (ulw)", "/team N:executor", "ccg"].map((mode) => (
            <span key={mode} className="font-mono text-sm text-primary bg-primary/10 px-3 py-1.5 rounded-lg">{mode}</span>
          ))}
        </div>
      </div>

      {/* 사전 요구사항 3개 */}
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "260ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-3">필수 01</p>
          <p className="text-sm font-semibold mb-1">Anthropic 구독</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Claude Code Pro ($20) 또는 Max ($100). Opus 사용 시 Max 권장.
          </p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-3">필수 02</p>
          <p className="text-sm font-semibold mb-1">Node.js</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Claude Code CLI 설치에 필요.{" "}
            <span className="font-mono text-sm text-primary">node -v</span>로 확인.
          </p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-3">필수 03</p>
          <p className="text-sm font-semibold mb-1">Git</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            코드 버전 관리 필수. macOS는 기본 설치됨. 없으면{" "}
            <span className="font-mono text-sm text-primary">brew install git</span>
          </p>
        </div>
      </div>
    </div>
  </SectionShell>
));
SlideGettingStarted.displayName = "SlideGettingStarted";
export default SlideGettingStarted;
