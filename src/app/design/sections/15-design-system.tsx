"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const LAYERS = [
  { icon: "◈", label: "토큰", desc: "색·타이포·간격·반경 — 브랜드의 최소 단위" },
  { icon: "⬡", label: "컴포넌트", desc: "토큰이 결합된 재사용 가능한 UI 블록" },
  { icon: "✦", label: "가이드", desc: "언제 어떻게 쓰는지 — 사람과 AI 모두를 위한 맥락" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Design System · 그룹 2 시작
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      Design System이란
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      팀이 일관된 제품을 만들 수 있도록{" "}
      <span className="text-foreground font-medium">토큰·컴포넌트·가이드를 한 곳에 묶은 공유 언어</span>다.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {LAYERS.map((l, i) => (
        <div
          key={l.label}
          className={cn("rounded-2xl border border-border/40 bg-card/60 p-6", anim(index))}
          style={{ transitionDelay: `${150 + i * 90}ms` }}
        >
          <div className="text-3xl text-primary mb-4">{l.icon}</div>
          <p className="font-bold text-lg mb-2">{l.label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("mt-8 border-l-2 border-primary/40 pl-5", anim(index))} style={{ transitionDelay: "450ms" }}>
      <p className="text-base leading-relaxed text-muted-foreground">
        디자인 시스템은 화면이 아니다.{" "}
        <span className="text-foreground font-medium">모든 화면이 어떻게 생겨야 하는지를 정의하는 언어다.</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S15DesignSystem";
export default S;
