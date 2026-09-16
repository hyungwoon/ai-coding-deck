"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const stages = [
  {
    n: "1", t: "사전학습", sub: "Pre-training",
    what: "엄청난 양의 글로 「다음 토큰 맞히기」만 반복한다",
    got: "지식·문체·상식의 원천. 동시에 편향과 오류도 여기서 들어온다",
  },
  {
    n: "2", t: "지시학습", sub: "Instruction tuning",
    what: "「질문 → 좋은 답」 쌍을 보여 주며 대화 형식을 익힌다",
    got: "묻는 말에 답하는 조수의 형태. 이게 없으면 그냥 글을 이어 쓴다",
  },
  {
    n: "3", t: "선호학습", sub: "Preference tuning",
    what: "사람이 더 낫다고 고른 답 쪽으로 기울인다",
    got: "공손함·거절·장황함·「도움이 되었길 바랍니다」의 정체가 전부 이 단계",
  },
];

const implications = [
  { t: "기본 말투는 취향이 아니라 습관", d: "훈련으로 밴 버릇이다. 역할·독자·형식을 지정하면 덮어쓸 수 있다." },
  { t: "장황함은 기본값이지 필연이 아니다", d: "「서론 없이 결론부터, 3문장」처럼 형식을 조건으로 주면 바뀐다." },
  { t: "거절·과잉 안전도 이 단계의 산물", d: "맥락(용도·대상·범위)을 밝히면 판단 근거가 달라진다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · LLM · 05 Training
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      모델의 <span className="text-muted-foreground">말투는 어디서 왔나</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {stages.map((s) => (
        <div key={s.n} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-mono text-sm text-primary">{s.n}</span>
            <p className="text-lg font-bold">{s.t}</p>
            <span className="font-mono text-[10px] text-muted-foreground">{s.sub}</span>
          </div>
          <p className="text-xs leading-relaxed mb-3">{s.what}</p>
          <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">{s.got}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      {implications.map((p) => (
        <div key={p.t} className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
          <p className="text-sm font-semibold leading-snug mb-1">{p.t}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S07Training";
export default S;
