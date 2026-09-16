"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const spectrum = [
  {
    t: "채팅 한 줄",
    ctrl: "제어 거의 없음",
    d: "말로 부탁하고 결과를 받는다. 빠르지만 왜 그렇게 나왔는지 알 길이 없다.",
    who: "탐색 · 초안 — 채팅형 이미지·영상 모델",
  },
  {
    t: "프리셋 앱",
    ctrl: "검증된 조합",
    d: "카메라 모션·인물 고정·업스케일이 이미 연결된 그래프를 버튼으로 고른다. 대부분의 실무가 여기서 끝난다.",
    who: "제작 · 반복 작업 — Higgsfield · Flora 등",
  },
  {
    t: "노드 편집기",
    ctrl: "전부 열림",
    d: "칸마다 모델과 값을 직접 꽂는다. 자유롭지만 조립과 유지보수가 일이 된다.",
    who: "커스텀 · 자동화 — ComfyUI 등",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Pipeline · 03 Preset apps
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      생성 앱이 하는 일 = <span className="text-muted-foreground">그래프를 버튼으로 포장</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      {spectrum.map((s, i) => (
        <div key={s.t} className={cn(
          "rounded-2xl border p-5 shadow-sm backdrop-blur-sm",
          i === 1 ? "border-primary/30 bg-primary/5" : "border-border/40 bg-card/80",
        )}>
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <p className="text-base font-bold">{s.t}</p>
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground">{s.ctrl}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.d}</p>
          <p className="font-mono text-[10px] text-muted-foreground/70">{s.who}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-2">추상화의 값</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          프리셋은 <span className="text-foreground">편의를 주고 제어권을 가져간다</span>. 잘 될 땐 최고의 거래지만,
          막히는 순간 어느 칸에서 막혔는지 알 수 없다 — 칸이 감춰져 있기 때문이다.
        </p>
      </div>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <p className="text-sm font-bold mb-2">그래서 원리를 아는 사람이 프리셋도 잘 쓴다</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          「인물 고정」 토글이 사실은 <span className="text-foreground">참조 조건을 거는 칸</span>이고, 「스타일 강도」가
          <span className="text-foreground"> 가이던스</span>라는 걸 알면, 버튼만 보고도 무엇을 만지고 있는지 안다.
        </p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S21PresetApps";
export default S;
