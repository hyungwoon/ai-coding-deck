"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const shifts = [
  { no: "01", title: "대화로 편집한다", desc: "「이 이미지에서 배경만 밤으로 바꿔줘」 — 한 번에 완성하는 프롬프트에서, 만들고 나서 말로 고치는 방식으로. GPT Image·Gemini(Nano Banana) 계열이 기본 제공." },
  { no: "02", title: "영상에 소리가 붙는다", desc: "대사·효과음·립싱크를 영상과 함께 생성. 2026년 프론티어 모델(Veo 3.1·Kling 3.0·Seedance 2.x)에선 차별점이 아니라 기본값." },
  { no: "03", title: "참조로 일관성을 잡는다", desc: "참조 이미지를 여러 장 넣어 같은 캐릭터·같은 제품을 유지하는 기능이 표준화. Nano Banana Pro는 최대 14장, Midjourney는 Omni Reference, Kling은 Elements." },
  { no: "04", title: "표시가 규칙이 됐다", desc: "인공지능기본법 2026-01-22 시행(생성물 표시). YouTube는 2026-05부터 AI 영상 자동 라벨, Instagram은 2026-08부터 미표시 AI 계정 도달 제한." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · 2026 Trends
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      1년 사이, <span className="text-muted-foreground">네 가지가 달라졌다</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      셋은 만드는 방식의 변화, 하나는 규칙의 변화 — 서포터즈 콘텐츠에 전부 직접 닿습니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", anim(index))} style={{ transitionDelay: "225ms" }}>
      {shifts.map((s) => (
        <div key={s.no} className="flex items-start gap-4 rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{s.no}</span>
          <div>
            <p className="text-lg font-semibold leading-snug mb-1">{s.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-xl sm:text-2xl font-bold">
        「만능 1위」 모델은 없다 — <span className="text-primary">용도별로 조합</span>하는 게 2026년의 표준
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        출처: 인공지능기본법 시행(정책브리핑 2026-01) · YouTube 공식 블로그(2026-05) · TechCrunch(2026-08-31) · 각 모델 공식 문서. 링크는 킷 페이지에.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S03ThreeShifts";
export default S;
