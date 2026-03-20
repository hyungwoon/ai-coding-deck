"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const layers = [
  {
    badge: "AI 모델",
    desc: "foundation — 모든 도구가 호출하는 기반",
    tools: ["Claude (Sonnet/Opus)", "GPT-4o", "Gemini 2.5", "오픈소스 (Llama/Qwen)"],
  },
  {
    badge: "코딩 에이전트",
    desc: "autonomous — AI 주도, 태스크 자율 실행",
    tools: ["Claude Code (CLI)", "Devin (클라우드)", "Aider (오픈소스)"],
  },
  {
    badge: "에디터 내 에이전트",
    desc: "hybrid — 에디터 안에 에이전트 기능 탑재",
    tools: ["Cursor Agent Mode", "Windsurf Cascade", "Cline", "GitHub Copilot"],
  },
  {
    badge: "에디터 / IDE",
    desc: "human-driven — 사람 주도, AI가 보조",
    tools: ["Cursor", "Windsurf", "VS Code", "Zed", "JetBrains"],
  },
  {
    badge: "터미널 환경",
    desc: "infrastructure — 에이전트 실행 기반",
    tools: ["Tmux", "iTerm2", "Warp (AI 내장)", "zsh"],
  },
];

const S06Ecosystem = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      AI 코딩 생태계 전체 관계도
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      위에서 아래로 — 모델이 에이전트를 구동하고, 에이전트가 에디터·터미널 위에서 실행된다
    </p>

    <div className={cn("flex flex-col gap-0", anim(index))} style={{ transitionDelay: "150ms" }}>
      {layers.map((layer, i) => (
        <div key={layer.badge}>
          <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm flex items-center gap-4">
            <span className="text-xs font-mono font-semibold text-primary w-36 shrink-0">{layer.badge}</span>
            <span className="text-sm text-muted-foreground w-52 shrink-0 hidden sm:block">{layer.desc}</span>
            <div className="flex flex-wrap gap-2">
              {layer.tools.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border/40 bg-muted/30 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex items-center justify-center h-6 text-muted-foreground/40 text-xs select-none">↓</div>
          )}
        </div>
      ))}
    </div>
  </SectionShell>
));
S06Ecosystem.displayName = "S06Ecosystem";
export default S06Ecosystem;
