"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      전환축 ②
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      정적 목업에서 <span className="text-primary">작동하는 프로토타입</span>으로
    </h2>
    <p className={cn("mb-10 text-muted-foreground", anim(index))} style={{ transitionDelay: "100ms" }}>
      <span className="text-3xl font-bold text-primary align-middle">43%</span>
      <span className="ml-2 align-middle">— 작동 프로토타입을 &lsquo;기대되는 디자인 산출물&rsquo;로 본다</span>
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "200ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">정적 목업</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          화면 한 장. <span className="text-foreground">상태(state)와 엣지 케이스</span>를 보여주지 못한다.
        </p>
      </div>
      <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">작동 프로토타입</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          유저 플로의 상태·전환을 실제로 평가. <span className="text-foreground">연결 조직(connective tissue)</span>이 보인다.
        </p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S11MockupToPrototype";
export default S;
