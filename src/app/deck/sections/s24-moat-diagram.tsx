"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const bars = [
  { year: "2022", widthClass: "w-[90%]", colorClass: "bg-red-400/60" },
  { year: "2024", widthClass: "w-[55%]", colorClass: "bg-primary/60" },
  { year: "2025", widthClass: "w-[28%]", colorClass: "bg-blue-400/60" },
  { year: "2026→", widthClass: "w-[10%]", colorClass: "bg-green-400/50", label: "누구나" },
];

const moats = [
  {
    badge: "MOAT #1 ★",
    title: "문제 정의",
    sub: "Problem Definition",
    desc: "AI는 주어진 문제를 잘 푼다. 하지만 어떤 문제를 풀어야 하는지는 사람이 정한다. 도메인 전문성 + 사용자 공감 + 현실 감각의 합.",
  },
  {
    badge: "MOAT #2",
    title: "온톨로지 + 독점 데이터",
    sub: "Proprietary Data",
    desc: "같은 Claude를 써도 내 온톨로지가 주입된 에이전트와 없는 에이전트의 출력은 전혀 다르다. 모델은 공유되지만 데이터와 맥락은 나만의 것.",
  },
  {
    badge: "MOAT #3",
    title: "지속 학습",
    sub: "Continuous Learning",
    desc: "AI가 틀릴 때마다 온톨로지를 갱신하는 피드백 루프. RLVR이 모델을 자동 개선하듯, 이 루프가 나의 AI를 개선한다.",
  },
];

const SlideMoatDiagram = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        09 · 해자
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
        무엇이 진짜 경쟁 우위인가
      </h2>

      {/* Bar chart */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
          에이전트 구축 진입장벽
        </p>
        <div className="flex flex-col gap-2.5">
          {bars.map(({ year, widthClass, colorClass, label }) => (
            <div key={year} className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground w-10 shrink-0">{year}</span>
              <div className={cn("h-2 rounded-full", widthClass, colorClass)} />
              {label && <span className="text-xs text-green-400/80 font-mono">{label}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* 3 moat cards */}
      <div className={cn("grid grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "200ms" }}>
        {moats.map(({ badge, title, sub, desc }, i) => (
          <div
            key={badge}
            className={cn(
              "rounded-2xl border p-5 shadow-sm",
              i === 0
                ? "border-primary/20 bg-primary/5"
                : "border-border/40 bg-card/80 backdrop-blur-sm"
            )}
          >
            <p className={cn("font-mono text-[10px] tracking-widest mb-2", i === 0 ? "text-primary" : "text-muted-foreground")}>
              {badge}
            </p>
            <p className={cn("text-sm font-bold mb-0.5", i === 0 ? "text-primary" : "")}>{title}</p>
            <p className="font-mono text-[10px] text-muted-foreground mb-3">{sub}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));
SlideMoatDiagram.displayName = "SlideMoatDiagram";
export default SlideMoatDiagram;
