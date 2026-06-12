"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const items = [
  { name: "SWE-bench / OSWorld 리더보드 추격", reason: "Berkeley 2025: 거의 모든 공개 벤치마크가 실제 태스크 해결 없이 게임 가능. 진짜 신호 = Terminal-Bench 2.0 + 자체 internal eval. 단일 숫자 도약은 default 회의로 다뤄라." },
  { name: "Naïve 병렬 멀티에이전트 아키텍처", reason: "5개 에이전트가 공유 메모리에서 채팅 → 데모는 인상적, 프로덕션 무너짐. 냅킨에 read/write boundary 있는 깔끔한 orchestrator-subagent 다이어그램 못 그리면, ship 금지." },
  { name: "Per-seat SaaS 가격 (새 에이전트 제품)", reason: "시장은 outcome / usage 기반으로 이동. Per-seat은 돈 남기고, 자기 제품 outcome 못 믿는다는 시그널." },
  { name: "이번 주 HN의 다음 프레임워크", reason: "6개월 기다려라. 여전히 의미 있으면 명백할 거다. 아니면 마이그레이션 절약." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Skip List ③ · 추격하지 마라
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      벤치마크·아키텍처·가격·런칭
    </h2>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {items.map((it) => (
        <div key={it.name} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 flex gap-3">
          <span className="text-destructive shrink-0 mt-0.5">✗</span>
          <div>
            <p className="text-base font-bold mb-1">{it.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.reason}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S18Skip3";
export default S;
