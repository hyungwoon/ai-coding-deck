"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const principles = [
  { t: "잘 명명된 5~10개 > 평범한 20개", d: "툴 카운트는 미덕이 아니다" },
  { t: "이름은 영어 동사구처럼", d: "모델은 이름·설명으로 툴을 고른다" },
  { t: "Description에 언제 쓰고 언제 안 쓰는지", d: "negative space가 더 중요할 때가 많다" },
  { t: "에러는 모델이 행동 가능한 피드백", d: "다음 행동의 힌트가 되어야 한다" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Learn ② · Tool Design
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      툴은 에이전트가 비즈니스를 만나는 곳
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      모델은 이름·설명으로 툴을 고르고, 에러 메시지로 재시도한다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {principles.map((p) => (
        <div key={p.t} className="rounded-2xl border border-border/40 bg-card/80 p-4 backdrop-blur-sm">
          <p className="text-sm font-semibold mb-1">{p.t}</p>
          <p className="text-xs text-muted-foreground">{p.d}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-muted/20 p-5 mb-4", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">에러 메시지 차이</p>
      <div className="space-y-2 font-mono text-sm">
        <p><span className="text-destructive">✗</span> <span className="text-muted-foreground">Error: 400 Bad Request</span></p>
        <p><span className="text-primary">✓</span> Max tokens 500 exceeded, try summarizing first</p>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        한 팀: 에러 메시지만 다시 써서 <span className="text-foreground font-semibold">retry loop 40% 감소</span>
      </p>
    </div>

    <p className={cn("text-sm text-muted-foreground italic", anim(index))} style={{ transitionDelay: "380ms" }}>
      📖 Anthropic — Writing tools for agents · 사람들은 프롬프트만 튜닝하고 진짜 레버리지(툴 사이드)를 무시한다.
    </p>
  </SectionShell>
));
S.displayName = "S06ToolDesign";
export default S;
