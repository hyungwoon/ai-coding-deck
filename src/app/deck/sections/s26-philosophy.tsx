"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const timeline = [
  { icon: "✒️", label: "펜 · 종이", era: "~1900s", note: "인쇄가 특권이었다" },
  { icon: "⌨️", label: "타자기 · 워드", era: "1990s", note: "컴활 자격증이 스펙이었다" },
  { icon: "💻", label: "컴퓨터 · 인터넷", era: "2000s~", note: "지금은 공기처럼 당연" },
  { icon: "🤖", label: "AI 에이전트", era: "지금 → 곧", note: "곧 공기처럼 당연해진다", highlight: true },
];

const SlidePhilosophy = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className="text-center">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6", anim(index))}>
        10 · 도구의 철학
      </p>

      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-2 leading-snug", anim(index))}>
        글쓴이가 펜을 버렸다고
      </h2>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-primary leading-snug", anim(index))} style={{ transitionDelay: "60ms" }}>
        그의 글이 사라지지 않는다
      </h2>
      <p className={cn("text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed", anim(index))} style={{ transitionDelay: "120ms" }}>
        종이 → 타자기 → 워드프로세서 → AI. 도구는 계속 바뀌었지만,
        무엇을 쓸지 결정한 것은 언제나 사람이었다.
      </p>

      {/* Timeline */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm mb-0", anim(index))} style={{ transitionDelay: "180ms" }}>
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-5">
          도구의 진화 — 바뀐 것과 바뀌지 않은 것
        </p>
        <div className="grid grid-cols-4 gap-0 relative mb-5">
          {/* connector line */}
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border/60 z-0" />
          {timeline.map(({ icon, label, era, note, highlight }) => (
            <div key={label} className="text-center px-2 relative z-10">
              <div
                className={cn(
                  "w-12 h-12 rounded-full border flex items-center justify-center mx-auto mb-2.5 text-xl",
                  highlight
                    ? "bg-primary/15 border-primary/40"
                    : "bg-card/60 border-border/40"
                )}
              >
                {icon}
              </div>
              <p className={cn("text-xs font-semibold mb-0.5", highlight ? "text-primary" : "")}>{label}</p>
              <p className={cn("font-mono text-[10px] mb-1.5", highlight ? "text-primary" : "text-muted-foreground")}>{era}</p>
              <p className="text-[11px] text-muted-foreground leading-snug">{note}</p>
            </div>
          ))}
        </div>

        {/* 불변의 것 */}
        <div className="rounded-xl border border-dashed border-border/60 bg-card/40 px-5 py-3 text-center">
          <span className="text-xs text-muted-foreground">도구가 바뀌어도 바뀌지 않은 것 → </span>
          <span className="text-sm font-semibold">무엇을 말할지, 왜 말할지, 누구를 위한지</span>
        </div>
      </div>
    </div>
  </SectionShell>
));
SlidePhilosophy.displayName = "SlidePhilosophy";
export default SlidePhilosophy;
