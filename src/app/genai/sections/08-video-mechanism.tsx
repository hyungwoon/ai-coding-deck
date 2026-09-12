"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const points = [
  { no: "01", title: "영상 = 시공간 조각을 한꺼번에 지워낸다", desc: "프레임을 시간축까지 압축해 조각(패치)으로 자르고, 트랜스포머+디퓨전(DiT)으로 한 번에 생성한다." },
  { no: "02", title: "프레임끼리 약속이 없다", desc: "매 생성은 확률 추첨. 컷이 바뀌면 같은 사람의 얼굴·옷이 미묘하게 바뀐다 — 정체성 드리프트." },
  { no: "03", title: "연산량은 프레임 수에 비례", desc: "그래서 5~15초 클립이 표준. 30초 단일 컷은 2026년에야 등장(Seedance 2.5)." },
  { no: "04", title: "소리도 같은 공간에서 함께 나온다", desc: "대사·효과음·배경음을 프롬프트로 지시할 수 있고, 「없음」도 지시해야 한다 — 안 적으면 모델이 마음대로 넣는다." },
];

const frames = ["컷 1", "컷 2", "컷 3", "컷 4"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Mechanism · Video
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      영상 AI는 <span className="text-muted-foreground">시간까지 그린다 — 그래서 흔들린다</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">IDENTITY DRIFT · 개념도 — 같은 인물을 컷마다 새로 추첨하면</p>
      <div className="grid grid-cols-4 gap-3">
        {frames.map((f, i) => (
          <div key={f} className="flex flex-col items-center gap-2">
            <div className="relative aspect-[9/16] w-full max-w-[90px] rounded-lg border border-border/40 bg-muted/30 overflow-hidden">
              <div
                className="absolute left-1/2 top-[28%] -translate-x-1/2 rounded-full bg-primary/70"
                style={{ width: 28 + i * 3, height: 30 - i * 2, transform: `translateX(-50%) rotate(${i * 6}deg)` }}
              />
              <div className="absolute left-1/2 top-[50%] -translate-x-1/2 w-10 h-14 rounded-t-xl" style={{ background: `oklch(${0.55 - i * 0.07} 0 0)` }} />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">{f}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6", anim(index))} style={{ transitionDelay: "250ms" }}>
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
        릴스는 「긴 영상 한 번」이 아니라 <span className="text-primary">「짧은 컷 여러 개 + 같은 참조」</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S08VideoMechanism";
export default S;
