"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { blur: 0, noise: 1, label: "노이즈" },
  { blur: 10, noise: 0.7, label: "step 5" },
  { blur: 5, noise: 0.4, label: "step 15" },
  { blur: 2, noise: 0.15, label: "step 30" },
  { blur: 0, noise: 0, label: "완성" },
];

const points = [
  { no: "01", title: "학습: 사진에 노이즈를 더하며 「노이즈 예측」을 배운다", desc: "생성: 완전한 노이즈에서 출발해 그 과정을 거꾸로, 수십 번 지워낸다(디퓨전)." },
  { no: "02", title: "프롬프트는 「조건」이다", desc: "텍스트가 인코더(CLIP류)를 거쳐 숫자가 되고, 매 단계 어느 방향으로 지울지를 정한다." },
  { no: "03", title: "그래서 구체적 시각 어휘가 먹힌다", desc: "「슬픈 느낌」보다 「비 오는 밤, 젖은 보도에 반사되는 편의점 불빛, 35mm」. 모델은 뜻이 아니라 「같이 나온 패턴」을 안다." },
  { no: "04", title: "왜 손·글자가 깨졌나 → 2026년엔", desc: "모든 픽셀을 동시에 정제하니 「순서대로 쓰는」 계획이 없었다. GPT Image 계열은 토큰을 순서대로 생성해 글자가 정확해졌다. 그래도 검수." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Mechanism · Image
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      이미지 AI는 <span className="text-muted-foreground">노이즈에서 지워낸다</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">DENOISING · 개념도 — 같은 프롬프트, 같은 시드면 같은 경로</p>
      <div className="flex items-end gap-3 sm:gap-5">
        {steps.map((s) => (
          <div key={s.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative aspect-square w-full max-w-[120px] overflow-hidden rounded-xl border border-border/40">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 50% 62%, oklch(0.85 0 0) 0 18%, oklch(0.45 0 0) 19% 40%, oklch(0.25 0 0) 41%)",
                  filter: `blur(${s.blur}px)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  opacity: s.noise,
                  backgroundImage: "repeating-conic-gradient(oklch(0.3 0 0) 0 25%, oklch(0.75 0 0) 0 50%)",
                  backgroundSize: "6px 6px",
                  mixBlendMode: "overlay",
                }}
              />
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
S.displayName = "S07ImageMechanism";
export default S;
