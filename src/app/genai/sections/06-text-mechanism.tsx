"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const candidates = [
  { word: "건강을", p: 42 },
  { word: "간을", p: 18 },
  { word: "뇌를", p: 9 },
  { word: "당신을", p: 6 },
  { word: "가족을", p: 4 },
];

const points = [
  { no: "01", title: "학습 목표는 「참」이 아니라 「자연스러움」", desc: "학습 데이터에 참·거짓 라벨은 없다. 모델은 다음에 올 확률이 가장 높은 말을 만드는 장치다." },
  { no: "02", title: "그래서 자신 있게 틀린다 = 환각", desc: "존재하지 않는 논문·통계·기관명도 유창하게 만든다. 유창함은 정확함의 증거가 아니다." },
  { no: "03", title: "검색 모드는 「답 전에 문서를 찾아 붙이는」 것", desc: "RAG·웹 검색을 켜면 근거 문서에 답을 접지시킨다. 그래서 출처 링크가 생기고, 그 링크를 클릭해야 한다." },
  { no: "04", title: "모르는 것 = 창 밖의 것", desc: "학습 이후의 수치, 내부 자료, 올해 지침은 모델 안에 없다. 붙여 넣어주지 않으면 지어낸다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Mechanism · Text
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      텍스트 AI는 <span className="text-muted-foreground">다음 단어를 확률로 찍는다</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">NEXT TOKEN · 예시(개념도, 실제 확률 아님)</p>
      <p className="text-xl sm:text-2xl font-semibold mb-4">지나친 음주는 <span className="border-b-2 border-primary/60 px-2 text-muted-foreground">____</span></p>
      <div className="flex flex-wrap gap-2">
        {candidates.map((c) => (
          <div key={c.word} className="flex items-center gap-2 rounded-lg bg-muted/40 px-3 py-1.5">
            <span className="text-sm font-semibold">{c.word}</span>
            <span className="h-1.5 rounded-full bg-primary/70" style={{ width: c.p * 2 }} />
            <span className="font-mono text-[10px] text-muted-foreground">{c.p}%</span>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
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

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        절주 수치는 AI 머릿속이 아니라 <span className="text-primary">절주온·질병관리청 문서</span>에서 온다 — Part 4
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S06TextMechanism";
export default S;
