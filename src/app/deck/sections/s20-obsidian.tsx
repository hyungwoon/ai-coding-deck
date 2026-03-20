"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const reasons = [
  {
    num: "#1",
    title: "순수 마크다운",
    desc: "모든 노트가 .md 파일. 특정 앱에 종속되지 않고, AI가 가공 없이 바로 읽을 수 있다. LLM이 가장 잘 이해하는 포맷이 마크다운. Notion은 API로 변환해야 하지만 Obsidian은 파일 시스템에서 직접 접근 가능.",
  },
  {
    num: "#2",
    title: "양방향 링크 = 관계 정의",
    desc: "[[고객사A]]에서 [[프로젝트X]]로 링크 → AI가 \"고객사A는 프로젝트X와 연결됨\"을 자동으로 파악. 온톨로지의 관계(Relation)가 링크 하나로 정의됨. 별도 스키마 설계 없이 쌓이는 구조.",
  },
  {
    num: "#3",
    title: "그래프 뷰 = 온톨로지 시각화",
    desc: "노트 간 연결을 그래프로 시각화하면, 온톨로지 지식 그래프가 눈앞에 펼쳐진다. 어떤 지식이 고립됐는지, 어디가 허브인지 한눈에 파악 → 지식의 빈 곳을 발견할 수 있다.",
  },
];

const S20Obsidian = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
      Obsidian — AI의 지식 저장소
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      로컬 마크다운 + 양방향 링크 + 지식 그래프 — RAG에 최적화된 개인 온톨로지 저장소
    </p>

    {/* Definition */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5 flex items-start gap-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      <span className="text-2xl shrink-0">💎</span>
      <p className="text-sm text-muted-foreground leading-relaxed">
        모든 노트가 마크다운 파일로 저장되고, <code className="bg-muted/60 px-1.5 py-0.5 rounded text-xs">[[링크]]</code>로 노트끼리 연결하면 <strong className="text-foreground">지식 그래프가 자동으로 만들어진다.</strong> 온톨로지를 쌓기에 가장 자연스러운 도구이면서, AI 에이전트가 직접 읽고 검색할 수 있는 <strong className="text-foreground">RAG 최적의 지식 저장소.</strong>
      </p>
    </div>

    {/* 3 reasons */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
      {reasons.map((r) => (
        <div key={r.num} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">REASON {r.num}</p>
          <p className="text-sm font-semibold mb-2">{r.title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
        </div>
      ))}
    </div>

    {/* Notion vs Obsidian one-liner */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">Notion vs Obsidian — 한 줄 비교</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-semibold mb-1">Notion</p>
          <p className="text-[12px] text-muted-foreground leading-relaxed">팀 협업·프로젝트 관리에 강함. 독점 포맷 — API 없이 AI가 직접 접근 불가.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary mb-1">Obsidian</p>
          <p className="text-[12px] text-muted-foreground leading-relaxed">개인 지식 축적·AI RAG 연동에 강함. 순수 .md — AI가 가공 없이 바로 읽음.</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/30">
        💡 둘 다 쓰는 것도 좋은 전략 — Notion으로 팀 작업하고, Obsidian에 나만의 온톨로지를 쌓는 방식.
      </p>
    </div>
  </SectionShell>
));
S20Obsidian.displayName = "S20Obsidian";
export default S20Obsidian;
