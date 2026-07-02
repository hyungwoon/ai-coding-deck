"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { label: "PAIR", title: "페어끼리 채점표 비교", desc: "STEP 1 채점표를 옆 사람과 맞춰본다. 판정이 갈린 항목부터 이야기하세요." },
  { label: "SHARE", title: "거수 → 2~3명 발표", desc: "AI가 틀린 부분을 찾은 사람은 손 들기. 2~3명이 어떤 오류였는지 발표한다." },
];

const patterns = [
  { title: "가짜 링크", desc: "주소가 그럴듯해도 클릭하면 없는 페이지 — 눌러서 확인해야 안다." },
  { title: "출처 없는 단정", desc: "근거 기관 없이 「~해야 한다」로 끝나는 문장." },
  { title: "유통기한 지난 정보", desc: "몇 년 전 기준을 최신처럼 말한다 — 날짜부터 본다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className={cn("flex items-center gap-3 mb-3", anim(index))}>
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Part 3 · 공유</p>
      <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs">7분</span>
    </div>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      AI가 틀린 부분, <span className="text-muted-foreground">찾은 사람?</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {steps.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-1">{s.label}</p>
          <p className="text-lg font-semibold mb-2">{s.title}</p>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "300ms" }}>
      {patterns.map((p) => (
        <div key={p.title} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
          <p className="font-mono text-xs text-muted-foreground mb-1">✗ PATTERN</p>
          <p className="text-lg font-semibold mb-2">{p.title}</p>
          <p className="text-sm text-muted-foreground">{p.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">오늘의 영웅은 AI를 잘 쓴 사람이 아니라</p>
      <p className="text-xl sm:text-2xl font-bold">
        <span className="text-primary">AI의 오류를 찾아낸</span> 사람이다
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S23PracticeShare";
export default S;
