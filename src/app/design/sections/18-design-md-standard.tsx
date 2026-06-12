"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const FACTS = [
  { label: "공개일", value: "2026-04-21" },
  { label: "라이선스", value: "Apache 2.0" },
  { label: "레포", value: "google-labs-code/design.md" },
  { label: "상태", value: "Alpha · spec & CLI 개발 중" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      표준 등장
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      <span className="text-primary">DESIGN.md</span>{" "}
      <span className="text-muted-foreground font-normal">= Google Stitch 표준</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      Google Labs가 오픈소스로 공개한{" "}
      <span className="text-foreground font-medium">디자인 시스템을 코딩 에이전트에게 설명하는 포맷 명세</span>.
      영속적이고 구조화된 이해를 AI에게 준다.
    </p>

    <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-base leading-relaxed">
        &ldquo;디자인 시스템을 코딩 에이전트에게 설명하는 포맷 명세 —{" "}
        <span className="font-semibold">영속적이고 구조화된 이해를 준다</span>.&rdquo;
      </p>
      <p className="mt-2 text-sm text-muted-foreground">— Google Stitch / DESIGN.md spec</p>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {FACTS.map((f, i) => (
        <div
          key={f.label}
          className={cn("rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${250 + i * 80}ms` }}
        >
          <p className="font-mono text-xs text-muted-foreground mb-1">{f.label}</p>
          <p className="font-semibold text-sm">{f.value}</p>
        </div>
      ))}
    </div>

    <p className={cn("mt-6 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "600ms" }}>
      목표:{" "}
      <span className="text-foreground">OpenAPI가 REST에 한 것처럼</span>{" "}
      — DESIGN.md가 디자인 시스템 기술의 de facto standard가 되는 것.
    </p>
  </SectionShell>
));
S.displayName = "S18DesignMdStandard";
export default S;
