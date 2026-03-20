"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S18bTacitKnowledge = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      암묵지와 명시지
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      온톨로지의 진짜 어려움 — 머릿속에만 있는 지식을 꺼내는 것
    </p>

    {/* 두 가지 지식 비교 */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5", anim(index))} style={{ transitionDelay: "120ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">명시지 (Explicit Knowledge)</p>
        <p className="text-sm text-muted-foreground/50 mb-3">= 이미 문서화된 지식</p>
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li>- 매뉴얼, 가격표, 조직도, 계약서</li>
          <li>- Notion, Google Docs에 이미 있는 것</li>
          <li>- AI가 바로 읽을 수 있음</li>
          <li>- 온톨로지 구축 난이도: <span className="text-foreground font-semibold">낮음</span></li>
        </ul>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">암묵지 (Tacit Knowledge)</p>
        <p className="text-sm text-muted-foreground/50 mb-3">= 머릿속에만 있는 지식</p>
        <ul className="text-sm text-muted-foreground space-y-1.5">
          <li>- &quot;이 클라이언트는 이렇게 대해야 해&quot;</li>
          <li>- &quot;이 상황에선 이 판단이 맞아&quot;</li>
          <li>- 경험, 직관, 맥락 판단, 감각</li>
          <li>- 온톨로지 구축 난이도: <span className="text-foreground font-semibold">매우 높음</span></li>
        </ul>
      </div>
    </div>

    {/* 핵심 메시지 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
      <p className="text-sm font-bold mb-3">온톨로지의 진짜 가치는 암묵지를 명시지로 전환하는 것</p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">머릿속 경험</span>
        <span className="text-muted-foreground/30">&rarr;</span>
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">언어로 표현</span>
        <span className="text-muted-foreground/30">&rarr;</span>
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">구조화된 문서</span>
        <span className="text-muted-foreground/30">&rarr;</span>
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">AI가 읽을 수 있는 형태</span>
      </div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
        이 전처리가 불가능한 지식 — 말로 설명할 수 없는 직관, 체화된 감각 — 은 온톨로지로 만들 수 없습니다.
        이것이 온톨로지의 <span className="text-foreground font-semibold">구조적 한계</span>입니다.
      </p>
    </div>

    {/* 시간 경고 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="text-sm font-bold mb-2">규모가 커지면 하고 싶어도 못 한다</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        3명일 때 암묵지를 꺼내는 건 가능합니다. 30명이 되면 이미 어렵습니다. 300명이 되면 불가능합니다.
        핵심 인력이 퇴사하면 그 사람의 암묵지는 영원히 사라집니다.
        <span className="text-foreground font-semibold"> 지금, 작을 때, 꺼낼 수 있을 때 구조화해야 합니다.</span>
      </p>
    </div>
  </SectionShell>
));

S18bTacitKnowledge.displayName = "S18bTacitKnowledge";
export default S18bTacitKnowledge;
