"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideInstall = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        11 · 설치
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-8", anim(index))}>
        설치 순서
      </h2>

      <div className={cn("flex flex-col gap-4", anim(index))} style={{ transitionDelay: "100ms" }}>

        {/* Step 1 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-primary">01</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold mb-2">Claude Code 설치</p>
            <code className="font-mono text-sm bg-muted/60 text-primary px-3 py-1.5 rounded-lg block">
              npm install -g @anthropic-ai/claude-code
            </code>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-primary">02</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold mb-2">oh-my-claudecode 설치</p>
            <code className="font-mono text-sm bg-muted/60 text-primary px-3 py-1.5 rounded-lg block">
              /plugin marketplace add oh-my-claudecode
            </code>
            <p className="text-sm text-muted-foreground mt-1">또는 Claude Code 내에서 <span className="font-mono text-primary">/setup</span> 실행</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-primary">03</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold mb-2">Anthropic 인증</p>
            <code className="font-mono text-sm bg-muted/60 text-primary px-3 py-1.5 rounded-lg block">
              claude auth login
            </code>
            <p className="text-sm text-muted-foreground mt-1">Pro / Max 구독 계정으로 OAuth 로그인</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-primary">04</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold mb-2">CLAUDE.md 초기화</p>
            <code className="font-mono text-sm bg-muted/60 text-primary px-3 py-1.5 rounded-lg block">
              프로젝트 폴더에서 claude 실행 → CLAUDE.md 작성
            </code>
            <p className="text-sm text-muted-foreground mt-1">프로젝트 맥락·규칙·금지사항을 AI에게 선언하는 파일</p>
          </div>
        </div>

      </div>
    </div>
  </SectionShell>
));
SlideInstall.displayName = "SlideInstall";
export default SlideInstall;
