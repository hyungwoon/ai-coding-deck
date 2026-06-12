"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-primary uppercase mb-3", anim(index))}>
      형운의 시각 ② · 브릿지
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      그래서 — 품질을 <span className="text-primary">&lsquo;툴&rsquo;에 새겨넣는다</span>
    </h2>

    <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
      <p className={cn(anim(index))} style={{ transitionDelay: "150ms" }}>
        리포트가 반복하는 결론 하나 — 앞서가는 팀은 디자인 시스템과 브랜드 가이드를 <span className="text-foreground">코딩 툴에 미리 새겨넣어</span>, 누구든 같은 품질 기준선에서 시작하게 한다. (Stripe ProtoDash · Anthropic Design system picker)
      </p>
      <p className={cn(anim(index))} style={{ transitionDelay: "300ms" }}>
        NMWC도 같은 선택을 했다. 토큰을 코드로 강제하고, 컴포넌트를 spec으로 박았다.
      </p>
      <p className={cn("text-foreground", anim(index))} style={{ transitionDelay: "450ms" }}>
        그렇다면 남는 질문 — <span className="text-primary font-medium">그 &lsquo;품질을 새겨넣는 형식&rsquo;은 정확히 무엇인가?</span>
      </p>
    </div>

    <div className={cn("mt-10 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-3", anim(index))} style={{ transitionDelay: "600ms" }}>
      <span className="font-mono text-sm text-primary">다음 →</span>
      <span className="font-semibold">Design System에서 DESIGN.md로</span>
    </div>
  </SectionShell>
));
S.displayName = "S14HwView2Bridge";
export default S;
