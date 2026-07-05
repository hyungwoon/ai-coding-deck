"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { ContactQR } from "@/components/contact-qr";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const qrs = [
  { label: "프롬프트 킷", path: "/health-research/kit" },
  { label: "강사 연락처", path: "/contact" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        Closing
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-6xl", anim(index))}>
        AI는 초안을 대신하지만,
        <br />
        <span className="text-primary">여러분의 의심을 대신하지 못한다</span>
      </h2>
      <p className={cn("mt-6 text-lg text-muted-foreground", anim(index))} style={{ transitionDelay: "150ms" }}>
        검증하는 사람이 지킴이다.
      </p>

      <div className={cn("mt-12 flex flex-wrap items-start justify-center gap-10", anim(index))} style={{ transitionDelay: "300ms" }}>
        {qrs.map((q) => (
          <div key={q.path} className="flex flex-col items-center gap-3">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{q.label}</p>
            <ContactQR path={q.path} size={116} />
            <p className="font-mono text-xs text-muted-foreground/60">{q.path}</p>
          </div>
        ))}
      </div>

      <p className={cn("mt-12 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "300ms" }}>
        형운 · AI Product Manager
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S29Closing";
export default S;
