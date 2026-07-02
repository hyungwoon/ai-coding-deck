"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const elements = [
  { label: "ROLE", name: "역할", example: "너는 대학생 대상 보건 콘텐츠 에디터야", highlight: false },
  { label: "CONTEXT", name: "맥락", example: "인스타그램 카드뉴스, 타깃은 20대", highlight: false },
  { label: "TASK", name: "과업", example: "8장 구성안을 만들어", highlight: false },
  { label: "FORMAT", name: "형식", example: "장별 제목 + 본문 2줄", highlight: false },
  { label: "CONSTRAINT", name: "제약", example: "공공기관 출처만, 과장 금지, 모르면 모른다고", highlight: true },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Prompt Anatomy
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      좋은 프롬프트 5요소
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      다섯 칸을 채우면 주문이 된다 — 순서보다 빠짐없이 넣는 것이 중요.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {elements.map((e) => (
        <div
          key={e.label}
          className={cn(
            "rounded-2xl border p-5 shadow-sm backdrop-blur-sm",
            e.highlight ? "border-primary/40 bg-primary/5 sm:col-span-2" : "border-border/40 bg-card/80",
          )}
        >
          <div className="flex items-center gap-2 mb-1">
            <p className="font-mono text-xs text-muted-foreground uppercase">{e.label} · {e.name}</p>
            {e.highlight && (
              <span className="rounded-full border border-primary/40 px-2.5 py-0.5 font-mono text-xs text-primary">생명선</span>
            )}
          </div>
          <p className="text-lg font-semibold leading-snug">「{e.example}」</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">역할·맥락·과업·형식은 어느 분야에나 통하는 공식이지만,</p>
      <p className="text-xl sm:text-2xl font-bold">
        건강 도메인에선 다섯 번째 <span className="text-primary">「제약」이 생명선</span>이다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S11FiveElements";
export default S;
