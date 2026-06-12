"use client";
import React, { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const ROWS = [
  {
    do: "페이지당 primary Button 1개만",
    dont: "CTA마다 primary 반복",
  },
  {
    do: "라벨은 동사+목적어 (저장하기, 계속하기)",
    dont: "OK / 확인 같은 맥락 없는 라벨",
  },
  {
    do: "파괴적 액션은 destructive variant",
    dont: "삭제 버튼에 primary 사용",
  },
  {
    do: "아이콘만 필요할 땐 IconButton",
    dont: "Button에 아이콘만 넣고 label 숨기기",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 4 · Usage Principles
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      언제 쓰고 <span className="text-destructive">언제 쓰지 마라</span>
    </h2>

    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      <div className={cn("font-mono text-xs uppercase tracking-widest text-primary mb-1", anim(index))} style={{ transitionDelay: "100ms" }}>
        Do
      </div>
      <div className={cn("font-mono text-xs uppercase tracking-widest text-destructive mb-1", anim(index))} style={{ transitionDelay: "100ms" }}>
        Don&apos;t
      </div>

      {ROWS.map((row, i) => (
        <React.Fragment key={i}>
          <div
            className={cn("rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary", anim(index))}
            style={{ transitionDelay: `${180 + i * 70}ms` }}
          >
            {row.do}
          </div>
          <div
            className={cn("rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive", anim(index))}
            style={{ transitionDelay: `${220 + i * 70}ms` }}
          >
            {row.dont}
          </div>
        </React.Fragment>
      ))}
    </div>

    <p className={cn("mt-6 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "500ms" }}>
      Do/Don&apos;t 쌍이 4개면 충분하다. 10개를 넘기면 AI도 사람도 외우지 못한다.
    </p>
  </SectionShell>
));
S.displayName = "S31UsagePrinciples";
export default S;
