"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rubric = ["출처 표기", "날짜 표기", "과장·단정 표현", "한계 고지"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className={cn("flex items-center gap-3 mb-3", anim(index))}>
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Part 3 · STEP 1</p>
      <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs">10분</span>
    </div>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      프롬프트 비교 실험
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      같은 주제를 두 가지 방식으로 물어본다 — 두 답변을 나란히 놓고 직접 채점하세요.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3", anim(index))} style={{ transitionDelay: "300ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground mb-2">A · 맨 문장</p>
        <div className="rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line mb-3">유산균 몸에 좋아?</div>
        <p className="text-sm text-muted-foreground">평소처럼 묻는 한 줄. 그대로 보내세요.</p>
      </div>
      <div className="rounded-2xl border border-primary/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground mb-2">B · T2 템플릿</p>
        <div className="rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line mb-3">T2 출처 강제 리서치 템플릿 + 같은 주제</div>
        <p className="text-sm text-muted-foreground">킷 페이지의 T2를 복사해서 주제만 바꿔 보내세요.</p>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-10", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">SCORECARD · 4항목 O/X</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {rubric.map((r) => (
          <div key={r} className="rounded-lg bg-muted/40 p-3 text-center">
            <p className="text-sm font-semibold mb-1">{r}</p>
            <p className="font-mono text-xs text-muted-foreground">O / X</p>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">같은 질문, 같은 AI</p>
      <p className="text-xl sm:text-2xl font-bold">
        달라진 것은 <span className="text-primary">프롬프트</span> 하나뿐이다
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S20PracticeStep1";
export default S;
