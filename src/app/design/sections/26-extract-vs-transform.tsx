"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 3 · AI-Native Design · D9 · 핵심 명제
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      추출 vs <span className="text-primary">변환</span>
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">추출 가능 — 기계적</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-foreground/50">·</span>
            <span><span className="text-foreground">토큰</span> — color · radius · space · motion 값</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-foreground/50">·</span>
            <span><span className="text-foreground">컴포넌트 레시피</span> — 선언·상태·토큰·예제 코드</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-foreground/50">·</span>
            <span>MCP get_token · get_component로 <span className="text-foreground">이미 배포 중</span></span>
          </li>
        </ul>
      </div>

      <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">변환 필요 — 디자이너 판단</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary/60">·</span>
            <span><span className="text-foreground">조합 규칙</span> — Molecule이 어떤 Atom을 묶는가</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary/60">·</span>
            <span><span className="text-foreground">Usage</span> — 어떤 맥락에서 어떤 컴포넌트를 써야 하나</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary/60">·</span>
            <span><span className="text-foreground">Rationale</span> — 왜 이 구조·이 패턴인가</span>
          </li>
        </ul>
      </div>
    </div>

    <div className={cn("mt-8 border-l-2 border-primary/40 pl-5", anim(index))} style={{ transitionDelay: "380ms" }}>
      <p className="text-lg leading-relaxed">
        &ldquo;Token은 되지만 Components는 안 된다&rdquo;가 아니다.<br />
        <span className="font-semibold">레시피는 된다. 그 뒤의 판단이 안 된다.</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S26ExtractVsTransform";
export default S;
