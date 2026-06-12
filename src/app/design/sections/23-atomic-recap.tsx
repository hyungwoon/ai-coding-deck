"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const LAYERS = [
  { label: "Atoms", sub: "기본 요소", example: "Button · Input · Label · Icon · Badge", color: "text-primary", border: "border-primary/30", bg: "bg-primary/5" },
  { label: "Molecules", sub: "단순 결합", example: "Form field = Label + Input + Helper + Error", color: "text-foreground", border: "border-border/40", bg: "bg-card/40" },
  { label: "Organisms", sub: "복합 UI", example: "Header · Sidebar · Data table", color: "text-foreground", border: "border-border/40", bg: "bg-card/40" },
  { label: "Templates", sub: "레이아웃 와이어", example: "콘텐츠 없이 배치만 잡힌 페이지 골격", color: "text-muted-foreground", border: "border-border/30", bg: "bg-card/20" },
  { label: "Pages", sub: "실제 인스턴스", example: "실제 데이터가 채워진 완성 화면", color: "text-muted-foreground", border: "border-border/30", bg: "bg-card/20" },
] as const;

const DELAYS = ["0ms", "100ms", "180ms", "260ms", "340ms"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 3 · AI-Native Design · 배경
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Atomic Design — <span className="text-primary">5계층</span> 복습
    </h2>

    <div className="flex flex-col gap-2">
      {LAYERS.map((layer, i) => (
        <div
          key={layer.label}
          className={cn(
            "flex items-center gap-4 rounded-xl border px-5 py-3",
            layer.border,
            layer.bg,
            anim(index)
          )}
          style={{ transitionDelay: DELAYS[i] }}
        >
          <div className="w-28 shrink-0">
            <span className={cn("font-mono text-sm font-bold", layer.color)}>{layer.label}</span>
            <p className="text-xs text-muted-foreground">{layer.sub}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-snug">{layer.example}</p>
        </div>
      ))}
    </div>

    <p className={cn("mt-6 text-xs text-muted-foreground/70", anim(index))} style={{ transitionDelay: "440ms" }}>
      NMWC Product.md §05 — Atoms 20+종 · Molecules 20+종 · Organisms → 이 구조가 이미 문서화되어 있다.
    </p>
  </SectionShell>
));
S.displayName = "S23AtomicRecap";
export default S;
