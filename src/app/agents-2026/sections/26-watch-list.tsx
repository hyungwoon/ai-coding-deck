"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const items = [
  { what: "Replit Agent 4 parallel forking", decide: "스케일에서 holds up하면 → orchestrator-subagent default 시프트" },
  { what: "Outcome-based pricing 성숙도", decide: "Sierra·Harvey가 vertical 안에선 검증. Vertical 밖으로 일반화되나?" },
  { what: "AGENTS.md / Skills 패키징 레이어", decide: "MCP가 툴에 한 것처럼 표준화될지가 열린 질문" },
  { what: "Claude Code 47% 회귀 + 포스트모템", decide: "리더에서조차 online eval 미성숙. 업계 차원 better online eval 투자 driving?" },
  { what: "Voice as default support surface", decide: "Sierra voice가 텍스트 추월 (2025말). 다른 vertical로 패턴 holds → 아키텍처 rework" },
  { what: "Open-model agent capability 격차", decide: "DeepSeek-V3.2 / Qwen 3.6. Closed-source default는 영구하지 않음" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 7 · Watch List (다음 2분기)
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      &ldquo;이게 신호인가&rdquo; 미해결 6가지
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      각 항목엔 &ldquo;6개월 뒤 뭘 봐야 믿나?&rdquo; 답이 있다 — 발표 말고 답을 추적.
    </p>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {items.map((it) => (
        <div key={it.what} className="rounded-2xl border border-border/40 bg-card/80 p-4 flex flex-col sm:flex-row gap-3 sm:items-start backdrop-blur-sm">
          <p className="text-base font-semibold sm:w-1/3 shrink-0">{it.what}</p>
          <p className="text-sm text-muted-foreground leading-relaxed sm:flex-1">{it.decide}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S26WatchList";
export default S;
