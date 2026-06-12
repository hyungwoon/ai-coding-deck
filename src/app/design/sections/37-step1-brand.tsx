"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const CHECKS = [
  "brand.md 파일 생성 완료",
  "로고 경로 또는 SVG 참조 포함",
  "핵심 색 3개 이상 이름+값 기록",
  "타이포 규칙 1줄 이상 기록",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      STEP 1 · brand.md
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      시각 아이덴티티를 AI가 읽는 파일로
    </h2>
    <p className={cn("text-muted-foreground mb-6 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      로고·색·타이포를 산문이 아닌 규칙으로 적는다. AI는 규칙 파일을 읽고 일관되게 따른다.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          ① 강사 시연 — NMWC brand.md (발췌)
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-foreground/90">
{`# brand.md

## Logo
- Wordmark: "NMWC" 또는 "No More Work (for) Company"
- SVG: assets/logo.svg

## Colors
- --canvas: #090909   (배경)
- --accent-blue: #0099ff (강조)
- --ink: #ffffff       (본문)
- --ink-muted: #999999 (보조)

## Typography
- Body: SUIT Variable, --fs-body (15px)
- Display: --fs-display-lg (62px)
- Heading: --fs-headline (22px)`}
        </pre>
      </div>

      <div className={cn("rounded-2xl border border-primary/30 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "250ms" }}>
        <div className="border-b border-primary/20 px-4 py-2 font-mono text-xs text-primary">
          ② 당신 차례 — 내 brand.md 작성
        </div>
        <div className="p-4 space-y-3 text-sm">
          <p className="text-muted-foreground">내 프로젝트의 로고, 핵심 색, 폰트를 같은 구조로 채운다.</p>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>• <span className="text-foreground">로고</span>: 파일 경로 또는 URL</p>
            <p>• <span className="text-foreground">색</span>: 이름 + hex + 쓰임새</p>
            <p>• <span className="text-foreground">폰트</span>: 패밀리 + 쓰임새</p>
          </div>
          <p className="text-muted-foreground/60 text-xs">아직 토큰이 없으면 hex 직접 적어도 OK. 나중에 변수로 바꾼다.</p>
        </div>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-card/80 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">체크포인트 — STEP 1 완료 기준</p>
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
S.displayName = "S37Step1Brand";
export default S;
