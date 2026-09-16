"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const points = [
  { no: "01", title: "픽셀을 그대로 다루면 감당이 안 된다", desc: "1024×1024 컬러 이미지 한 장이 300만 개가 넘는 숫자다. 그 위에서 수십 번 계산을 반복할 수는 없다." },
  { no: "02", title: "그래서 압축된 좌표계에서 그린다", desc: "인코더가 이미지를 훨씬 작은 숫자 판으로 줄인다 — 의미와 배치는 남기고 미세한 화소는 버린다." },
  { no: "03", title: "마지막에 디코더가 펼친다", desc: "생성은 압축 공간에서 끝나고, 그걸 사람이 볼 수 있는 픽셀로 되돌리는 건 마지막 한 걸음이다." },
  { no: "04", title: "그래서 「부분만 수정」이 어렵다", desc: "좌표를 옮겨 다시 그리는 것이므로, 한 군데만 고쳐 달라 해도 나머지가 미묘하게 달라진다 — 재생성이지 편집이 아니다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Image · 01 Latent space
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      이미지는 <span className="text-muted-foreground">압축된 좌표</span>에서 그려진다
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">LATENT · 개념도</p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
        <div className="flex-1 text-center">
          <div className="mx-auto grid aspect-square w-full max-w-[150px] grid-cols-12 gap-px overflow-hidden rounded-xl border border-border/40 bg-muted/20 p-1">
            {Array.from({ length: 144 }).map((_, i) => (
              <span key={i} className="rounded-[1px]" style={{ background: `oklch(${0.25 + ((i * 37) % 60) / 100} 0 0)` }} />
            ))}
          </div>
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">픽셀 · 숫자 300만 개</p>
        </div>
        <span className="font-mono text-xs text-muted-foreground shrink-0">인코더 →</span>
        <div className="flex-1 text-center">
          <div className="mx-auto grid aspect-square w-full max-w-[110px] grid-cols-4 gap-1 overflow-hidden rounded-xl border border-primary/40 bg-primary/5 p-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="rounded-sm" style={{ background: `oklch(${0.35 + ((i * 53) % 45) / 100} 0.04 250)` }} />
            ))}
          </div>
          <p className="mt-2 font-mono text-[10px] text-primary">잠재 좌표 · 수만 개 — 여기서 생성이 일어난다</p>
        </div>
        <span className="font-mono text-xs text-muted-foreground shrink-0">→ 디코더</span>
        <div className="flex-1 text-center">
          <div className="mx-auto aspect-square w-full max-w-[150px] overflow-hidden rounded-xl border border-border/40"
            style={{ background: "radial-gradient(circle at 50% 42%, oklch(0.88 0 0) 0 16%, oklch(0.5 0 0) 17% 38%, oklch(0.22 0 0) 39%)" }} />
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">다시 픽셀로</p>
        </div>
      </div>
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
S.displayName = "S10LatentSpace";
export default S;
