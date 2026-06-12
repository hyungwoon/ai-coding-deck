"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      전환축 ③ · 빛과 그림자
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      디자이너에서 <span className="text-primary">빌더</span>로
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">빛</p>
        <p className="text-xl font-bold mb-2">2배 더 창의적·유능</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          빌드하는 디자이너는 일에서 더 창의적이고 유능하다고 느낄 확률이 2배. 더 높은 품질 기준에 직접 닿는다.
        </p>
      </div>
      <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-destructive mb-2">그림자</p>
        <p className="text-xl font-bold mb-2">크래프트 위축 · 외로움</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          craft atrophy 우려, 협업 감소(20% — 2025년의 4배). 속도가 아이디어 숙성 시간을 갉아먹는다.
        </p>
      </div>
    </div>

    <p className={cn("mt-6 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "350ms" }}>
      80%의 디자이너는 여전히 <span className="text-foreground font-medium">취향·판단·유저 이해</span>를 AI보다 자신에게 둔다. AI는 &lsquo;관점 증폭기&rsquo;다.
    </p>
  </SectionShell>
));
S.displayName = "S12DesignerToBuilder";
export default S;
