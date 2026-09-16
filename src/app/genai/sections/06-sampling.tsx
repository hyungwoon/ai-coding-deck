"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const candidates = [
  { word: "바다를", low: 78, high: 34 },
  { word: "하늘을", low: 12, high: 24 },
  { word: "도시를", low: 6, high: 19 },
  { word: "기억을", low: 3, high: 14 },
  { word: "침묵을", low: 1, high: 9 },
];

const points = [
  { no: "01", title: "온도(temperature)는 분포의 뾰족함", desc: "낮추면 늘 1등만 뽑아 안전하고 뻔해진다. 올리면 뒤쪽 후보도 뽑혀 새롭지만 엉뚱해진다." },
  { no: "02", title: "시드는 「어디를 뽑을지」의 출발점", desc: "같은 조건 + 같은 시드 = 같은 결과. 재현과 A/B 비교가 가능해지는 유일한 손잡이다." },
  { no: "03", title: "학습 목표가 「참」이 아니라 「그럴듯함」", desc: "확률이 높은 말과 사실인 말은 다르다. 그래서 없는 논문·통계·인용을 유창하게 만든다 — 유창함은 정확함의 증거가 아니다." },
  { no: "04", title: "그러니 다시 굴리기는 실패가 아니다", desc: "한 번의 출력은 분포에서 뽑은 표본 하나일 뿐. 결과가 아쉬우면 문장을 고치기 전에 표본을 몇 개 더 뽑아 본다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · LLM · 04 Sampling
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      매번 다른 이유, <span className="text-muted-foreground">자신 있게 틀리는 이유</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">NEXT TOKEN · 개념도(실제 확률 아님)</p>
      <p className="text-xl sm:text-2xl font-semibold mb-5">그는 오래도록 <span className="border-b-2 border-primary/60 px-2 text-muted-foreground">____</span> 바라보았다</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {[["온도 낮음 · 뾰족", "low"], ["온도 높음 · 평평", "high"]].map(([label, key]) => (
          <div key={key}>
            <p className="font-mono text-[10px] text-muted-foreground mb-2">{label}</p>
            <div className="space-y-1.5">
              {candidates.map((c) => {
                const v = key === "low" ? c.low : c.high;
                return (
                  <div key={c.word} className="flex items-center gap-2">
                    <span className="w-14 shrink-0 text-xs font-semibold">{c.word}</span>
                    <span className="h-2 rounded-full bg-primary/70" style={{ width: `${v * 1.8}px` }} />
                    <span className="font-mono text-[10px] text-muted-foreground">{v}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      {points.map((p) => (
        <div key={p.no} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{p.no}</span>
          <div>
            <p className="text-sm font-semibold leading-snug mb-1">{p.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S06Sampling";
export default S;
