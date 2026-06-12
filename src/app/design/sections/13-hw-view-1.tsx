"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-primary uppercase mb-3", anim(index))}>
      형운의 시각 ①
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      디자인이 &lsquo;문서&rsquo;에서 <span className="text-primary">&lsquo;실행되는 규칙&rsquo;</span>으로
    </h2>

    <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
      <p className={cn(anim(index))} style={{ transitionDelay: "150ms" }}>
        디자이너가 코드를 직접 만지는 순간, 디자인 시스템은 더 이상 Figma와 PDF에 박제된 <span className="text-foreground">문서</span>가 아니다. AI가 읽고 그대로 실행하는 <span className="text-foreground">규칙</span>이 된다.
      </p>
      <p className={cn(anim(index))} style={{ transitionDelay: "300ms" }}>
        문서는 사람이 해석해야 작동한다. 규칙은 기계가 실행한다. 이 차이가 &lsquo;핸드오프&rsquo;의 번역 손실을 통째로 없앤다.
      </p>
      <p className={cn("text-foreground", anim(index))} style={{ transitionDelay: "450ms" }}>
        디자이너의 진짜 레버리지는 화면을 더 빨리 그리는 게 아니라, <span className="text-primary font-medium">자기 판단을 AI가 따를 수 있는 규칙으로 적는 것</span>이다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S13HwView1";
export default S;
