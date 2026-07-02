"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const types = [
  { en: "PREDICTIVE", name: "예측형", desc: "과거 데이터로 다음을 내다본다 — 수요 예측, 추천 알고리즘.", hero: false },
  { en: "PERCEPTIVE", name: "인식형", desc: "보고 듣고 알아챈다 — 의료 영상 판독, 음성 인식.", hero: false },
  { en: "GENERATIVE", name: "생성형", desc: "글·이미지를 새로 만들어낸다 — ChatGPT·Claude·Gemini가 여기.", hero: true },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · AI 이해
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      AI 지도 — <span className="text-muted-foreground">오늘 쓰는 건 딱 하나</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))}>
      유형·구조를 다 알 필요 없다 — 생성형 하나만 제대로.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {types.map((t) => (
        <div
          key={t.en}
          className={cn(
            "rounded-2xl border p-5 shadow-sm backdrop-blur-sm",
            t.hero ? "border-primary/40 bg-primary/5" : "border-border/40 bg-card/80",
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-xs text-muted-foreground uppercase">{t.en}</p>
            {t.hero && <p className="font-mono text-xs text-primary">오늘의 주인공</p>}
          </div>
          <p className="text-lg font-semibold leading-snug mb-1">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S03AiMap";
export default S;
