"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { name: "주제 선정", tool: "T1", star: true },
  { name: "리서치", tool: "T2", star: true },
  { name: "팩트체크", tool: "사람 + AI 보조", star: false },
  { name: "콘텐츠 초안", tool: "T3", star: true },
  { name: "게시 전 점검", tool: "체크리스트", star: false },
];

const monitoring = [
  { name: "발굴", tool: "가이드라인 기반", star: false },
  { name: "판정", tool: "T4", star: true },
  { name: "보고서", tool: "T5", star: true },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · Opening
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      여러분의 한 달, 5단계로 다시 보기
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))}>
      새 일을 더하는 게 아니다 — 지금 하는 일에 AI가 꽂히는 자리만 표시한다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-0 rounded-2xl border border-border/40 overflow-hidden mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {steps.map((s, i) => (
        <div key={s.name} className={cn("p-4 border-b sm:border-b-0 sm:border-r border-border/40 last:border-b-0 sm:last:border-r-0", s.star && "bg-primary/5")}>
          <p className="font-mono text-xs text-muted-foreground mb-1">
            STEP {i + 1}{s.star && <span className="text-primary"> ★</span>}
          </p>
          <p className="text-sm font-semibold">{s.name}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{s.tool}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-10", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase mb-3">모니터링 활동 · 월 1회 — 같은 구조</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-lg border border-border/40 overflow-hidden">
        {monitoring.map((m) => (
          <div key={m.name} className={cn("p-3 border-b sm:border-b-0 sm:border-r border-border/40 last:border-b-0 sm:last:border-r-0", m.star && "bg-primary/5")}>
            <p className="text-sm font-semibold">
              {m.name}{m.star && <span className="text-primary"> ★</span>}
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{m.tool}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">★ 표시가 오늘의 커리큘럼</p>
      <p className="text-xl sm:text-2xl font-bold">
        오늘 배우는 템플릿 6개가 <span className="text-primary">이 칸들에 그대로 꽂힙니다</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S02WorkflowMap";
export default S;
