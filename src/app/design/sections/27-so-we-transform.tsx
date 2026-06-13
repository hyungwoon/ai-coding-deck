"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 3 · AI-Native Design · 과제
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      그래서, <span className="text-primary">변환</span>한다
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Before · 산문 암묵지</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Product.md §05 — 사람이 읽는 표. 조합 규칙·usage·rationale이 자연어로만 존재.{" "}
          <span className="text-foreground">AI가 쿼리하지 못한다.</span>
        </p>
      </div>
      <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">After · AI-native DESIGN.md</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          구조화된 섹션으로 변환. 조합 규칙·usage·rationale을{" "}
          <span className="text-foreground">AI가 파싱하고 직접 읽을 수 있는 형식</span>으로.
        </p>
      </div>
    </div>

    <div className={cn("mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">변환의 주체 — 디자이너</p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        이 변환은 자동화되지 않는다. 조합 규칙과 rationale은{" "}
        <span className="text-foreground font-medium">디자이너의 판단</span>이 담긴 암묵지다.
        디자이너가 그 판단을 구조화된 언어로 명시해야 AI가 쓸 수 있다.
      </p>
    </div>

    <div className={cn("mt-6 flex items-center gap-3", anim(index))} style={{ transitionDelay: "450ms" }}>
      <div className="h-px flex-1 bg-border/30" />
      <p className="text-sm text-muted-foreground">
        <span className="text-foreground font-medium">그룹 4</span> — 어떻게 변환하는가
      </p>
      <div className="h-px flex-1 bg-border/30" />
    </div>
  </SectionShell>
));
S.displayName = "S27SoWeTransform";
export default S;
