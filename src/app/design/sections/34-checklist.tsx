"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const CHECKS = [
  "YAML front matter에 토큰 값이 정확히 들어 있다",
  "각 규칙에 왜(rationale)가 1~2문장으로 있다",
  "예시와 반례가 나란히 있다",
  "헤딩·표·코드블록으로 구조가 분절돼 있다",
  "파일이 계층(brand/bx/product/ux)으로 분리돼 있다",
  "컴포넌트마다 변종·상태·경계가 정의돼 있다",
  "산문 감성어가 구체적 값으로 치환됐다",
  "파일 하나가 400줄 이하다",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 4 · 마무리 체크
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      좋은 DESIGN.md <span className="text-primary">8가지 체크리스트</span>
    </h2>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {CHECKS.map((c, i) => (
        <div
          key={c}
          className={cn("flex items-center gap-3 rounded-xl border border-border/40 bg-card/60 px-5 py-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 60}ms` }}
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary">✓</span>
          <span className="text-sm">{c}</span>
        </div>
      ))}
    </div>

    <p className={cn("mt-8 text-lg font-medium", anim(index))} style={{ transitionDelay: "650ms" }}>
      다 됐으면 — <span className="text-muted-foreground">이제 직접 만든다. 핸즈온 실습으로.</span>
    </p>
  </SectionShell>
));
S.displayName = "S34Checklist";
export default S;
