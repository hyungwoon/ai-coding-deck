"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const chain = [
  { n: "로드", d: "모델 · 참조 이미지 · 프롬프트를 불러온다" },
  { n: "인코딩", d: "말과 그림을 좌표(조건)로 바꾼다" },
  { n: "샘플러", d: "시드 · 스텝 · 가이던스로 잡음을 지운다" },
  { n: "디코딩", d: "잠재 좌표를 픽셀로 펼친다" },
  { n: "후처리", d: "업스케일 · 보정 · 합성 · 영상으로 연결" },
];

const gains = [
  { t: "중간 산출물을 자산으로 붙잡는다", d: "캐릭터 판 하나를 만들어 두면 이후 모든 컷이 그것을 조건으로 쓴다. 매번 처음부터 뽑지 않는다." },
  { t: "한 칸만 갈아 끼운다", d: "색이 마음에 안 들면 후처리만, 인물이 흔들리면 조건만. 「다시 굴리기」가 전체 재생성이 아니게 된다." },
  { t: "분기하고 한꺼번에 돌린다", d: "같은 조건에 시드만 12개 흘려 한 번에 뽑고 고른다 — 표본 수가 품질을 만든다는 사실을 구조로 떠받친다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Pipeline · 02 The graph
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      노드는 <span className="text-muted-foreground">원래 있던 사슬을 꺼낸 것</span>이다
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      채팅창에 한 줄 쓰는 순간에도 안에서는 이 사슬이 돌고 있다. 노드 편집기는 새로운 방식이 아니라,
      <span className="text-foreground font-medium"> 감춰져 있던 칸들을 밖으로 끄집어낸 것</span>이다.
    </p>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "160ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">GENERATION CHAIN · 한 장을 뽑을 때도 거치는 칸들</p>
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        {chain.map((c, i) => (
          <div key={c.n} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-xl border border-border/40 bg-muted/20 p-3">
              <p className="text-sm font-bold mb-1">{c.n}</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
            {i < chain.length - 1 && <span className="hidden sm:block shrink-0 text-muted-foreground/40">→</span>}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        채팅형 도구 = 이 다섯 칸이 <span className="text-foreground">한 버튼 뒤에 묶여</span> 있다 · 노드 편집기 = 칸마다 선을 꽂을 수 있다
      </p>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "260ms" }}>
      {gains.map((g) => (
        <div key={g.t} className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
          <p className="text-sm font-semibold leading-snug mb-1">{g.t}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{g.d}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S20GraphAnatomy";
export default S;
