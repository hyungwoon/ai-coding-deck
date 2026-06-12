"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tactics = [
  { t: "능동적 요약·압축·prune", d: "스텝마다 필요 없는 토큰을 잘라낸다" },
  { t: "툴 description 버전 관리", d: "프롬프트처럼 시간을 들여 진화시킨다" },
  { t: "Static 캐시, dynamic 캐시 거부", d: "변하는 것을 캐시하면 stale 노이즈가 된다" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Context Engineering · Context Rot
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      Context Rot은 진짜 실패 모드
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      10스텝 태스크의 8스텝쯤이면 원래 목표가 툴 출력 밑에 묻힌다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {tactics.map((x) => (
        <div key={x.t} className="rounded-2xl border border-border/40 bg-card/80 p-5 backdrop-blur-sm">
          <p className="text-sm font-semibold mb-2">{x.t}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{x.d}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-muted/20 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">체감해보는 법</p>
      <ol className="text-sm text-muted-foreground leading-relaxed space-y-1 list-decimal list-inside">
        <li>프로덕션 에이전트 풀 트레이스 로깅을 켠다</li>
        <li>스텝 1 vs 스텝 7의 컨텍스트를 본다</li>
        <li>밥값 하는 토큰을 센다 — 처음엔 부끄럽다</li>
        <li>고치면 모델·프롬프트 변경 없이 신뢰성이 점프한다</li>
      </ol>
      <p className="mt-4 text-xs text-muted-foreground">
        📖 Anthropic — <span className="text-foreground">Effective Context Engineering for AI Agents</span> + multi-agent research postmortem
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S05ContextRot";
export default S;
