"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const points = [
  { no: "01", title: "학습된 가중치는 대화로 변하지 않는다", desc: "아무리 고쳐 줘도 모델 자체는 그대로다. 이번 대화에 올려 둔 것만이 작업기억이고, 창이 닫히면 사라진다." },
  { no: "02", title: "「기억 기능」은 다시 붙여 주는 장치", desc: "따로 저장해 두었다가 다음 대화 맨 앞에 몰래 넣어 준다. 모델이 기억하는 게 아니라 시스템이 다시 조건으로 넣는 것이다." },
  { no: "03", title: "검색·RAG = 답하기 전에 문서를 붙이는 조건화", desc: "질문을 받고 먼저 자료를 찾아 컨텍스트에 넣은 뒤 답하게 한다. 그래서 출처 링크가 생기고, 그 링크를 눌러 봐야 한다." },
  { no: "04", title: "창 밖의 것은 지어낸다", desc: "학습 시점 이후의 사실, 우리 조직 내부 문서, 오늘 정해진 규칙은 모델 안에 없다. 넣어 주지 않으면 그럴듯하게 채운다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · LLM · 06 Context
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      컨텍스트 창이 <span className="text-muted-foreground">유일한 작업기억</span>이다
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">CONTEXT WINDOW · 주의는 끝에 몰리고 가운데가 묻힌다</p>
      <div className="flex items-stretch gap-1.5">
        {[
          { l: "시스템·역할", h: 44 }, { l: "지침", h: 40 }, { l: "붙여넣은 자료", h: 16 },
          { l: "자료", h: 13 }, { l: "자료", h: 12 }, { l: "자료", h: 15 },
          { l: "직전 대화", h: 34 }, { l: "지금 질문", h: 48 },
        ].map((b, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1.5">
            <span className="w-full rounded-t-md bg-primary/60" style={{ height: b.h }} />
            <span className="hidden sm:block text-center font-mono text-[9px] leading-tight text-muted-foreground">{b.l}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        긴 자료를 통째로 넣으면 가운데가 묻힌다 — <span className="text-foreground font-medium">중요한 것은 맨 앞이나 맨 뒤에, 그리고 필요한 부분만</span>.
      </p>
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
S.displayName = "S08Context";
export default S;
