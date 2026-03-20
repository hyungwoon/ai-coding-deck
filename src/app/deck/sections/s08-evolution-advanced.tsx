"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const stages = [
  {
    num: "04",
    title: "AI-native 터미널 환경 구축",
    tag: "입문 완성 단계",
    desc: "여러 Claude Code 세션을 탭·패널로 동시에 운용. 세션마다 별도 컨텍스트 유지. Warp로 iTerm2+Tmux 없이도 멀티세션 구현.",
    tools: ["Warp", "Claude Code", "에디터 (확인용)"],
    arrow: "단일 에이전트의 한계",
  },
  {
    num: "05",
    title: "멀티 에이전트 + 하네스",
    tag: "에이전트를 조율하는 에이전트",
    desc: "여러 에이전트를 목적별로 조합. 하네스(harness)로 어떤 태스크를 어떤 에이전트에게 넘길지 흐름을 설계. → \"외부 앱이랑도 연결하고 싶다\"",
    tools: ["Claude Code", "oh-my-claudecode", "Aider"],
    arrow: "외부 연결 확장",
  },
  {
    num: "06",
    title: "MCP — 외부 앱과 에이전트 연결",
    tag: "에이전트 생태계 완성",
    desc: "Claude Code가 Notion·Slack·Gmail 등 외부 앱을 직접 읽고 씀. Zapier 없이 AI 에이전트가 앱 간 판단·실행까지 처리.",
    tools: ["MCP 서버", "Notion", "Slack", "GitHub", "Figma"],
    arrow: null,
  },
];

const S08EvolutionAdvanced = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      AI 툴 진화 경로 (심화)
    </h2>
    <p className={cn("text-base text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "80ms" }}>
      터미널 환경을 갖춘 뒤, 멀티 에이전트·MCP로 확장된다
    </p>

    <div className={cn("flex flex-col gap-0", anim(index))} style={{ transitionDelay: "150ms" }}>
      {stages.map((s) => (
        <div key={s.num}>
          <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-3 border-b border-border/30 bg-muted/20">
              <span className="font-mono text-xs font-bold text-primary">STAGE {s.num}</span>
              <span className="text-sm font-semibold">{s.title}</span>
              <span className="ml-auto font-mono text-xs text-muted-foreground">{s.tag}</span>
            </div>
            <div className="flex flex-wrap items-start gap-4 px-5 py-4">
              <div className="flex gap-2 flex-wrap shrink-0">
                {s.tools.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border/40 bg-muted/30 text-muted-foreground">{t}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 min-w-[200px]">{s.desc}</p>
            </div>
          </div>
          {s.arrow && (
            <div className="flex items-center justify-center h-7 text-muted-foreground/40 text-xs gap-2 select-none">
              <span>↓</span>
              <span className="border border-border/30 rounded-full px-3 py-0.5 bg-card/40 text-[10px]">{s.arrow}</span>
              <span>↓</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionShell>
));
S08EvolutionAdvanced.displayName = "S08EvolutionAdvanced";
export default S08EvolutionAdvanced;
