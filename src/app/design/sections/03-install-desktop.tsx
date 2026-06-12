"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const STEPS = [
  { n: "1", t: "다운로드", d: "claude.ai/download 에서 Claude Desktop 받기 (macOS · Windows, Linux 미지원)" },
  { n: "2", t: "설치 & 로그인", d: "PKG/설치 실행 → Anthropic 계정으로 로그인" },
  { n: "3", t: "Code 탭 진입", d: "앱 상단 'Code' 탭 클릭 → 작업 폴더 열기" },
  { n: "4", t: "구독 확인", d: "유료 Claude 구독 필요 (무료 플랜은 Code 미지원)" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="mb-3 flex items-center gap-3">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase", anim(index))}>
        설치 ① · 사전과제
      </p>
      <span className={cn("rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] text-primary", anim(index))}>
        강의 전에 미리
      </span>
    </div>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Claude Desktop 설치
    </h2>

    <div className="space-y-3">
      {STEPS.map((s, i) => (
        <div
          key={s.n}
          className={cn("flex gap-4 rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 80}ms` }}
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-sm text-primary">
            {s.n}
          </span>
          <div>
            <p className="font-semibold">{s.t}</p>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        </div>
      ))}
    </div>

    <p className={cn("mt-6 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "500ms" }}>
      설치가 막히면 현장 폴백 — 옆 사람과 페어로 진행합니다.
    </p>
  </SectionShell>
));
S.displayName = "S03InstallDesktop";
export default S;
