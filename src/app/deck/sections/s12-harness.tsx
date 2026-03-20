"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const withoutItems = [
  "매번 \"우리 프로젝트는…\" 반복 설명",
  "코딩 스타일이 매번 달라짐",
  "금지 규칙을 모름 → 실수 반복",
  "외부 도구·DB에 접근 불가",
  "세션이 바뀌면 리셋 → 맥락 소멸",
];

const withItems = [
  { label: "CLAUDE.md", desc: "프로젝트 맥락 자동 전달" },
  { label: "스킬 파일", desc: "일관된 코딩 패턴 유지" },
  { label: "규칙", desc: "금지 사항·제약 조건 강제" },
  { label: "MCP", desc: "DB·API·외부 도구 직접 조작" },
  { label: "온톨로지", desc: "장기 기억 역할 → 맥락 유지" },
];

const S12Harness = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      하네스 — AI 에이전트를 길들이는 구조
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      에이전트는 강력하다. 하지만 방향 없이는 쓸모없다.
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-6", anim(index))} style={{ transitionDelay: "120ms" }}>
      <p className="text-sm text-muted-foreground leading-relaxed">
        하네스(Harness)는 원래 <span className="text-foreground font-medium">말에 채우는 고삐·마구</span>를 뜻한다. 말의 힘은 그대로 두면서 방향만 잡아주는 것. AI 에이전트도 마찬가지 — LLM의 범용 능력은 유지하면서{" "}
        <span className="text-primary font-medium">내 프로젝트·도메인·규칙에 맞게 제어</span>하는 장치가 하네스다.
      </p>
    </div>

    <div className={cn("grid grid-cols-2 gap-4", anim(index))} style={{ transitionDelay: "180ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border/30 bg-muted/20">
          <p className="text-sm font-semibold">하네스 없는 에이전트</p>
          <p className="font-mono text-sm text-muted-foreground mt-0.5">= 고삐 없는 말</p>
        </div>
        <ul className="px-4 py-3 space-y-1.5">
          {withoutItems.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <span className="shrink-0 text-destructive/70">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border/30 bg-muted/20">
          <p className="text-sm font-semibold">하네스 있는 에이전트</p>
          <p className="font-mono text-sm text-muted-foreground mt-0.5">= 조련된 경주마</p>
        </div>
        <ul className="px-4 py-3 space-y-1.5">
          {withItems.map((item) => (
            <li key={item.label} className="flex gap-2 text-sm text-muted-foreground">
              <span className="shrink-0 text-primary">✓</span>
              <span>
                <span className="text-foreground font-medium">{item.label}</span>
                {" — "}{item.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionShell>
));
S12Harness.displayName = "S12Harness";
export default S12Harness;
