"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const TAKEAWAYS = [
  {
    n: "01",
    text: "Design System은 토큰·컴포넌트·가이드의 공유 언어",
  },
  {
    n: "02",
    text: "DESIGN.md — AI가 읽는 단일 텍스트 소스",
  },
  {
    n: "03",
    text: "한 파일 안에: 사람용 산문 + AI용 토큰",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 2 정리
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      Design System →{" "}
      <span className="text-primary">DESIGN.md</span>
    </h2>

    <div className="space-y-4 mb-10">
      {TAKEAWAYS.map((t, i) => (
        <div
          key={t.n}
          className={cn("flex items-start gap-4 rounded-2xl border border-border/40 bg-card/60 p-5", anim(index))}
          style={{ transitionDelay: `${150 + i * 100}ms` }}
        >
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{t.n}</span>
          <p className="text-base font-medium leading-relaxed">{t.text}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/20 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "500ms" }}>
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">그룹 3 예고</p>
      <p className="text-lg font-semibold mb-2">
        그런데 우리 컴포넌트는 정말 다 담기나?
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        DESIGN.md는 토큰과 가이드를 담는다. 실제 UI 컴포넌트는 어디에 어떻게 존재해야 할까 — 다음 그룹에서 이어진다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S22Group2Summary";
export default S;
