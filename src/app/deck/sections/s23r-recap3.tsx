"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S23rRecap3 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("text-sm font-bold text-primary tracking-widest uppercase mb-4", anim(index))}>
      Part 3 Recap
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      파트 3 요약
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "120ms" }}>
      {[
        { title: "멀티모달 & 온톨로지", items: ["이미지·PDF·스크린샷 입력", "온톨로지 = 지식의 지도", "개체·관계·속성·규칙", "구조화가 AI 품질 결정"] },
        { title: "RAG & Obsidian & 보안", items: ["검색 + 생성 = RAG", "Obsidian = 로컬 RAG 저장소", "양방향 링크 = 자연스러운 온톨로지", "민감 정보 구분 필수"] },
        { title: "RLVR & 차별화", items: ["모델 능력 상향 평준화", "같은 모델, 다른 온톨로지 = 격차", "복리 효과 — 일찍 시작이 유리", "피드백 루프가 핵심"] },
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

S23rRecap3.displayName = "S23rRecap3";
export default S23rRecap3;
