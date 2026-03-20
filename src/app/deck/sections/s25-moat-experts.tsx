"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const experts = [
  {
    source: "Sequoia · a16z (VC)",
    title: "네트워크 효과 + 독점 데이터",
    desc: "AI 래퍼(Wrapper)는 해자가 없다. 진짜 해자는 남이 접근 못하는 데이터와 네트워크 효과. 사용자가 쌓아준 데이터가 모델을 개선하는 선순환.",
  },
  {
    source: "Peter Thiel (Zero to One)",
    title: "독점 — 경쟁하지 않는 것",
    desc: "경쟁은 가치를 파괴한다. 해자는 독점적 기술, 규모의 경제, 강력한 브랜드에서 나온다. AI로 무엇을 독점할 것인가가 질문이어야 한다.",
  },
  {
    source: "Marc Andreessen (a16z)",
    title: "배포 능력 · Go-to-Market",
    desc: "좋은 AI를 만드는 것보다 고객에게 빠르게 연결하는 유통·영업·관계망이 해자. 기술이 평준화될수록 배포 능력의 격차가 승패를 가른다.",
  },
  {
    source: "Sam Altman (OpenAI)",
    title: "신뢰 · 관계 자산",
    desc: "AGI 수준에 가까워질수록 대부분의 기술 해자는 무너진다. 그때 남는 것은 신뢰(Trust)와 관계. 브랜드와 평판이 마지막 해자가 된다.",
  },
];

const SlideMoatExperts = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        09 · 전문가 시각
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
        전문가들의 시각
      </h2>
      <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
        VC · 학계 · 빌더들의 시각 — 비판적으로 함께 읽기
      </p>

      {/* 2x2 grid */}
      <div className={cn("grid grid-cols-2 gap-4 mb-4", anim(index))} style={{ transitionDelay: "140ms" }}>
        {experts.map(({ source, title, desc }) => (
          <div key={source} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-2">{source}</p>
            <p className="text-sm font-semibold text-primary mb-2">{title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* 종합 */}
      <div className={cn("rounded-2xl border border-primary/20 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "240ms" }}>
        <p className="text-xs font-semibold text-primary mb-2">종합하면</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          전문가들이 공통으로 동의하는 것은 하나 —{" "}
          <span className="text-foreground font-medium">AI 능력 자체는 해자가 아니다.</span>{" "}
          해자는 AI 위에서 쌓이는 것들: 독점 데이터, 네트워크 효과, 배포 능력, 신뢰.
          문제 정의는 전문가 모두가 동의하는 가장 확실한 해자 — AI 이전에도, 이후에도.
        </p>
      </div>
    </div>
  </SectionShell>
));
SlideMoatExperts.displayName = "SlideMoatExperts";
export default SlideMoatExperts;
