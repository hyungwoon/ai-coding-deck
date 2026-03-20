"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S07rRecap1 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("text-sm font-bold text-primary tracking-widest uppercase mb-4", anim(index))}>
      Part 1 Recap
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      파트 1 요약
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "120ms" }}>
      {[
        { title: "LLM 원리", items: ["다음 단어 확률 예측", "벡터 + 어텐션", "프롬프트가 품질을 결정", "출력은 항상 검증"] },
        { title: "에이전트 & GitHub", items: ["LLM + 도구 = 에이전트", "자율 실행 루프", "커밋 = 세이브포인트", "브랜치 = 안전한 실험"] },
        { title: "개발 구조 & 연결", items: ["프론트 · 백엔드 · DB", "API = 메뉴판", "CLI = 리모컨", "MCP = 만능 어댑터"] },
      ].map((col) => (
        <div key={col.title} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-bold mb-3">{col.title}</p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            {col.items.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionShell>
));

S07rRecap1.displayName = "S07rRecap1";
export default S07rRecap1;
