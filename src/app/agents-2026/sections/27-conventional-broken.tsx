"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const facts = [
  { label: "일하고 싶은 회사", age: "6개월" },
  { label: "그게 빌드된 프레임워크", age: "18개월" },
  { label: "그 아래 프로토콜", age: "2년" },
  { label: "가장 인용되는 포스트의 절반", age: "3년 전 이 필드에 없던 사람이 씀" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 8 · The Unconventional Bet
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      사다리가 없다
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      빌딩이 계속 층을 바꾸니까.
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">컨벤셔널 패스의 전제</p>
      <p className="text-base leading-relaxed mb-2">
        스택 마스터 → 사다리 등반. 학교 → 학위 → 주니어 → 시니어 → 스태프. 천천히 자격증을 쌓아 문이 열린다.
      </p>
      <p className="text-sm text-muted-foreground">
        → 스택이 10년 안정될 때만 작동. 그 기계 전체가 <span className="text-foreground font-semibold">반대편의 안정된 산업</span>을 가정했다.
      </p>
    </div>

    <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-6 mb-6", anim(index))} style={{ transitionDelay: "260ms" }}>
      <p className="font-mono text-xs text-destructive uppercase tracking-widest mb-4">에이전트 공간의 현실</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {facts.map((f) => (
          <div key={f.label} className="flex items-baseline gap-3">
            <span className="text-sm text-muted-foreground">{f.label}</span>
            <span className="text-base font-bold">{f.age}</span>
          </div>
        ))}
      </div>
    </div>

    <p className={cn("text-xl sm:text-2xl font-semibold text-center", anim(index))} style={{ transitionDelay: "380ms" }}>
      안정된 반대편이 없다. <span className="text-muted-foreground">→ 자격증이 복리로 쌓일 곳이 없다.</span>
    </p>
  </SectionShell>
));
S.displayName = "S27ConventionalBroken";
export default S;
