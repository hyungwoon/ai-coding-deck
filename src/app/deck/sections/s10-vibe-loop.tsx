"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const phases = [
  { num: "1", label: "준비", note: "CLAUDE.md 작성\n공식 문서 등록\n스킬 파일 세팅", star: false },
  { num: "2★", label: "플래닝", note: "요구사항 구체화\n단계 분해 (think)\n엣지케이스 정의", star: true },
  { num: "3", label: "플랜 점검", note: "플랜 출력 요청\n방향 맞는지 확인\n수정 후 재확인", star: false },
  { num: "4", label: "구현", note: "AI가 코드 작성\n서브 에이전트 위임\n나는 지켜보기", star: false },
  { num: "5↺", label: "점검·개선", note: "의도대로 됐는지\n문서 업데이트\n→ PHASE 2 반복", star: false },
];

const tips = [
  { title: "공식 문서를 컨텍스트에", desc: "Claude Code 공식 docs를 CLAUDE.md에 링크하거나 직접 붙여넣으면 hallucination이 줄고 정확도가 올라간다." },
  { title: "플래닝엔 think / ultrathink", desc: '"think"나 "ultrathink"를 프롬프트에 포함하면 Claude가 실행 전에 더 깊게 추론한다. 복잡한 태스크일수록 효과적.' },
  { title: "문서 업데이트를 루틴으로", desc: "구현 후 CLAUDE.md·README를 항상 업데이트. 다음 세션의 Claude가 이걸 읽고 시작하기 때문에 맥락이 누적된다." },
];

const S10VibeLoop = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      바이브 코딩 루프
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      플래닝이 90%다 — 구현은 AI가 한다
    </p>

    <div className={cn("grid grid-cols-2 sm:grid-cols-5 gap-0 mb-6 rounded-2xl overflow-hidden border border-border/40", anim(index))} style={{ transitionDelay: "120ms" }}>
      {phases.map((p, i) => (
        <div
          key={p.num}
          className={cn(
            "p-4 flex flex-col gap-1",
            i < phases.length - 1 && "border-r border-border/30",
            p.star ? "bg-primary/5" : "bg-card/80",
          )}
        >
          <span className={cn("font-mono text-sm font-semibold", p.star ? "text-primary" : "text-muted-foreground/60")}>
            PHASE {p.num}
          </span>
          <span className={cn("text-sm font-semibold", p.star ? "text-primary" : "")}>{p.label}</span>
          <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line mt-1">{p.note}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "200ms" }}>
      {tips.map((t) => (
        <div key={t.title} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-semibold text-primary mb-1">{t.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S10VibeLoop.displayName = "S10VibeLoop";
export default S10VibeLoop;
