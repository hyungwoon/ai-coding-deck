"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const strip = [
  "훅 (질문형)", "문제 제기", "팩트 1", "팩트 2", "팩트 3", "행동 지침", "요약", "출처 명기",
];

const rules = [
  "① 이해하기 쉽고 명확한 표현",
  "② 거짓·과장 주의",
  "③ 근거 기반 정보 생산",
  "④ 출처·날짜 제시",
  "⑤ 이해관계·광고(협찬) 표시",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Template T3
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      카드뉴스 초안 — <span className="text-muted-foreground">생산자 5수칙을 내장하라</span>
    </h2>

    <div className={cn("grid grid-cols-4 sm:grid-cols-8 gap-0 rounded-2xl border border-border/40 overflow-hidden mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {strip.map((s, i) => (
        <div
          key={s}
          className={cn(
            "p-3 text-center border-border/40",
            (i + 1) % 4 !== 0 && "border-r",
            (i + 1) % 4 === 0 && i !== 7 && "sm:border-r",
            i < 4 && "border-b sm:border-b-0",
            i === 7 && "bg-primary/5",
          )}
        >
          <p className="font-mono text-xs text-muted-foreground mb-1">{i + 1}{i === 7 && " ★"}</p>
          <p className="text-xs sm:text-sm font-medium leading-tight">{s}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-4", anim(index))} style={{ transitionDelay: "225ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase mb-1">CONSTRAINT · 생산자 5수칙 (보건복지부·KHEPI 가이드라인)</p>
      <p className="text-lg font-semibold leading-snug mb-3">T3는 이 다섯 줄을 제약으로 내장한다</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
        {rules.map((r) => (
          <p key={r} className="text-sm text-muted-foreground">{r}</p>
        ))}
        <p className="text-sm text-muted-foreground sm:col-span-2">
          ＋ AI 대응 개정: 이해관계와 함께 <span className="font-semibold text-foreground">AI 생성 여부 표시</span> 권고.
        </p>
      </div>
    </div>

    <p className={cn("text-xs text-muted-foreground", anim(index))} style={{ transitionDelay: "300ms" }}>
      <span className="font-mono uppercase">Note</span> · 이 강의는 구성안·카피까지 — 디자인은 여러분의 몫.
    </p>
  </SectionShell>
));
S.displayName = "S16TemplateCardnews";
export default S;
