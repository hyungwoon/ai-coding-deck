"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const badTraits = [
  { title: "누구나 아는 뻔한 내용", desc: "검색 첫 페이지 수준의 일반론만 나열 — 새로 만들 이유가 없다." },
  { title: "출처 없음", desc: "어느 기관 자료인지, 언제 정보인지 아무 단서가 없다." },
  { title: "타깃 불명", desc: "누구에게 말하는지가 없으니 아무에게도 꽂히지 않는다." },
  { title: "과장 표현이 슬쩍 섞임", desc: "「놀라운 효과」 같은 문구가 티 안 나게 끼어든다 — 가이드라인이 경고하는 지점." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Live Demo ②
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      「카드뉴스 만들어줘」
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      가장 흔한 주문을 그대로 넣어봅니다 — 결과가 왜 쓸 수 없는지 눈으로 확인.
    </p>

    <div className={cn("rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      유산균에 대한 카드뉴스 만들어줘
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4", anim(index))} style={{ transitionDelay: "225ms" }}>
      {badTraits.map((t, i) => (
        <div key={t.title} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-1">✗ RESULT {i + 1}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{t.title}</p>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </div>
      ))}
    </div>

    <p className={cn("text-xs text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "225ms" }}>
      <span className="font-mono uppercase">Note</span> · 이 결과는 지우지 않고 화면에 그대로 보존합니다 — 곧 나올 Good 프롬프트의 대조군.
    </p>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">같은 AI, 같은 주제로 방금 벌어진 일.</p>
      <p className="text-xl sm:text-2xl font-bold">
        나쁜 결과는 AI 탓이 아니다 — <span className="text-primary">주문이 나빴다</span>.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S10DemoBad";
export default S;
