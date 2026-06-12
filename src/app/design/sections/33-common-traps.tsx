"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const TRAPS = [
  {
    title: "산문 그대로 복붙",
    symptom: "\"버튼은 둥글고 따뜻한 느낌이어야 합니다\"",
    why: "구조가 없으면 AI는 전체를 문학으로 읽는다. 토큰과 규칙을 추출하지 못한다.",
    fix: "산문 → 헤딩·표·값으로 분해. 감성어는 rationale에 한 줄로 압축.",
  },
  {
    title: "과상세 (Over-specification)",
    symptom: "버튼 하나에 50줄 설명, 모든 픽셀 값 나열",
    why: "AI가 핵심 규칙을 노이즈 속에서 잃는다. 생성 품질이 오히려 낮아진다.",
    fix: "규칙당 3~5줄. 왜·언제·반례만. 픽셀은 토큰으로 위임.",
  },
  {
    title: "모호한 rationale",
    symptom: "\"일관성을 위해 이 색을 씁니다\"",
    why: "AI에게 '일관성'은 빈 단어다. 어느 맥락에서 일관해야 하는지 모른다.",
    fix: "\"경쟁사 대비 고채도로 에너지를 표현, 신뢰 업종이라 채도 상한 60%\" 처럼 구체적으로.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 4 · 흔한 함정
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      DESIGN.md가 <span className="text-destructive">작동하지 않는</span> 3가지 이유
    </h2>

    <div className="space-y-4">
      {TRAPS.map((trap, i) => (
        <div
          key={trap.title}
          className={cn("rounded-2xl border border-destructive/20 bg-destructive/5 p-5", anim(index))}
          style={{ transitionDelay: `${150 + i * 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <span className="font-mono text-xs text-destructive mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <p className="font-bold text-destructive mb-1">{trap.title}</p>
              <p className="font-mono text-xs text-muted-foreground/80 bg-card/60 rounded px-2 py-1 mb-2 truncate">
                예: {trap.symptom}
              </p>
              <p className="text-sm text-muted-foreground mb-1">{trap.why}</p>
              <p className="text-sm text-foreground">
                <span className="text-primary font-semibold">수정: </span>{trap.fix}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S33CommonTraps";
export default S;
