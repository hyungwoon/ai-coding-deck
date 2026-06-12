"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} data-code-slide>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        두 파일 · 두 역할
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        AGENTS.md vs DESIGN.md
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
        <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">AGENTS.md</p>
          <p className="font-bold text-lg mb-3">코딩 에이전트가 읽는다</p>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>• 프로젝트를 <span className="text-foreground">어떻게 빌드</span>하는가</li>
            <li>• 테스트·린트·배포 컨벤션</li>
            <li>• 아키텍처·파일 구조 규칙</li>
          </ul>
        </div>

        <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">DESIGN.md</p>
          <p className="font-bold text-lg mb-3">디자인 에이전트가 읽는다</p>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>• 제품이 <span className="text-foreground">어떻게 보이고 느껴져야</span> 하는가</li>
            <li>• 토큰·컴포넌트·브랜드 가이드</li>
            <li>• 왜 그 디자인 결정을 했는가</li>
          </ul>
        </div>
      </div>

      <div className={cn("rounded-xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "350ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          한 줄 요약
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`# DESIGN.md is to design
# what AGENTS.md is to code conventions.

둘 다: 사람·기계 모두 읽는 마크다운
둘 다: 프로젝트 루트에 두는 단일 파일
차이:  AGENTS.md = 어떻게 짓는가
       DESIGN.md = 어떻게 보이는가`}
        </pre>
      </div>
    </SectionShell>
));
S.displayName = "S19AgentsVsDesign";
export default S;
