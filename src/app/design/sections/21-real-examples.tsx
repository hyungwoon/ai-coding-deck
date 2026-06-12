"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const LIBRARIES = [
  {
    name: "getdesign.md",
    desc: "73개 실제 사이트의 DESIGN.md 분석 라이브러리. 스타일·토큰·컴포넌트 패턴 아카이브.",
    tag: "분석 라이브러리",
  },
  {
    name: "awesome-design-md",
    desc: "VoltAgent 팀이 큐레이션한 우수 DESIGN.md 모음. 실전 작성 레퍼런스.",
    tag: "큐레이션",
  },
];

const BRANDS = ["Apple", "Claude", "Figma", "Stripe", "Vercel", "Linear", "Notion", "GitHub"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      실제 사례
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      이미 쌓이고 있는 <span className="text-primary">벤더 예시</span>
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "100ms" }}>
      표준 근거는 Google Stitch. 생태계는 빠르게 따라가고 있다.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
      {LIBRARIES.map((lib, i) => (
        <div
          key={lib.name}
          className={cn("rounded-2xl border border-border/40 bg-card/60 p-6", anim(index))}
          style={{ transitionDelay: `${150 + i * 100}ms` }}
        >
          <span className="inline-block rounded-full border border-border/40 px-2.5 py-0.5 font-mono text-xs text-muted-foreground mb-3">
            {lib.tag}
          </span>
          <p className="font-bold text-base mb-2">{lib.name}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{lib.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">
        DESIGN.md 보유 브랜드 (예시)
      </p>
      <div className="flex flex-wrap gap-2">
        {BRANDS.map((b, i) => (
          <span
            key={b}
            className={cn("rounded-full border border-border/40 bg-card/60 px-3 py-1 text-sm font-medium", anim(index))}
            style={{ transitionDelay: `${400 + i * 50}ms` }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S21RealExamples";
export default S;
