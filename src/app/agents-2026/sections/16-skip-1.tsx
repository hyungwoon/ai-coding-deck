"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const items = [
  { name: "AutoGen / AG2", scope: "프로덕션용", reason: "Microsoft 프레임워크가 커뮤니티 maintenance로 이동, 릴리즈 정체, 추상화가 프로덕션 팀 needs와 안 맞음. 학술 탐구는 OK." },
  { name: "CrewAI", scope: "새 프로덕션 빌드", reason: "데모가 쉬워서 어디나 있음. 진짜 시스템 빌더는 떠남. 프로토타입은 OK." },
  { name: "Microsoft Semantic Kernel", scope: "기본", reason: "MS 엔터프라이즈 스택에 lock되어 있고 바이어가 그걸 신경 쓰는 게 아니라면 NO. 생태계 방향이 아님." },
  { name: "DSPy", scope: "일반 에이전트 프레임워크로", reason: "프롬프트 프로그램을 스케일로 최적화하는 게 아니면 NO. 철학적 가치 있음, niche 청중." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Skip List ① · 프레임워크
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      배우지 마라, 만들지 마라
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      너에게 다 배우라고 할 거다. 그럴 필요 없다. 스킵 비용은 낮고, 절약 시간은 크다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {items.map((it) => (
        <div key={it.name} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-destructive shrink-0">✗</span>
            <div>
              <p className="text-base font-bold">{it.name}</p>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{it.scope}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{it.reason}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S16Skip1";
export default S;
