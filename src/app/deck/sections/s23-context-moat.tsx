"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const SlideContextMoat = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        08 · 컨텍스트 축적
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
        컨텍스트 축적이 경쟁 우위
      </h2>
      <p className={cn("text-sm text-muted-foreground mb-5", anim(index))} style={{ transitionDelay: "80ms" }}>
        모델은 공유된다. 온톨로지는 나만의 것이다.
      </p>

      {/* 4 bullet cards */}
      <div className={cn("grid grid-cols-2 gap-3 mb-5", anim(index))} style={{ transitionDelay: "140ms" }}>
        {[
          { dot: "bg-primary", title: "모델은 공유된다", desc: "온톨로지는 나만의 것. 같은 AI를 써도 결과가 다른 이유." },
          { dot: "bg-muted-foreground", title: "일찍 쌓을수록 유리하다", desc: "지금 구조화한 지식이 6개월 후 에이전트의 품질을 결정한다." },
          { dot: "bg-muted-foreground/60", title: "피드백 루프가 핵심이다", desc: "에이전트가 틀릴 때마다 온톨로지를 갱신하면 같은 실수를 반복하지 않는다." },
          { dot: "bg-primary/60", title: "조직이 AI와 함께 학습한다", desc: "RLVR이 모델을 개선하듯, 온톨로지 갱신이 조직의 AI를 개선한다." },
        ].map(({ dot, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm flex items-start gap-3">
            <span className={cn("w-2 h-2 rounded-full mt-1.5 shrink-0", dot)} />
            <div>
              <p className="text-xs font-semibold mb-1">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 실천 로드맵 */}
      <div className={cn("rounded-2xl border border-primary/20 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "220ms" }}>
        <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">지금 당장 시작할 수 있는 것</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "WEEK 1", title: "나의 맥락 문서화", desc: "CLAUDE.md에 역할·프로젝트·용어·선호 방식 작성. 반복 설명을 한 번에 정리." },
            { label: "MONTH 1", title: "도메인 온톨로지 초안", desc: "자주 쓰는 개체·관계·규칙을 Notion에 구조화. 에이전트가 참조할 수 있는 형태로." },
            { label: "ONGOING", title: "피드백 루프 운영", desc: "AI가 틀리거나 맥락을 놓칠 때마다 온톨로지 갱신. 쓸수록 정교해지는 나만의 AI." },
          ].map(({ label, title, desc }) => (
            <div key={label} className="rounded-xl border border-primary/15 p-3">
              <p className="font-mono text-[10px] text-primary tracking-widest mb-2">{label}</p>
              <p className="text-xs font-semibold mb-1.5">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
));
SlideContextMoat.displayName = "SlideContextMoat";
export default SlideContextMoat;
