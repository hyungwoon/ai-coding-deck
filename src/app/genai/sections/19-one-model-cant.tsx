"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const roles = [
  { r: "캐릭터 판", need: "같은 얼굴을 여러 각도에서 유지" },
  { r: "로케이션 판", need: "넓은 공간의 질감·깊이·빛" },
  { r: "소품·에셋", need: "형태가 또렷한 단일 사물" },
  { r: "타이틀·문자", need: "글자가 정확히 나오는 것" },
  { r: "움직이는 컷", need: "모션의 자연스러움" },
  { r: "마감", need: "업스케일·보정·립싱크·사운드" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Pipeline · 01 Why not one model
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      한 모델이 <span className="text-muted-foreground">전부 잘하지 못한다</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-4 mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="sm:col-span-3 rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground mb-4">역할마다 요구하는 능력이 다르다</p>
        <div className="grid grid-cols-1 gap-2">
          {roles.map((r) => (
            <div key={r.r} className="flex items-baseline gap-3 border-b border-border/20 pb-2 last:border-0">
              <span className="w-24 shrink-0 text-sm font-semibold">{r.r}</span>
              <span className="text-xs text-muted-foreground">{r.need}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2 rounded-2xl border border-primary/25 bg-primary/5 p-5">
        <p className="font-mono text-[10px] text-muted-foreground mb-2">관측 · 공개 출품작 2,142편 분석 (2026-08)</p>
        <p className="text-sm font-bold leading-snug mb-3">
          실제로 상위권 제작자들은 <span className="text-primary">역할마다 다른 모델</span>을 쓴다
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          작업을 캐릭터·로케이션·소품·움직임 폴더로 나눈 프로젝트들에서, <span className="text-foreground">폴더마다
          주로 쓰인 모델이 서로 달랐다</span> — 인물 판을 만드는 모델과 움직이는 컷을 만드는 모델이 같지 않았다.
        </p>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="text-lg sm:text-xl font-bold mb-2">
        그래서 이건 <span className="text-muted-foreground">「제일 좋은 모델 하나 찾기」</span> 게임이 아니다
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="text-foreground font-medium">역할 배치</span> 게임이다 — 어느 칸에 누구를 세울지 정하고, 그 사이를 이어 붙이는 일.
        그리고 무언가를 이어 붙여야 한다는 요구가, 다음 장의 구조를 낳았다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S19OneModelCant";
export default S;
