"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const checks = [
  { no: "Q1", title: "숫자·인용마다 기관·조사명·연도가 붙어 있고, 원문 링크를 열어 확인했나" },
  { no: "Q2", title: "AI가 준 URL·논문·통계 중 원문에서 못 찾은 것이 남아 있지 않나" },
  { no: "Q3", title: "이미지에 술병·브랜드·건배·미성년·운전이 없나 (제약 블록 통과)" },
  { no: "Q4", title: "실존 인물을 닮은 얼굴이 없고, 참조로 실존 사진을 쓰지 않았나" },
  { no: "Q5", title: "이미지 속 한글·숫자·손가락을 눈으로 확인했나" },
  { no: "Q6", title: "AI 생성 표시와 출처 표기를 넣었나" },
  { no: "Q7", title: "만든 사람이 아닌 팀원이 검수했나" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Pre-publish Checklist
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      게시 전 <span className="text-muted-foreground">7문</span> 체크리스트
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      일곱 질문에 모두 예라고 답할 수 있을 때만 게시한다 — 하나라도 아니면 멈춘다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      {checks.map((c, i) => (
        <div key={c.no} className={cn("flex items-start gap-4 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm", i === 6 && "sm:col-span-2")}>
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{c.no}</span>
          <p className="text-sm font-semibold leading-snug">{c.title}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        Q1·Q2는 정확성, Q3·Q4·Q5는 장면, Q6·Q7은 책임 — <span className="text-primary">팀 게시 규칙으로 가져가세요</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S22Checklist";
export default S;
