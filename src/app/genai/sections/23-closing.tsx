"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { ContactQR } from "@/components/contact-qr";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const sentences = [
  { no: "01", text: "생성은 확률이다 — 그래서 자신 있게 틀리고, 매번 다르게 그린다." },
  { no: "02", text: "일관성은 기억을 밖에서 넣는 일이다 — 시트 · 고정 블록 · 다시 굴리기." },
  { no: "03", text: "공공 메시지의 숫자는 AI가 아니라 출처에서 온다 — 검증하는 사람이 서포터즈다." },
];

const qrs = [
  { label: "프롬프트 킷", path: "/genai/kit" },
  { label: "강사 연락처", path: "/contact" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        Closing · Q&A
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-6xl", anim(index))}>
        같은 얼굴은 참조가,
        <br />
        <span className="text-primary">맞는 사실은 여러분이</span>
      </h2>

      <div className={cn("mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left", anim(index))} style={{ transitionDelay: "150ms" }}>
        {sentences.map((s) => (
          <div key={s.no} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="font-mono text-xs text-primary mb-2">{s.no}</p>
            <p className="text-sm font-semibold leading-snug">{s.text}</p>
          </div>
        ))}
      </div>

      <div className={cn("mt-10 flex flex-wrap items-start justify-center gap-10", anim(index))} style={{ transitionDelay: "300ms" }}>
        {qrs.map((q) => (
          <div key={q.path} className="flex flex-col items-center gap-3">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{q.label}</p>
            <ContactQR path={q.path} size={116} />
            <p className="font-mono text-xs text-muted-foreground/60">{q.path}</p>
          </div>
        ))}
      </div>

      <p className={cn("mt-10 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "300ms" }}>
        형운 · AI Product Manager
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S23Closing";
export default S;
