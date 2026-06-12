"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      문제 정의
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      AI는 Figma를 <span className="text-primary">읽지 못한다</span>
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-border/40 bg-card/40 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">사람 눈</p>
        <div className="space-y-3">
          <div className="h-4 w-3/4 rounded bg-primary/20" />
          <div className="h-4 w-1/2 rounded bg-primary/10" />
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-20 rounded-lg bg-primary/30" />
            <div className="h-8 w-16 rounded-lg bg-border/40" />
          </div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
          레이어·컴포넌트·오토레이아웃을{" "}
          <span className="text-foreground">시각적으로 해석</span>한다.
        </p>
      </div>

      <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">AI 입력</p>
        <div className="rounded-lg border border-border/40 bg-card/80 p-3">
          <p className="font-mono text-xs text-foreground/70 leading-relaxed">
            {`{ "type": "FRAME",\n  "fills": [...],\n  "children": [...]\n}`}
          </p>
        </div>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
          AI에게 디자인은{" "}
          <span className="text-foreground font-medium">텍스트여야 한다.</span>{" "}
          JSON 트리는 의미가 없다. 의도와 이유가 담긴 언어가 필요하다.
        </p>
      </div>
    </div>

    <div className={cn("mt-8 border-l-2 border-primary/40 pl-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="text-base leading-relaxed text-muted-foreground">
        Figma는 사람을 위한 도구다. AI에게 DS를 이해시키려면{" "}
        <span className="text-foreground font-medium">사람과 AI가 함께 읽을 수 있는 포맷</span>이 필요하다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S17AiCantReadFigma";
export default S;
