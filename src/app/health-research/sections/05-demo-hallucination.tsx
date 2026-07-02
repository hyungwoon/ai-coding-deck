"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const demoPrompt = "비타민D가 감기를 예방한다는 국내 논문 3편을 알려줘. 저자와 학술지 이름도 함께.";

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · Live Demo ①
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      AI를 일부러 속여보겠습니다
    </h2>

    <div className={cn("mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase mb-2">Prompt</p>
      <div className="rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line">
        {demoPrompt}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-2", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="font-mono text-xs text-muted-foreground uppercase mb-2">예상 결과</p>
      <p className="text-lg font-semibold leading-snug mb-1">
        실존하지 않는 논문 제목·저자·학술지를 그럴듯하게 생성
      </p>
      <p className="text-sm text-muted-foreground">
        형식은 완벽하고 내용은 허구 — 전원이 눈으로 목격하는 순간.
      </p>
    </div>
    <p className={cn("text-xs text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "250ms" }}>
      라이브로 실행합니다. 재현이 안 되면 백업 캡처로 보여드립니다.
    </p>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">이 현상의 이름이 환각(hallucination)</p>
      <p className="text-xl sm:text-2xl font-bold">
        AI는 거짓말을 하는 게 아니다 — <span className="text-primary">진실과 거짓을 구분하는 개념 자체가 없다</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S05DemoHallucination";
export default S;
