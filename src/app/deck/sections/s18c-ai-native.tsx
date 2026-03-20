"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S18cAiNative = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      암묵지를 안 만드는 것
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      가장 좋은 온톨로지 전략은 암묵지가 생기지 않게 하는 것이다
    </p>

    {/* 핵심 전환 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "120ms" }}>
      <p className="text-sm font-bold mb-3">암묵지를 꺼내는 것보다, 처음부터 안 만드는 게 낫다</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        모든 일을 AI를 통해 하면, 과정과 판단이 자동으로 기록됩니다.
        AI에게 지시하는 순간 암묵지가 명시지가 됩니다.
        별도로 정리할 필요 없이, 일하는 것 자체가 온톨로지 구축이 됩니다.
      </p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">머릿속에서 판단</span>
        <span className="text-muted-foreground/30">&rarr;</span>
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">AI에게 지시</span>
        <span className="text-muted-foreground/30">&rarr;</span>
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">자동으로 기록</span>
        <span className="text-muted-foreground/30">=</span>
        <span className="rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5 font-medium text-foreground/80">암묵지 발생 차단</span>
      </div>
    </div>

    {/* 심리적 허들 */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-2">심리적 허들</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          &quot;그래도 이건 사람이 해야지&quot;<br />
          &quot;이건 감각의 영역이야&quot;<br />
          &quot;AI가 이걸 어떻게 해&quot;
        </p>
        <p className="text-sm text-muted-foreground/50 mt-3">
          처음엔 누구나 이렇게 생각합니다.
        </p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-2">해보면 바뀌는 생각</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          &quot;이걸 왜 사람이 해야 하지?&quot;<br />
          &quot;내가 판단만 하면 실행은 AI가 하네&quot;<br />
          &quot;오히려 AI가 빠뜨리는 걸 덜 빠뜨리네&quot;
        </p>
        <p className="text-sm text-muted-foreground/50 mt-3">
          한 번만 해보면 돌아가기 어렵습니다.
        </p>
      </div>
    </div>

    {/* AI Native */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="text-sm font-bold mb-3">AI Native = 모든 일을 AI로 하는 것이 자연스러운 상태</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
        <div className="rounded-lg border border-border/40 bg-muted/20 p-3">
          <p className="font-semibold text-foreground/80 mb-1">과거</p>
          <p>모든 일을 손으로 했다</p>
        </div>
        <div className="rounded-lg border border-border/40 bg-muted/20 p-3">
          <p className="font-semibold text-foreground/80 mb-1">현재</p>
          <p>모든 일을 컴퓨터로 한다</p>
        </div>
        <div className="rounded-lg border border-border/40 bg-muted/20 p-3">
          <p className="font-semibold text-foreground/80 mb-1">다음</p>
          <p>모든 일을 AI로 한다</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        컴퓨터 없이 일하는 게 상상이 안 되듯, AI 없이 일하는 것도 곧 그렇게 됩니다. 그때 자연스러운 사람이 AI Native입니다.
      </p>
    </div>
  </SectionShell>
));

S18cAiNative.displayName = "S18cAiNative";
export default S18cAiNative;
