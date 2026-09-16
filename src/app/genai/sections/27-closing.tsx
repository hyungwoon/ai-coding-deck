"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const recap = [
  { p: "Part 1", t: "텍스트", d: "토큰 → 좌표 → 문맥 → 확률에서 뽑기" },
  { p: "Part 2", t: "이미지", d: "압축 좌표에서 잡음을 지우고, 참조는 좌표로 들어간다" },
  { p: "Part 3", t: "영상", d: "시간까지 한꺼번에 — 그래서 조건을 더 건다" },
  { p: "Part 4", t: "파이프라인", d: "한 모델이 다 못하니 사슬이 되고, 사슬이 노드가 됐다" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-6", anim(index))}>
        Closing
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl leading-tight", anim(index))}>
        좋은 프롬프트는
        <br />
        <span className="text-muted-foreground">잘 쓴 문장이 아니라</span>
        <br />
        잘 좁힌 조건이다
      </h2>

      <div className={cn("mt-12 grid grid-cols-1 sm:grid-cols-4 gap-3 text-left", anim(index))} style={{ transitionDelay: "180ms" }}>
        {recap.map((r) => (
          <div key={r.p} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="font-mono text-[10px] text-primary mb-1">{r.p}</p>
            <p className="text-sm font-bold mb-1">{r.t}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>

      <p className={cn("mt-12 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed", anim(index))} style={{ transitionDelay: "280ms" }}>
        도구 이름은 6개월이면 바뀐다. 하지만 <span className="text-foreground">조건을 걸고 · 잠그고 · 흔들고 · 확인하는</span> 일은
        다음 모델에서도 그대로다.
      </p>

      <p className={cn("mt-10 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "340ms" }}>
        프롬프트 킷 · 체크리스트 → <span className="font-mono">/genai/kit</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S27Closing";
export default S;
