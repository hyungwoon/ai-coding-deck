"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const era = [
  "거인들조차 공개적으로 iterate, 회귀 ship, 포스트모템 작성, 라이브로 패치",
  "올해 가장 흥미로운 걸 ship하는 팀에 18개월 전엔 필드에 없던 사람들이 있다",
  "비코더가 에이전트와 페어링해서 진짜 소프트웨어를 ship",
  "PhD가 올바른 primitive 골라 swing 시작한 빌더에게 추월당함",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 8 · The Older Method
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      남은 건 훨씬 오래된 방법
    </h2>

    <div className={cn("rounded-3xl border border-primary/30 bg-primary/5 p-8 mb-8 mt-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-2xl sm:text-3xl font-bold leading-snug">
        만들어라. <span className="text-primary">인터넷에 올려라.</span>
        <br />
        일이 너를 소개하게 해라.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        Unconventional한 이유: 자격 시스템을 무시. 유일하게 움직이는 필드에서 복리 쌓이는 방법. <span className="text-foreground font-semibold">자격증 = artifact.</span>
      </p>
    </div>

    <h3 className={cn("text-xl font-bold mb-4", anim(index))} style={{ transitionDelay: "260ms" }}>
      이 시대는 안에서 보면
    </h3>
    <div className={cn("flex flex-col gap-2 mb-6", anim(index))} style={{ transitionDelay: "320ms" }}>
      {era.map((e) => (
        <div key={e} className="rounded-xl border border-border/40 bg-card/80 p-4 text-sm text-muted-foreground leading-relaxed">
          {e}
        </div>
      ))}
    </div>

    <p className={cn("text-center text-xl font-bold", anim(index))} style={{ transitionDelay: "420ms" }}>
      게이트는 열렸다. <span className="text-muted-foreground">대부분은 신청서를 찾는 중.</span>
    </p>
  </SectionShell>
));
S.displayName = "S28OldMethod";
export default S;
