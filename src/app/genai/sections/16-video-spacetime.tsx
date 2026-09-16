"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const points = [
  { no: "01", title: "프레임을 낱장으로 만들지 않는다", desc: "따로 그리면 이어지지 않는다. 그래서 시간까지 함께 압축해 「시공간 조각」으로 자르고, 클립 전체를 한꺼번에 생성한다." },
  { no: "02", title: "이미지의 디퓨전이 시간축으로 확장된 것", desc: "잡음에서 지워내는 원리는 그대로다. 다만 지워내는 대상이 한 장이 아니라 「움직이는 덩어리」다." },
  { no: "03", title: "비용이 길이에 따라 급격히 는다", desc: "5초짜리도 이미지 수백 장 분량의 계산이다. 짧은 클립이 표준 단위인 건 취향이 아니라 구조적 제약이다." },
  { no: "04", title: "그래서 「1분짜리 만들어 줘」는 무리한 주문", desc: "긴 영상은 한 번에 나오지 않는다. 짧은 컷을 여러 번 뽑아 이어 붙이는 것이 정상적인 작업 방식이다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Video · 01 Space-time
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      영상은 <span className="text-muted-foreground">시간까지 한꺼번에</span> 그린다
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">SPACE-TIME PATCHES · 개념도</p>
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="flex-1">
          <div className="relative h-[130px] w-full max-w-[300px]">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="absolute top-0 grid h-[84px] w-[150px] grid-cols-4 grid-rows-3 gap-px rounded-lg border border-border/40 bg-muted/20 p-1"
                style={{ left: i * 46, top: i * 12, zIndex: 4 - i, opacity: 1 - i * 0.18 }}>
                {Array.from({ length: 12 }).map((_, k) => (
                  <span key={k} className="rounded-[1px] bg-primary/25" />
                ))}
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted-foreground">프레임을 겹쳐 시간축까지 조각낸다 → 조각 전체를 한 번에 정제</p>
        </div>
        <div className="hidden sm:block w-px self-stretch bg-border/40" />
        <div className="flex-1 space-y-2">
          {[
            ["이미지 1장", "잠재 조각 수천 개"],
            ["5초 영상", "그 수백 배 — 시간 방향으로 곱해진다"],
          ].map(([a, b]) => (
            <div key={a} className="flex items-baseline gap-3">
              <span className="w-20 shrink-0 text-xs font-semibold">{a}</span>
              <span className="text-xs text-muted-foreground">{b}</span>
            </div>
          ))}
          <p className="pt-2 text-xs leading-relaxed border-t border-border/30 mt-3">
            길이를 두 배로 늘리는 건 계산을 두 배 쓰는 게 아니라, 그 이상을 쓰는 일이다.
          </p>
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
S.displayName = "S16VideoSpacetime";
export default S;
