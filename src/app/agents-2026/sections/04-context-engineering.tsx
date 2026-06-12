"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const pieces = [
  "시스템 인스트럭션",
  "툴 스키마",
  "검색된 문서",
  "이전 툴 출력",
  "스크래치패드 상태",
  "압축된 히스토리",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Learn ① · Context Engineering
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      Prompt → Context — 진짜 리네이밍
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      코스메틱이 아니다. 모델은 이제 영리한 지시문 대상이 아니라 — 매 스텝마다 작동하는 컨텍스트 조립 대상이다.
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">컨텍스트 = 다음의 합</p>
      <div className="flex flex-wrap gap-2">
        {pieces.map((p) => (
          <span key={p} className="text-sm px-3 py-1 rounded-full border border-border/40 bg-muted/30 text-muted-foreground">
            {p}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        에이전트의 행동 = 윈도우에 뭘 넣었는지의 <span className="text-foreground font-semibold">emergent property</span>
      </p>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="text-2xl sm:text-3xl font-bold mb-2">Context is state.</p>
      <p className="text-sm text-muted-foreground">컨텍스트 윈도우를 RAM처럼 다뤄라.</p>
    </div>
  </SectionShell>
));
S.displayName = "S04ContextEngineering";
export default S;
