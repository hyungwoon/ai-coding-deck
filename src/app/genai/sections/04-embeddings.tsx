"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const dots = [
  { t: "고양이", x: 22, y: 30, g: 0 },
  { t: "강아지", x: 30, y: 24, g: 0 },
  { t: "호랑이", x: 16, y: 44, g: 0 },
  { t: "자동차", x: 70, y: 66, g: 1 },
  { t: "트럭", x: 78, y: 58, g: 1 },
  { t: "비행기", x: 62, y: 80, g: 1 },
  { t: "사진", x: 48, y: 16, g: 2 },
];

const points = [
  { no: "01", title: "뜻이 좌표가 된다", desc: "토큰마다 수백~수천 개 숫자로 된 좌표가 붙는다. 비슷한 맥락에서 쓰이는 말은 서로 가까운 자리에 놓인다." },
  { no: "02", title: "모델이 아는 건 정의가 아니라 「함께 나온 패턴」", desc: "사전적 뜻을 배운 적이 없다. 그래서 「감성적인」보다 실제로 그런 사진 설명에 같이 등장하는 어휘가 훨씬 강하게 먹힌다." },
  { no: "03", title: "이미지도 같은 방식으로 좌표가 된다", desc: "그림을 숫자 좌표로 바꾸고, 텍스트 좌표와 같은 공간에 겹쳐 놓는다 — 이것이 「글로 그림을 부르는」 다리다." },
  { no: "04", title: "참조 이미지가 조건이 되는 원리도 여기", desc: "참조 사진은 붙여넣기가 아니라 좌표로 바뀌어, 프롬프트 옆에 나란히 놓이는 또 하나의 조건이 된다 — Part 2에서." },
];

const tone = ["bg-primary/70", "bg-muted-foreground/60", "bg-primary/40"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · LLM · 02 Embeddings
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      뜻은 <span className="text-muted-foreground">좌표</span>가 된다
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-4 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="sm:col-span-2 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-[10px] text-muted-foreground mb-3">EMBEDDING SPACE · 개념도(실제는 수천 차원)</p>
        <div className="relative aspect-square w-full rounded-xl border border-border/30 bg-muted/20">
          {dots.map((d) => (
            <div key={d.t} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${d.x}%`, top: `${d.y}%` }}>
              <span className={cn("block size-2 rounded-full", tone[d.g])} />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] text-muted-foreground">{d.t}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">가까우면 비슷한 맥락 · 방향에도 뜻이 있다</p>
      </div>
      <div className="sm:col-span-3 grid grid-cols-1 gap-3">
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
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-base sm:text-lg font-bold">
        이 슬라이드가 오늘의 복선이다 — <span className="text-primary">말도 그림도 같은 공간의 좌표</span>라서, 둘을 같은 자리에 조건으로 넣을 수 있다
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S04Embeddings";
export default S;
