"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const levels = [
  {
    lv: "LV.0",
    title: "무장비",
    tag: "하네스 없음",
    desc: "ChatGPT에 질문만\n매번 처음부터 설명",
    active: false,
  },
  {
    lv: "LV.1",
    title: "기본 제어",
    tag: "맥락 하네스",
    desc: "CLAUDE.md 작성\n프로젝트 맥락 전달",
    active: true,
  },
  {
    lv: "LV.2",
    title: "도구 연결",
    tag: "행동 하네스",
    desc: "MCP로 외부 연동\n스킬 파일·규칙 추가",
    active: true,
  },
  {
    lv: "LV.3",
    title: "자율 순환",
    tag: "풀 하네스",
    desc: "온톨로지 + RAG\n피드백 루프 운영",
    active: true,
  },
];

const S13HarnessMaturity = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      하네스 성숙도
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "80ms" }}>
      어디까지 왔는가 — 4단계로 보는 에이전트 제어 수준
    </p>

    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-border/40 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {levels.map((lv, i) => (
        <div
          key={lv.lv}
          className={cn(
            "p-5 flex flex-col gap-1",
            i < levels.length - 1 && "border-r border-border/30",
            lv.active ? "bg-card/80" : "bg-muted/10",
          )}
        >
          <span className={cn("font-mono text-sm font-semibold", lv.active ? "text-primary" : "text-muted-foreground/40")}>
            {lv.lv}
          </span>
          <span className={cn("text-sm font-semibold", !lv.active && "text-muted-foreground/50")}>{lv.title}</span>
          <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line mt-1">{lv.desc}</p>
          <span className={cn("text-xs font-mono mt-2", lv.active ? "text-primary/70" : "text-muted-foreground/30")}>
            {lv.tag}
          </span>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "220ms" }}>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="text-foreground font-semibold">하네스 = 에이전트의 진짜 차별화 포인트.</span>{" "}
        모델은 공유된다 — 누구나 같은 Claude, 같은 GPT를 쓴다. 하지만{" "}
        <span className="text-primary font-medium">어떤 하네스를 씌웠느냐</span>에 따라 결과는 완전히 다르다.
        잘 만든 하네스는 곧{" "}
        <span className="text-foreground font-medium">복제 불가능한 경쟁 우위</span>다.
      </p>
    </div>
  </SectionShell>
));
S13HarnessMaturity.displayName = "S13HarnessMaturity";
export default S13HarnessMaturity;
