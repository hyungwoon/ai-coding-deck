"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const guidance = [
  { g: "낮음", d: "조건을 느슨하게 — 자유롭지만 프롬프트와 다른 그림", w: 26 },
  { g: "적정", d: "말한 것은 지키고 나머지는 모델이 채운다", w: 60 },
  { g: "높음", d: "지나치게 충실 — 색이 타고 질감이 딱딱해진다", w: 94 },
];

const points = [
  { no: "01", title: "프롬프트는 매 단계의 방향키다", desc: "텍스트가 좌표로 바뀌어, 잡음을 지울 때마다 「어느 쪽으로 지울지」를 정한다. 한 번 읽고 마는 게 아니라 수십 번 다시 참조된다." },
  { no: "02", title: "가이던스 = 조건을 얼마나 세게 따를지", desc: "너무 세우면 과포화·경직, 너무 낮추면 딴 그림. 프롬프트가 안 먹힌다고 느낄 때 먼저 볼 손잡이다." },
  { no: "03", title: "네거티브 프롬프트는 「반대 방향」 조건", desc: "지우지 말아야 할 쪽을 지정해 그 반대로 밀어낸다. 디퓨전 계열의 장치이고, 모든 모델에 있는 기능이 아니다." },
  { no: "04", title: "채팅형 이미지 모델엔 슬라이더가 없다", desc: "가이던스·네거티브 칸이 안 보이는 도구라면, 같은 일을 문장으로 해야 한다 — 「무엇이다」를 더 또렷하게 쓰는 쪽으로." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Image · 03 Conditioning
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      프롬프트는 <span className="text-muted-foreground">매 스텝의 방향키</span>다
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">GUIDANCE · 조건을 따르는 강도</p>
      <div className="space-y-3">
        {guidance.map((g) => (
          <div key={g.g} className="flex items-center gap-3">
            <span className="w-12 shrink-0 text-sm font-semibold">{g.g}</span>
            <span className="h-2 rounded-full bg-primary/70" style={{ width: `${g.w}px` }} />
            <span className="text-xs text-muted-foreground">{g.d}</span>
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
S.displayName = "S12Conditioning";
export default S;
