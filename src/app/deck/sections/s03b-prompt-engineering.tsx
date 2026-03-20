"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S03bPromptEngineering = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      프롬프트 엔지니어링과 검증
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      같은 AI, 다른 결과 — 어떻게 묻느냐가 전부다
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6", anim(index))} style={{ transitionDelay: "120ms" }}>
      {[
        { num: "1", title: "역할 부여", desc: "\"너는 시니어 마케터야\"" },
        { num: "2", title: "구체적 맥락", desc: "제약 조건이 명확할수록 정확" },
        { num: "3", title: "예시 제공", desc: "Few-shot — 말보다 예시 하나" },
        { num: "4", title: "단계 분해", desc: "Chain of Thought" },
        { num: "5", title: "출력 형식", desc: "\"표로 정리해줘\"" },
      ].map((item) => (
        <div key={item.num} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm text-center">
          <p className="text-2xl font-black text-primary mb-1">{item.num}</p>
          <p className="text-sm font-bold mb-1">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 shadow-sm", anim(index))} style={{ transitionDelay: "200ms" }}>
      <p className="text-sm font-bold text-amber-400 mb-2">검증 습관 3가지</p>
      <ul className="text-sm text-muted-foreground space-y-1">
        <li>• &quot;출처가 뭐야?&quot; — 중요한 사실은 반드시 근거 요구</li>
        <li>• 같은 질문을 다르게 다시 — 답이 매번 달라지면 지어낸 것</li>
        <li>• 숫자·날짜·법률·의학 — 반드시 원본 출처에서 확인</li>
      </ul>
    </div>
  </SectionShell>
));

S03bPromptEngineering.displayName = "S03bPromptEngineering";
export default S03bPromptEngineering;
