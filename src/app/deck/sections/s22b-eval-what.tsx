"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const evalLayers = [
  {
    level: "Level 1",
    title: "Model Eval",
    subtitle: "벤치마크",
    desc: "모델 자체의 능력 측정. 어떤 모델이 우리 태스크에 적합한지 비교한다.",
    examples: ["MMLU — 지식 + 추론 종합", "HumanEval — 코드 생성", "SWE-bench — 실제 이슈 해결"],
    highlight: false,
  },
  {
    level: "Level 2",
    title: "Task Eval",
    subtitle: "프롬프트 + 출력 평가",
    desc: "같은 모델이라도 프롬프트에 따라 결과가 다르다. 어떤 접근이 더 나은지 측정한다.",
    examples: ["A/B 프롬프트 비교", "LLM-as-Judge 자동 채점", "정확도 + 관련성 + 안전성"],
    highlight: true,
  },
  {
    level: "Level 3",
    title: "System Eval",
    subtitle: "파이프라인 검증",
    desc: "개별 컴포넌트는 OK인데 전체가 실패하는 경우. 에이전트 워크플로우 전체를 평가한다.",
    examples: ["RAG 검색 정확도", "에이전트 태스크 완료율", "E2E 성공률"],
    highlight: false,
  },
];

const SlideEvalWhat = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        08 · Evaluation
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
        Eval — AI 성능을 측정하는 과학
      </h2>
      <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
        측정할 수 없으면, 개선할 수 없다
      </p>

      {/* 핵심 정의 */}
      <div className={cn("rounded-2xl border border-primary/20 bg-primary/5 p-5 mb-5", anim(index))} style={{ transitionDelay: "120ms" }}>
        <p className="text-sm leading-relaxed">
          <strong className="text-primary">&quot;AI가 잘했다&quot;의 근거는?</strong>{" "}
          <span className="text-muted-foreground">
            Eval은 AI 출력을 체계적으로 측정하는 방법론이다.
            시험지 없이는 성적을 매길 수 없듯, Eval 없이는 AI 품질도 알 수 없다.
          </span>
        </p>
      </div>

      {/* 3-layer cards */}
      <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
        {evalLayers.map((layer) => (
          <div
            key={layer.level}
            className={cn(
              "rounded-2xl border shadow-sm overflow-hidden",
              layer.highlight
                ? "border-primary/20 bg-primary/5"
                : "border-border/40 bg-card/80 backdrop-blur-sm",
            )}
          >
            <div className={cn(
              "px-5 py-4 border-b",
              layer.highlight ? "border-primary/15 bg-primary/8" : "border-border/40 bg-card/60",
            )}>
              <p className={cn("font-mono text-xs mb-1", layer.highlight ? "text-primary" : "text-muted-foreground/60")}>
                {layer.level}
              </p>
              <p className="text-sm font-bold">{layer.title}</p>
              <p className="text-xs text-muted-foreground">{layer.subtitle}</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{layer.desc}</p>
              <div className="space-y-1">
                {layer.examples.map((ex) => (
                  <p key={ex} className="text-xs text-muted-foreground/80 font-mono">{ex}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RLVR 연결 */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "280ms" }}>
        <p className="text-sm leading-relaxed">
          <span className="font-mono text-primary font-semibold">RLVR = Eval의 자동화.</span>{" "}
          <span className="text-muted-foreground">
            RLVR의 V(Verifiable)가 바로 Eval이다.
            코드 실행 여부, 수학 정답 일치 — 이 자동 평가가 AI의 초고속 자기개선을 가능하게 한다.
          </span>
        </p>
      </div>
    </div>
  </SectionShell>
));
SlideEvalWhat.displayName = "SlideEvalWhat";
export default SlideEvalWhat;
