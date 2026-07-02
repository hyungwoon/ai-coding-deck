"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className={cn("flex items-center gap-3 mb-3", anim(index))}>
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Part 3 · STEP 3</p>
      <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs">10분</span>
    </div>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      이 콘텐츠, <span className="text-muted-foreground">잡아낼 수 있나</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      이번엔 반대편이다 — 만드는 사람이 아니라 걸러내는 사람이 된다.
    </p>

    <div className={cn("rounded-2xl border border-destructive/20 bg-destructive/5 p-6 mb-3", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-3">✗ CASE · 가상 카드뉴스</p>
      <p className="font-mono text-lg sm:text-2xl font-bold leading-snug mb-4">
        연예인들이 몰래 먹는 ○○ — 당뇨 완치, 3일 만에 효과!
      </p>
      <p className="text-sm text-muted-foreground mb-3">
        어디가 문제인지 T4 모니터링 판정 보조로 분해해보세요. 정답은 공유 시간에.
      </p>
      <p className="text-xs text-muted-foreground/60">실제 콘텐츠가 아닌 강사 제작 가상 콘텐츠입니다.</p>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-1">MONITORING</p>
      <p className="text-lg font-semibold mb-2">디자인단의 또 하나의 활동</p>
      <p className="text-sm text-muted-foreground">
        모니터링도 콘텐츠 제작만큼 중요한 실습입니다 — 못 끝내도 괜찮습니다, 같은 방법을 다음 달 모니터링 활동에서 그대로 쓰면 됩니다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S22PracticeStep3";
export default S;
