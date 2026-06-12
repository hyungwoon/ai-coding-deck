"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const CHECKS = [
  "bx.md 파일 생성 완료",
  "브랜드 퍼소나 1줄 정의",
  "Use 단어 3개 이상 기록",
  "Avoid 단어 3개 이상 기록",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} data-code-slide>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      STEP 2 · bx.md
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      보이스·톤을 규칙으로
    </h2>
    <p className={cn("text-muted-foreground mb-4 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      "우리 브랜드는 친근해요"는 AI가 적용 못 한다. Use/Avoid 단어 목록은 즉시 적용된다.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          ① 강사 시연 — NMWC bx.md (발췌)
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs leading-snug text-foreground/90">
{`# bx.md — Voice & Tone

## Persona
Direct, not Corporate.
Confident, not Arrogant.
Builder's language, not Manager's.

## Tagline
Build Your SILO.

## Use (동사 중심 · 오늘의)
- 만든다, 빌드한다, 연결한다
- 지금, 오늘, 직접

## Avoid
- solution (솔루션)
- innovation (혁신)
- future (미래)`}
        </pre>
      </div>

      <div className={cn("rounded-2xl border border-primary/30 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "250ms" }}>
        <div className="border-b border-primary/20 px-4 py-2 font-mono text-xs text-primary">
          ② 당신 차례 — 내 bx.md 작성
        </div>
        <div className="p-4 space-y-3 text-sm">
          <p className="text-muted-foreground">내 브랜드의 퍼소나를 형용사 3개로 정의한다. 그다음 Use/Avoid를 채운다.</p>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>• <span className="text-foreground">Persona</span>: "A, not B" 형식이 명확하다</p>
            <p>• <span className="text-foreground">Use</span>: 실제로 쓰는 단어·표현</p>
            <p>• <span className="text-foreground">Avoid</span>: 기존에 잘못 써온 단어</p>
          </div>
          <p className="text-muted-foreground/60 text-xs">카피라이터가 없어도 OK. 지금 본능적으로 느끼는 것을 적는다.</p>
        </div>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-card/80 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">체크포인트 — STEP 2 완료 기준</p>
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
S.displayName = "S38Step2Bx";
export default S;
