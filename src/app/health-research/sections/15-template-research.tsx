"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const template = `너는 보건 콘텐츠 팩트체커야.
[주제]에 대한 최신 근거를 조사해.
국가건강정보포털·질병관리청 등 공공기관 자료를 우선 인용하고,
출처가 불분명하면 인용하지 마.
확실하지 않으면 모른다고 답해.
결과는 표로 정리해: 주장 | 근거 요약 | 출처 URL | 발행 날짜`;

const tips = [
  { label: "TIP 1", title: "검색 연동 모드가 기본값", desc: "출처가 화면에 표시되는 검색 연동 모드를 리서치의 기본값으로 — 근거 없는 답을 걸러낸다." },
  { label: "TIP 2", title: "결과의 링크는 전수 클릭", desc: "하나도 빼지 않고 열어서 실제로 존재하는지, 내용이 일치하는지 확인." },
  { label: "TIP 3", title: "표로 받으면 바로 붙는다", desc: "표 형식 출력은 모니터링 보고서에 그대로 옮겨 붙일 수 있다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Template T2
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      리서치 — <span className="text-muted-foreground">출처를 강제하라</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      [주제]만 갈아 끼우는 T2 — AI를 활용한 보건 리서치의 시작점.
    </p>

    <div className={cn("rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {template}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "300ms" }}>
      {tips.map((t) => (
        <div key={t.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground uppercase mb-1">{t.label}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{t.title}</p>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S15TemplateResearch";
export default S;
