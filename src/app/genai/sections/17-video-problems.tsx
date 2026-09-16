"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const probs = [
  {
    n: "01", t: "정체성 드리프트",
    why: "컷마다 새로 추첨하기 때문",
    sym: "같은 인물의 얼굴·옷·나이가 컷마다 미묘하게 달라진다. 한 클립 안에서도 뒤로 갈수록 미끄러진다.",
  },
  {
    n: "02", t: "물리가 없다",
    why: "물리 엔진이 아니라 통계이기 때문",
    sym: "액체가 거꾸로 흐르고, 손가락이 늘고, 걷는 다리가 바뀐다. 「본 적 있는 움직임」을 흉내 낼 뿐 계산하지 않는다.",
  },
  {
    n: "03", t: "카메라 권한을 뺏긴다",
    why: "안 적으면 모델이 정하기 때문",
    sym: "지시하지 않은 컷 전환이 생기고, 카메라가 제멋대로 흔들리거나 줌인한다. 「고정 샷」조차 조건으로 적어야 지켜진다.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Video · 02 Three hard problems
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      영상이 어려운 <span className="text-muted-foreground">세 가지 이유</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "140ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">IDENTITY DRIFT · 같은 인물을 컷마다 새로 뽑으면</p>
      <div className="grid grid-cols-4 gap-3">
        {["컷 1", "컷 2", "컷 3", "컷 4"].map((f, i) => (
          <div key={f} className="flex flex-col items-center gap-2">
            <div className="relative aspect-[9/16] w-full max-w-[88px] overflow-hidden rounded-lg border border-border/40 bg-muted/30">
              <div className="absolute left-1/2 top-[26%] rounded-full bg-primary/70"
                style={{ width: 26 + i * 4, height: 30 - i * 2, transform: `translateX(-50%) rotate(${i * 7}deg)` }} />
              <div className="absolute left-1/2 top-[50%] h-14 w-10 -translate-x-1/2 rounded-t-xl"
                style={{ background: `oklch(${0.56 - i * 0.08} 0 0)` }} />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">{f}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5", anim(index))} style={{ transitionDelay: "230ms" }}>
      {probs.map((p) => (
        <div key={p.n} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-mono text-xs text-primary">{p.n}</span>
            <p className="text-base font-bold">{p.t}</p>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground mb-2">{p.why}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{p.sym}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/25 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm font-bold mb-1">덤: 「천천히」는 조건이 아니다</p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        속도·타이밍을 형용사로 주면 프레임 수로 번역되지 않는다. <span className="text-foreground">「0~3초: 정지, 3~6초: 고개를 오른쪽으로」</span>처럼
        초 단위로 배정해야 시간이 통제된다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S17VideoProblems";
export default S;
