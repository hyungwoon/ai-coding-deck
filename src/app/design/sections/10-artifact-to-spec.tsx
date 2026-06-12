"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      전환축 ①
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      산출물(Artifact)에서 <span className="text-primary">명세(Spec)</span>로
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Artifact · 산출물</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          디자인 = 만들어낸 화면. <span className="text-foreground">예쁜 목업이 결과물</span>이었다.
        </p>
      </div>
      <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Spec · 명세</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          디자인 = 무엇이 어떻게 존재해야 하는지의 명세. <span className="text-foreground">화면은 AI가 만든다.</span>
        </p>
      </div>
    </div>

    <div className={cn("mt-8 border-l-2 border-primary/40 pl-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="text-lg leading-relaxed">
        &ldquo;<span className="font-semibold">Output isn&rsquo;t design.</span> 디자인의 어려운 부분은 형태를 생성하는 게 아니라, 그것이 애초에 무엇으로, 어떻게 존재해야 하는지 알 만큼 문제를 이해하는 것이다.&rdquo;
      </p>
      <p className="mt-2 text-sm text-muted-foreground">— Karri Saarinen · Co-founder &amp; CEO, Linear</p>
    </div>
  </SectionShell>
));
S.displayName = "S10ArtifactToSpec";
export default S;
