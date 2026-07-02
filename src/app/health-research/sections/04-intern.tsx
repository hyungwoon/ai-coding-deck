"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const traits = [
  { label: "작동 원리", body: "다음 단어를 확률로 찍는 초강력 자동완성." },
  { label: "시험 — 지식 재현", body: "족보를 통째로 외웠으니 만점." },
  { label: "병동 경험 — 맥락·책임", body: "실제 환자를 본 적이 없다. 0점." },
  { label: "그래서", body: "「모른다」 대신 그럴듯하게 지어낸다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · AI 이해
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      AI = 족보를 통째로 외운 신입 인턴
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {traits.map((t) => (
        <div key={t.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-2">{t.label}</p>
          <p className="text-lg font-semibold leading-snug">{t.body}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">두려워할 필요도, 맹신할 필요도 없다</p>
      <p className="text-xl sm:text-2xl font-bold">
        인턴에게 일 맡기듯 — <span className="text-primary">시키는 법(프롬프트)과 검수하는 법(검증)</span>만 알면 됩니다
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S04Intern";
export default S;
