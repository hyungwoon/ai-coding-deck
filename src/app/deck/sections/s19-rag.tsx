"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const comparison = [
  {
    label: "RAG 없는 AI",
    desc: "학습된 것만 안다. 내 회사 문서, 최신 정보, 개인 자료는 모른다. 할루시네이션 위험.",
  },
  {
    label: "RAG 있는 AI",
    desc: "내 문서를 벡터DB에 넣으면 AI가 실시간으로 검색해서 답변. 출처도 함께 제시.",
  },
  {
    label: "온톨로지 + RAG",
    desc: "온톨로지로 구조화 → 벡터DB 저장 → RAG로 검색. 내 지식이 AI의 장기기억이 됨.",
  },
];

const flowSteps = [
  { label: "사용자 질문", sub: '"우리 환불 정책은?"', color: "border-border/40 bg-card/80" },
  { label: "벡터DB 검색", sub: "Semantic Search", color: "border-primary/30 bg-primary/5" },
  { label: "컨텍스트 조립", sub: "질문 + 검색 결과", color: "border-border/40 bg-card/80" },
  { label: "LLM 생성", sub: "Claude · GPT", color: "border-primary/30 bg-primary/5" },
  { label: "정확한 답변", sub: "문서 기반 · 출처 포함", color: "border-border/40 bg-card/80" },
];

const S19Rag = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
      RAG — AI가 모르는 것을 검색해서 답하는 방법
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      Retrieval-Augmented Generation — 검색과 생성의 결합으로 LLM의 지식 한계를 극복한다
    </p>

    {/* Definition */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-sm text-muted-foreground leading-relaxed">
        LLM의 가장 큰 약점은 <strong className="text-foreground">학습 데이터 이후의 정보를 모른다</strong>는 것. RAG는 질문이 들어오면 먼저 관련 문서를 벡터DB에서 검색해서 컨텍스트에 넣고, 그 내용을 바탕으로 답변을 생성한다.
      </p>
    </div>

    {/* Flow strip */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
      <div className="bg-muted/30 border-b border-border/40 px-5 py-3">
        <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">RAG 작동 흐름</p>
      </div>
      <div className="px-5 py-4 flex items-center gap-2 overflow-x-auto">
        {flowSteps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 shrink-0">
            <div className={cn("rounded-xl border px-4 py-3 text-center min-w-[110px]", step.color)}>
              <p className="text-sm font-semibold">{step.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{step.sub}</p>
            </div>
            {i < flowSteps.length - 1 && (
              <span className="text-muted-foreground/40 text-sm">→</span>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* 3-column comparison */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "250ms" }}>
      {comparison.map((item) => (
        <div key={item.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-semibold text-primary mb-2">{item.label}</p>
          <p className="text-[12px] text-muted-foreground leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S19Rag.displayName = "S19Rag";
export default S19Rag;
