"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const flow = [
  { no: "01", title: "T3 실행", desc: "STEP 1의 B 산출물을 재료로 T3 카드뉴스 8장 초안을 돌린다 → 8장 구성안이 나온다.", prompt: null },
  { no: "02", title: "한 장 고르기", desc: "8장 중 마음에 안 드는 장 하나를 고른다. 어색한 문장, 밋밋한 훅 — 뭐든 좋다.", prompt: null },
  { no: "03", title: "후속 프롬프트로 수정", desc: "T6 후속 다듬기 프롬프트로 그 장만 고친다.", prompt: "3번 장을 질문형 훅으로 바꿔줘" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className={cn("flex items-center gap-3 mb-3", anim(index))}>
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Part 3 · STEP 2</p>
      <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs">10분</span>
    </div>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      카드뉴스 초안, <span className="text-muted-foreground">대화로 다듬기</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      초안은 시작점이다 — 마음에 안 드는 부분을 골라 후속 프롬프트로 고친다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "300ms" }}>
      {flow.map((f) => (
        <div key={f.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-1">{f.no}</p>
          <p className="text-lg font-semibold mb-2">{f.title}</p>
          <p className="text-sm text-muted-foreground">{f.desc}</p>
          {f.prompt && (
            <div className="rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line mt-3">{f.prompt}</div>
          )}
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">한 방에 끝내는 게 아니라 대화로 다듬는다</p>
      <p className="text-xl sm:text-2xl font-bold">
        AI는 <span className="text-primary">다듬을수록</span> 좋아진다
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S21PracticeStep2";
export default S;
