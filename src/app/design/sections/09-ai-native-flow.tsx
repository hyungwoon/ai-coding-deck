"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const STEPS = ["의도 · 문제 정의", "AI와 직접 빌드", "작동하는 결과물", "곧장 종착점으로"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-primary uppercase mb-3", anim(index))}>
      AI Native 워크플로
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      핸드오프를 건너뛰고, <span className="text-primary">직접 만든다</span>
    </h2>

    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {STEPS.map((s, i) => (
        <div key={s} className="flex items-center gap-2 sm:gap-3">
          <div
            className={cn("rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-medium", anim(index))}
            style={{ transitionDelay: `${150 + i * 100}ms` }}
          >
            {s}
          </div>
          {i < STEPS.length - 1 && (
            <span className={cn("text-primary/50", anim(index))} style={{ transitionDelay: `${200 + i * 100}ms` }}>→</span>
          )}
        </div>
      ))}
    </div>

    <div className={cn("mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "650ms" }}>
      <p className="text-lg leading-relaxed">
        &ldquo;코딩을 하면 <span className="text-foreground font-semibold">금속(metal)에 더 가까이</span> 붙는다. 70% 완성으로 돌려받는 피드백 루프가 없다. 곧장 종착점까지 가서 내 비전을 직접 만든다.&rdquo;
      </p>
      <p className="mt-3 text-sm text-muted-foreground">— Nick Inzucchi · Product Designer, Cursor</p>
    </div>

    <div className={cn("mt-4 rounded-xl border border-border bg-muted/40 p-5", anim(index))} style={{ transitionDelay: "750ms" }}>
      <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-2">풀어 쓰면</p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        <span className="text-foreground font-semibold">&ldquo;금속(metal)에 가깝다&rdquo;</span>는 엔지니어들이 쓰는 <span className="text-foreground font-medium">&ldquo;close to the metal&rdquo;</span>(베어 메탈)이라는 표현이다. 중간에 끼는 도구·번역·대리인 없이 <span className="text-foreground font-medium">기계와 직접 맞붙는다</span>는 뜻.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        디자이너가 직접 코딩하면, 그림을 그려 엔지니어에게 넘기고 <span className="text-foreground font-medium">70%만 구현된 결과물을 받아 다시 고치는 왕복</span>이 사라진다. 중간 단계를 건너뛰고 곧장 끝까지 가서, 내 의도를 100% 그대로 만든다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S09AiNativeFlow";
export default S;
