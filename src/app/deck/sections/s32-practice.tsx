"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S32Practice = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      실습 과제
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      딱 하나만 고르세요. 그리고 오늘 해보세요.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", anim(index))} style={{ transitionDelay: "120ms" }}>
      {[
        { num: "1", title: "프롬프트 비교 실험", desc: "같은 질문을 두 가지 방식으로 — 하나는 그냥, 하나는 역할+맥락+형식 지정. 차이를 직접 체감.", time: "10분" },
        { num: "2", title: "CLAUDE.md 초안 작성", desc: "내 역할, 현재 프로젝트, 자주 쓰는 용어, 선호하는 작업 방식. 완벽하지 않아도 OK.", time: "30분" },
        { num: "3", title: "미니 온톨로지", desc: "내 업무의 개체 3개, 관계 3개, 속성 3개, 규칙 3개. 노트앱이든 종이든 상관없음.", time: "20분" },
        { num: "4", title: "보안 점검", desc: "AI에 넣고 있는 데이터 중 민감 정보 확인. 사용 중인 AI 서비스 데이터 정책 1회 읽기.", time: "15분" },
      ].map((task) => (
        <div key={task.num} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-black">{task.num}</span>
            <p className="text-sm font-bold">{task.title}</p>
            <span className="ml-auto text-xs text-muted-foreground">{task.time}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{task.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));

S32Practice.displayName = "S32Practice";
export default S32Practice;
