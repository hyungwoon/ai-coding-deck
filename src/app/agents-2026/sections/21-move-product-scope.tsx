"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const product = [
  "예측 못 한 방식으로 실패할 거다",
  "그 실패가 너의 로드맵",
  "진짜 프로덕션 트레이스에서 regression set 빌드",
  "모든 prompt/model/tool 변경은 deploy 전 eval 통과",
];

const scope = [
  { trigger: "컨텍스트가 병목일 때", add: "Subagent" },
  { trigger: "Single-window context가 못 담을 때", add: "Memory framework" },
  { trigger: "진짜 underlying API가 없을 때", add: "Computer use / browser use" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · How to Move ④⑤ · Product · Scope
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      에이전트를 제품으로, Scope는 자격 얻은 만큼만
    </h2>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">④ 프로젝트 X · 제품 ✓</p>
      <ul className="text-sm leading-relaxed space-y-1.5">
        {product.map((p) => <li key={p}>• {p}</li>)}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">
        대부분 팀이 underinvest하는 곳. 대부분 신뢰성이 나오는 곳.
      </p>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 mb-4", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">⑤ Scope는 실패 모드가 pull할 때만</p>
      <div className="space-y-2">
        {scope.map((s) => (
          <div key={s.trigger} className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground flex-1">{s.trigger}</span>
            <span className="font-mono text-muted-foreground/40">→</span>
            <span className="font-semibold w-44 text-right">{s.add}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="text-sm">
        🚫 <span className="font-semibold">Pre-architect 금지.</span>{" "}
        <span className="text-muted-foreground">실패 모드가 pull하게 둬라 — 고통을 느끼기 전에 짓는 건 필요 없는 복잡도를 ship하는 것.</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S21MoveProductScope";
export default S;
