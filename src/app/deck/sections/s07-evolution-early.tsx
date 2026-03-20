"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const stages = [
  {
    num: "01",
    title: "단독 LLM 문답",
    tag: "브라우저만 있으면 됨",
    desc: "ChatGPT·Claude.ai·Gemini에 질문하고 복붙. 자동화 없음. → \"매번 반복하기 귀찮다\"",
    tools: ["ChatGPT", "Claude.ai", "Gemini"],
    arrow: "자동화 욕구",
  },
  {
    num: "02",
    title: "노코드 자동화 연결",
    tag: "코딩 없이 앱 연결",
    desc: "Gmail → AI 요약 → Slack 자동 전송 같은 플로우 구성. → \"정해진 흐름 말고 판단도 맡기고 싶다\"",
    tools: ["Zapier", "Make", "Notion AI"],
    arrow: "에이전트 접촉",
  },
  {
    num: "03",
    title: "Claude Code + 터미널 입문",
    tag: "AI가 직접 파일 건드림",
    desc: "말로 태스크 시키면 AI가 파일·폴더 직접 실행. 터미널이 낯설지만 결과가 나오니까 계속.",
    tools: ["Claude Code", "기본 Terminal", "Cursor / VS Code"],
    arrow: null,
  },
];

const S07EvolutionEarly = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      AI 툴 진화 경로
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "80ms" }}>
      대부분이 이 순서로 깊어진다
    </p>

    <div className={cn("flex flex-col gap-0", anim(index))} style={{ transitionDelay: "150ms" }}>
      {stages.map((s) => (
        <div key={s.num}>
          <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-3 border-b border-border/30 bg-muted/20">
              <span className="font-mono text-sm font-bold text-primary">STAGE {s.num}</span>
              <span className="text-sm font-semibold">{s.title}</span>
              <span className="ml-auto font-mono text-sm text-muted-foreground">{s.tag}</span>
            </div>
            <div className="flex flex-wrap items-start gap-4 px-5 py-4">
              <div className="flex gap-2 flex-wrap shrink-0">
                {s.tools.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border/40 bg-muted/30 text-muted-foreground">{t}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 min-w-[200px]">{s.desc}</p>
            </div>
          </div>
          {s.arrow && (
            <div className="flex items-center justify-center h-7 text-muted-foreground/40 text-xs gap-2 select-none">
              <span>↓</span>
              <span className="border border-border/30 rounded-full px-3 py-0.5 bg-card/40 text-xs">{s.arrow}</span>
              <span>↓</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionShell>
));
S07EvolutionEarly.displayName = "S07EvolutionEarly";
export default S07EvolutionEarly;
