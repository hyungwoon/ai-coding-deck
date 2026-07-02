"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const missions = [
  {
    no: "01",
    badge: "모니터링",
    title: "이번 달 모니터링 1건을 T4로 분해해보기",
    desc: "월 1회 모니터링에 바로 적용 — 판정 근거를 가이드라인 수칙으로 정리합니다.",
  },
  {
    no: "02",
    badge: "콘텐츠",
    title: "팀 카드뉴스 1건의 초안을 T3로 시작해보기",
    desc: "8장 구성을 AI 초안으로 받고, 검증과 다듬기는 팀이 합니다.",
  },
  {
    no: "03",
    badge: "팀 규칙",
    title: "게시 전 5문 체크리스트를 팀 게시 규칙으로 채택하기",
    desc: "개인의 습관이 아니라 팀의 규칙이 될 때 검증이 유지됩니다.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Mission
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      다음 한 달 미션
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {missions.map((m) => (
        <div key={m.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2">
            <p className="font-mono text-xs text-muted-foreground">{m.no}</p>
            <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs">{m.badge}</span>
          </div>
          <p className="text-lg font-semibold leading-snug mb-2">{m.title}</p>
          <p className="text-sm text-muted-foreground">{m.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">강의는 오늘 끝나지만,</p>
      <p className="text-xl sm:text-2xl font-bold">
        템플릿은 <span className="text-primary">활동이 끝날 때까지</span> 남습니다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S28OneMonthMission";
export default S;
