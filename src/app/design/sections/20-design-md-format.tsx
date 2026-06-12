"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} data-code-slide>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        포맷 구조
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
        DESIGN.md = <span className="text-primary">두 부분</span>, 한 파일
      </h2>
      <p className={cn("text-sm text-muted-foreground mb-4", anim(index))} style={{ transitionDelay: "100ms" }}>
        Claude Code · Cursor · Copilot이 이 파일 하나로 brand-consistent UI를 생성한다.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-5", anim(index))} style={{ transitionDelay: "150ms" }}>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">상단 · YAML front matter</p>
          <p className="text-sm font-semibold mb-1">Machine-readable 토큰</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            hex 색상·font-size·spacing·border-radius·컴포넌트 값. AI가 파싱해 코드에 직접 적용.
          </p>
        </div>
        <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">하단 · Markdown 산문</p>
          <p className="text-sm font-semibold mb-1">Human-readable rationale</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            왜 그 값이 존재하고 어떻게 적용하는가. 사람이 읽는 디자인 의도.
          </p>
        </div>
      </div>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "350ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          DESIGN.md (예시)
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-snug text-foreground/90">
{`---
colors:
  primary: "#0066FF"
  background: "#0A0A0A"
typography:
  base: 16px
  scale: 1.25
radius:
  card: 16px
  button: 8px
---

## 브랜드 원칙
primary 블루는 행동 유도에만 사용한다.

## 컴포넌트 사용 원칙
버튼은 한 화면에 primary 하나만 허용한다.`}
        </pre>
      </div>
    </SectionShell>
));
S.displayName = "S20DesignMdFormat";
export default S;
