"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · The Keystone Habit
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      만약 단 하나의 습관만 가져간다면
    </h2>

    <div className={cn("rounded-3xl border border-primary/30 bg-primary/5 p-8 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
        새 게 런칭하면, <span className="text-primary">&ldquo;6개월 뒤 의미 있다고 믿으려면 뭘 봐야 하지?&rdquo;</span> 적어두고 — 6개월 뒤 돌아와 확인.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        대부분 질문은 스스로 답한다. 그리고 너의 주의력은 복리로 쌓이는 것에 쓰여 있을 것이다.
      </p>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 backdrop-blur-sm", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
        진짜 어려운 스킬
      </p>
      <p className="text-lg font-semibold mb-3">&ldquo;안 쿨해도 괜찮은 능력&rdquo;</p>
      <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
        <li>• HN에서 이번 주 바이럴 나는 프레임워크는 14일간 응원단이 있다 — 다 똑똑해 보인다.</li>
        <li>• 6개월 뒤 그 중 절반은 unmaintained, 응원단은 다음으로 옮겨갔다.</li>
        <li>• 참여 안 한 사람은 <span className="text-foreground">하이프 식은 뒤에도 지루하게 살아남은 것</span>에 주의력을 아껴뒀다.</li>
      </ul>
      <p className="mt-4 text-sm font-medium text-foreground">
        &ldquo;나는 6개월 뒤 알겠다&rdquo;고 말하며 버티고, 지켜보고, 반응 안 하는 자세 — 이게 이 필드의 진짜 프로페셔널 스킬.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S03KeystoneHabit";
export default S;
