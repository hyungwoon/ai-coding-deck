"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="">
    <section data-code-slide className="w-full">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        그룹 4 · AI 가독성
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        AI가 잘 읽는 DESIGN.md 형식
      </h2>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          brand.md — YAML front matter + markdown rationale 예시
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`---
tokens:
  color-primary: "#6366F1"
  color-surface: "#F8F8FF"
  radius-base: "4px"
  radius-card: "12px"
scope: brand
---

## Color · Primary

**값**: \`#6366F1\` (Indigo 500)

**왜**: 신뢰·기술을 상징. 경쟁사 대비 고채도로 에너지 표현.

**언제**: 핵심 CTA, 강조 텍스트, 선택 상태.

**반례**: 배경 전면에 primary를 쓰면 피로감. surface 위 accent로만.`}
        </pre>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-semibold mb-1 text-primary">YAML front matter</p>
          <p className="text-muted-foreground">토큰 값 기계 파싱. MCP가 직접 읽는 레이어.</p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "330ms" }}>
          <p className="font-semibold mb-1 text-primary">헤딩·표</p>
          <p className="text-muted-foreground">AI가 섹션을 분절해 정확한 규칙을 검색한다.</p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "410ms" }}>
          <p className="font-semibold mb-1 text-primary">예시·반례</p>
          <p className="text-muted-foreground">경계를 양방향으로 고정. 추측을 줄인다.</p>
        </div>
      </div>

      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "490ms" }}>
        front matter는 구조화 데이터, markdown 본문은 맥락 — 둘을 함께 써야 AI가 값과 의도를 동시에 이해한다.
      </p>
    </section>
  </SectionShell>
));
S.displayName = "S32AiReadableFormat";
export default S;
