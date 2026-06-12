"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 3 · AI-Native Design · D9
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      산문에 <span className="text-destructive">갇힌</span> 암묵지
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
        Product.md §05b · Molecules — 사람이 읽는 산문 표
      </div>
      <div className="overflow-x-auto p-5">
        <table className="w-full text-xs font-mono border-collapse">
          <thead>
            <tr className="text-muted-foreground/60">
              <th className="text-left pr-6 pb-2 font-normal">컴포넌트</th>
              <th className="text-left pr-6 pb-2 font-normal">구성</th>
              <th className="text-left pr-6 pb-2 font-normal">용도</th>
            </tr>
          </thead>
          <tbody className="text-foreground/80">
            <tr>
              <td className="pr-6 py-1 font-semibold text-foreground">Form field</td>
              <td className="pr-6 py-1">Label + Input + Helper + Error</td>
              <td className="pr-6 py-1 text-muted-foreground">모든 form 필드</td>
            </tr>
            <tr>
              <td className="pr-6 py-1 font-semibold text-foreground">Search bar</td>
              <td className="pr-6 py-1">Icon + Input + Clear</td>
              <td className="pr-6 py-1 text-muted-foreground">검색</td>
            </tr>
            <tr>
              <td className="pr-6 py-1 font-semibold text-foreground">Notification banner</td>
              <td className="pr-6 py-1">Icon + title + body + action + close</td>
              <td className="pr-6 py-1 text-muted-foreground">inline alert</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-5", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="font-mono text-xs uppercase tracking-widest text-destructive mb-2">문제</p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        <span className="text-foreground font-medium">조합 규칙</span>(Form field가 왜 Label + Input + Helper + Error인가)·
        <span className="text-foreground font-medium">usage</span>(언제 써야 하나)·
        <span className="text-foreground font-medium">rationale</span>(왜 이 구조인가)이
        사람이 읽는 산문 표에만 있다. AI가 구조적으로 쿼리하지 못한다.
      </p>
    </div>

    <p className={cn("mt-5 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "380ms" }}>
      <span className="font-mono text-xs text-muted-foreground/60">get_component("form-field")</span>를 호출하면 레시피는 온다. 하지만 <span className="text-foreground">"왜 이 조합인가"</span>는 돌아오지 않는다.
    </p>
  </SectionShell>
));
S.displayName = "S25TacitInProse";
export default S;
