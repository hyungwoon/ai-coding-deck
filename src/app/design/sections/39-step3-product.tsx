"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const LAYERS = [
  { label: "Atom", desc: "더 이상 쪼갤 수 없는 단위", example: "Button, Icon, Input, Badge" },
  { label: "Molecule", desc: "Atom 2개 이상 조합", example: "SearchBar, FormField, IconButton" },
  { label: "Organism", desc: "독립적으로 의미 있는 UI 블록", example: "Header, Card, PricingRow" },
  { label: "Template", desc: "레이아웃 골격", example: "PageLayout, SidebarLayout" },
];

const CHECKS = [
  "product.md 파일 생성 완료",
  "Atom 컴포넌트 3개 이상 기록",
  "Molecule 또는 Organism 1개 이상 조합 예시 포함",
  "각 컴포넌트에 usage 규칙 1줄 이상",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} data-code-slide>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      STEP 3 · product.md — 핵심
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      산문 컴포넌트 설명 → 구조화된 계층
    </h2>
    <p className={cn("text-muted-foreground mb-4 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      Atomic 계층으로 컴포넌트를 분류하고 조합·usage를 명시한다. 이게 AI가 일관된 UI를 만드는 계약서다.
    </p>

    <div className={cn("flex flex-wrap items-center gap-2 mb-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      {LAYERS.map((l) => (
        <span key={l.label} className="rounded-md border border-border/40 bg-card/60 px-2.5 py-1 text-xs">
          <span className="font-mono text-primary">{l.label}</span>
          <span className="text-muted-foreground/60"> · {l.desc}</span>
        </span>
      ))}
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "390ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          ① 강사 시연 — NMWC product.md · <a href="https://nmwc.ai.kr/product" target="_blank" rel="noopener" className="underline decoration-primary/40 underline-offset-2 hover:text-foreground">라이브 ↗</a>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-snug text-foreground/90">
{`# product.md

## Atoms
### btn-primary
- Element: <button class="btn-primary">
- Usage: CTA, 주요 액션 1개
- States: default · hover · disabled · loading
- MUST NOT: 한 화면에 2개 이상

## Molecules
### PricingRow
- Atoms: btn-primary + pricing-card
- Usage: 플랜 비교 섹션

## Rules
- 색은 토큰만: var(--accent-blue)
- radius: var(--radius-md) 이상`}
        </pre>
      </div>

      <div className={cn("rounded-2xl border border-primary/30 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "490ms" }}>
        <div className="border-b border-primary/20 px-4 py-2 font-mono text-xs text-primary">
          ② 당신 차례 — 내 product.md 작성
        </div>
        <div className="p-4 space-y-3 text-sm">
          <p className="text-muted-foreground">내 프로젝트의 가장 자주 쓰는 UI 컴포넌트 5개부터 시작한다.</p>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>• 이름, Element(태그/클래스), Usage, States, 금지 패턴</p>
            <p>• Atom 먼저 — Molecule은 Atom 조합으로 표현</p>
            <p>• "버튼은 파란색" → "btn-primary, var(--accent-blue)"</p>
            <p>• 지금 Figma / Storybook에 있는 이름 그대로 쓴다</p>
          </div>
          <p className="text-muted-foreground/60 text-xs">완벽하지 않아도 OK. 있는 것부터 채운다. 비어 있는 게 더 나쁘다.</p>
        </div>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-card/80 p-4", anim(index))} style={{ transitionDelay: "590ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">체크포인트 — STEP 3 완료 기준</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {CHECKS.map((c) => (
          <div key={c} className="flex items-center gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary">✓</span>
            <span className="text-sm">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S39Step3Product";
export default S;
