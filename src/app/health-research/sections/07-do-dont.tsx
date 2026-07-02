"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const dos = [
  "초안 작성",
  "요약·구조화",
  "어려운 논문을 쉬운 말로",
  "아이디어 발산",
  "대화로 반복 다듬기",
];

const donts = [
  "사실 확정",
  "최신 정보 단독 조사",
  "출처 생성",
  "의학적 판단·진단·치료",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · AI 이해
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      잘 시키는 일 <span className="text-muted-foreground">vs</span> 맡기면 안 되는 일
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground uppercase mb-3">DO — 잘 시키는 일</p>
        <ul className="space-y-2">
          {dos.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm">
              <span className="font-mono text-xs text-primary mt-0.5">○</span>
              <span className="font-semibold">{d}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground uppercase mb-3">DON&apos;T — 맡기면 안 되는 일</p>
        <ul className="space-y-2">
          {donts.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm">
              <span className="font-mono text-xs text-destructive mt-0.5">✗</span>
              <span className="font-semibold">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">경계선은 하나</p>
      <p className="text-xl sm:text-2xl font-bold">
        산출물이 「초안」이면 OK, 「최종본」이면 <span className="text-primary">반드시 사람이 검증</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S07DoDont";
export default S;
