"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { blur: 0, noise: 1, label: "시드 노이즈" },
  { blur: 10, noise: 0.72, label: "step 5" },
  { blur: 5, noise: 0.42, label: "step 15" },
  { blur: 2, noise: 0.16, label: "step 30" },
  { blur: 0, noise: 0, label: "완성" },
];

const points = [
  { no: "01", title: "학습: 노이즈를 끼얹고 「지금 낀 노이즈」를 맞힌다", desc: "사진에 조금씩 잡음을 더해 가며, 각 단계에서 무엇이 잡음인지 알아맞히는 훈련만 한다." },
  { no: "02", title: "생성: 순수한 잡음에서 그 과정을 거꾸로", desc: "아무 그림도 없는 잡음에서 출발해, 예측한 잡음을 빼기를 20~50번. 그러면 조건에 맞는 그림이 남는다." },
  { no: "03", title: "시드 = 출발 잡음의 번호", desc: "같은 조건 + 같은 시드면 같은 그림이 나온다. 시드를 고정해야 「무엇을 바꿨을 때 무엇이 변했는지」를 볼 수 있다." },
  { no: "04", title: "스텝 수는 정제 횟수", desc: "많이 돌린다고 늘 좋아지지 않는다. 일정 수준을 넘으면 시간만 들고 그림은 거의 그대로다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Image · 02 Diffusion
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      그리는 게 아니라 <span className="text-muted-foreground">지워내는 것</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">DENOISING · 개념도</p>
      <div className="flex items-end gap-3 sm:gap-5">
        {steps.map((s) => (
          <div key={s.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative aspect-square w-full max-w-[120px] overflow-hidden rounded-xl border border-border/40">
              <div className="absolute inset-0" style={{
                background: "radial-gradient(circle at 50% 42%, oklch(0.88 0 0) 0 16%, oklch(0.5 0 0) 17% 38%, oklch(0.22 0 0) 39%)",
                filter: `blur(${s.blur}px)`,
              }} />
              <div className="absolute inset-0" style={{
                opacity: s.noise,
                backgroundImage: "repeating-conic-gradient(oklch(0.3 0 0) 0 25%, oklch(0.75 0 0) 0 50%)",
                backgroundSize: "6px 6px",
                mixBlendMode: "overlay",
              }} />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
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
S.displayName = "S11Diffusion";
export default S;
