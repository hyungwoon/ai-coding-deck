"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const sentences = [
  {
    no: "01",
    line: "AI는 자신있게 틀리는 인턴이다.",
    sub: "주요 AI 모델의 의료 정보 환각률 15.6% (NIA 보고서 인용) — 믿지 말고 확인한다.",
  },
  {
    no: "02",
    line: "5요소로 시키고, 5수칙으로 검증한다.",
    sub: "프롬프트는 5요소로 구체적으로, 결과는 가이드라인 이용자 5수칙으로 의심한다.",
  },
  {
    no: "03",
    line: "이름 걸고 나가는 콘텐츠의 책임은 사람에게 있다.",
    sub: "게시 버튼은 언제나 사람이 누른다 — AI 활용은 숨기지 않고 표시한다.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · 정리
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      오늘의 세 문장
    </h2>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {sentences.map((s) => (
        <div key={s.no} className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex items-start gap-5">
            <p className="font-mono text-xs text-muted-foreground pt-1.5 sm:pt-2.5">{s.no}</p>
            <div>
              <p className="text-xl font-bold leading-snug sm:text-3xl">{s.line}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.sub}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S25ThreeSentences";
export default S;
