"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rows = [
  {
    label: "에디터",
    sub: "VS Code, Zed",
    unit: "줄 / 함수",
    human: "매 스텝",
    terminal: "없음",
    control: "사람",
  },
  {
    label: "에디터 내 에이전트",
    sub: "Cursor Agent",
    unit: "피처 / 태스크",
    human: "승인만",
    terminal: "제한적",
    control: "사람 → AI",
  },
  {
    label: "순수 에이전트",
    sub: "Claude Code",
    unit: "태스크 / 레포",
    human: "시작·끝만",
    terminal: "풀 권한",
    control: "AI",
  },
];

const S14EditorVsAgent = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
      에디터 vs 에이전트 핵심 차이
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "100ms" }}>
      작업 단위와 주도권이 AI로 이동하는 스펙트럼
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      {/* Header */}
      <div className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr] bg-muted/30 border-b border-border/40 px-5 py-3">
        <span className="text-xs font-medium text-muted-foreground">구분</span>
        <span className="text-xs font-medium text-muted-foreground">작업 단위</span>
        <span className="text-xs font-medium text-muted-foreground">사람 개입</span>
        <span className="text-xs font-medium text-muted-foreground">터미널 실행</span>
        <span className="text-xs font-medium text-muted-foreground">주도권</span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={cn(
            "grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr] px-5 py-4 items-center",
            i < rows.length - 1 && "border-b border-border/30"
          )}
        >
          <div>
            <p className="text-sm font-semibold">{row.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{row.sub}</p>
          </div>
          <span className="text-sm text-muted-foreground">{row.unit}</span>
          <span className="rounded-full px-2.5 py-1 text-xs font-medium bg-muted/60 w-fit">{row.human}</span>
          <span className="rounded-full px-2.5 py-1 text-xs font-medium bg-muted/60 w-fit">{row.terminal}</span>
          <span className={cn("text-sm font-medium", i === 2 && "text-primary")}>{row.control}</span>
        </div>
      ))}
    </div>

    <div className={cn("mt-6 grid grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "250ms" }}>
      {[
        { label: "자동화 수준", value: "에디터 < 에이전트", desc: "AI가 점점 더 많은 결정을 스스로 내린다" },
        { label: "터미널 권한", value: "없음 → 풀 권한", desc: "에이전트는 명령어 실행까지 직접 처리" },
        { label: "사람의 역할", value: "조작 → 감독", desc: "코드 작성 대신 목표와 방향을 지시" },
      ].map((item) => (
        <div key={item.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-xs font-mono text-muted-foreground mb-1">{item.label}</p>
          <p className="text-sm font-semibold text-primary mb-1">{item.value}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S14EditorVsAgent.displayName = "S14EditorVsAgent";
export default S14EditorVsAgent;
