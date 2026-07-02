"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const seeds = [
  {
    q: "「유료 결제 해야 하나요?」",
    a: "오늘 배운 건 전부 무료로 충분합니다. 한도에 걸리면 다른 무료 AI로 갈아타면 됩니다.",
  },
  {
    q: "「어떤 AI가 제일 좋아요?」",
    a: "도구보다 프롬프트와 검증이 중요합니다. 리서치는 출처를 보여주는 모드가 기본값.",
  },
  {
    q: "「AI 쓴 티 나면 안 좋은 건가요?」",
    a: "개정 가이드라인은 오히려 AI 활용 「표시」를 권고합니다 — 숨기는 게 아니라 밝히는 것.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Q&amp;A
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      무엇이든 물어보세요
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      자주 나오는 질문 세 가지 — 먼저 짧게 답해두고 시작합니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "300ms" }}>
      {seeds.map((s, i) => (
        <div key={s.q} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-2">Q{i + 1}</p>
          <p className="text-lg font-semibold leading-snug mb-2">{s.q}</p>
          <p className="text-sm text-muted-foreground">{s.a}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S27Qna";
export default S;
