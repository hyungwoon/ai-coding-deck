"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { ContactQR } from "@/components/contact-qr";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tasks = [
  {
    no: "01",
    title: "킷 페이지 QR 접속",
    desc: "프롬프트 템플릿 6종이 담긴 페이지를 미리 열어두세요.",
  },
  {
    no: "02",
    title: "무료 AI 로그인",
    desc: "ChatGPT · Claude · Gemini 중 아무거나 하나 — 로그인까지만 해두면 됩니다.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        Break · 10 min
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-6xl mb-4", anim(index))}>
        휴식 10분
      </h2>
      <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
        쉬는 동안 딱 두 가지만 — 실습 시작하면 바로 달릴 수 있게.
      </p>

      <div className={cn("mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 mb-10", anim(index))} style={{ transitionDelay: "300ms" }}>
        {tasks.map((t) => (
          <div key={t.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 text-left shadow-sm backdrop-blur-sm">
            <p className="font-mono text-xs text-muted-foreground mb-1">{t.no}</p>
            <p className="text-lg font-semibold mb-1">{t.title}</p>
            <p className="text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className={cn("flex flex-col items-center gap-3", anim(index))} style={{ transitionDelay: "450ms" }}>
        <ContactQR path="/health-research/kit" size={140} />
        <p className="font-mono text-xs text-muted-foreground">/health-research/kit</p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S18bBreak";
export default S;
