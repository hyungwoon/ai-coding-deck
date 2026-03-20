"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const same = [
  { icon: "💻", label: "컴퓨터" },
  { icon: "🤖", label: "AI 도구" },
  { icon: "🌐", label: "인터넷" },
];

const diff = [
  { icon: "🎯", label: "어떤 문제를 볼 것인가" },
  { icon: "🧠", label: "무엇을 알고 있는가" },
  { icon: "🔥", label: "무엇을 만들려 하는가" },
];

const eras = [
  {
    tag: "과거",
    title: "컴퓨터를 쓴다",
    desc: "한때 스펙이었다. 워드·엑셀 자격증이 경쟁력이었다. 지금은 공기. 도구는 반드시 평준화된다.",
    highlight: false,
  },
  {
    tag: "현재",
    title: "AI를 쓴다",
    desc: "지금은 특별해 보인다. 빠르게 평준화된다. 이 공부는 절대 우위가 아니라 기본기를 갖추는 것.",
    highlight: false,
  },
  {
    tag: "언제나",
    title: "본질을 안다",
    desc: "무엇을 만들지, 왜 만드는지. 이 질문은 AI가 대신할 수 없다. 여기서 격차가 만들어진다.",
    highlight: true,
  },
];

const SlidePhilosophyGap = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        10 · 도구의 철학
      </p>
      <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-6", anim(index))}>
        도구는 같다. 격차는 어디서 오는가
      </h2>

      {/* 같은 것 vs 다른 것 */}
      <div
        className={cn("grid gap-0 items-center mb-5", anim(index))}
        style={{ gridTemplateColumns: "1fr 48px 1fr", transitionDelay: "120ms" }}
      >
        {/* 같은 것 */}
        <div>
          <p className="font-mono text-sm text-muted-foreground tracking-widest text-center mb-3">둘 다 갖고 있는 것</p>
          <div className="flex flex-col gap-2">
            {same.map(({ icon, label }) => (
              <div key={label} className="rounded-xl border border-border/40 bg-card/80 py-3 px-4 text-sm text-center backdrop-blur-sm">
                {icon} {label}
              </div>
            ))}
          </div>
        </div>

        {/* ≠ */}
        <div className="text-center text-2xl text-muted-foreground">≠</div>

        {/* 다른 것 */}
        <div>
          <p className="font-mono text-sm text-primary tracking-widest text-center mb-3">격차를 만드는 것</p>
          <div className="flex flex-col gap-2">
            {diff.map(({ icon, label }) => (
              <div key={label} className="rounded-xl border border-primary/20 bg-primary/5 py-3 px-4 text-sm text-center text-primary">
                {icon} {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 era cards */}
      <div className={cn("grid grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "220ms" }}>
        {eras.map(({ tag, title, desc, highlight }) => (
          <div
            key={tag}
            className={cn(
              "rounded-2xl border overflow-hidden shadow-sm",
              highlight
                ? "border-primary/20 bg-primary/5"
                : "border-border/40 bg-card/80 backdrop-blur-sm"
            )}
          >
            <div className={cn("px-4 py-3 border-b", highlight ? "border-primary/15 bg-primary/8" : "border-border/40")}>
              <p className={cn("font-mono text-sm tracking-widest mb-1", highlight ? "text-primary" : "text-muted-foreground")}>
                {tag}
              </p>
              <p className={cn("text-sm font-bold", highlight ? "text-primary" : "")}>{title}</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));
SlidePhilosophyGap.displayName = "SlidePhilosophyGap";
export default SlidePhilosophyGap;
