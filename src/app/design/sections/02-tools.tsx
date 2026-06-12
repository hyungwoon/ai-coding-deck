"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      오늘의 도구
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      터미널 없이, <span className="text-muted-foreground">Claude Desktop에서 코드로</span>
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={cn("rounded-2xl border border-border/40 bg-card/60 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">전통</p>
        <p className="text-xl font-bold mb-3">디자이너 → 핸드오프 → 개발자</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          디자이너는 화면을 그리고 넘긴다. 코드는 남의 일. 의도와 구현 사이에 번역 손실이 쌓인다.
        </p>
      </div>

      <div className={cn("rounded-2xl border border-primary/40 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">오늘</p>
        <p className="text-xl font-bold mb-3">Claude Desktop · Code 탭</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
          <li>• 시각적 파일 diff + 빌트인 프리뷰 패널</li>
          <li>• 통합 터미널 내장 — 빌드·테스트를 앱 안에서</li>
          <li>• 터미널 명령을 외우지 않아도 된다</li>
        </ul>
      </div>
    </div>

    <p className={cn("mt-6 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "350ms" }}>
      디자이너가 직접 코드와 <span className="text-foreground font-medium">디자인 시스템</span>을 만진다.
    </p>
  </SectionShell>
));
S.displayName = "S02Tools";
export default S;
