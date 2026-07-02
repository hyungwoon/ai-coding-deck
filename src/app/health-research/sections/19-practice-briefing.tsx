"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { ContactQR } from "@/components/contact-qr";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const guides = [
  { label: "TOOL", title: "무료 AI 아무거나", desc: "ChatGPT·Claude·Gemini 중 아무거나 — 모델이 달라도 공식은 같다." },
  { label: "PAIR", title: "개인 실습 + 옆사람 페어 OK", desc: "막히면 손 들지 말고 옆 사람 화면을 보세요. 같이 풀어도 됩니다." },
];

const topics = [
  "유산균은 공복에 먹어야 한다?",
  "물 하루 2L 꼭 마셔야 하나?",
  "카페인과 수면",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div className={cn("flex items-center gap-3 mb-3", anim(index))}>
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Part 3 · 실습</p>
      <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs">총 40분</span>
    </div>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      스마트폰 하나면 <span className="text-muted-foreground">충분하다</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      준비물은 킷 페이지와 무료 AI 하나 — 지금 QR을 찍고 시작하세요.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "300ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground mb-1">ACCESS</p>
        <p className="text-lg font-semibold mb-3">QR로 킷 페이지 접속</p>
        <div className="flex items-center gap-4">
          <ContactQR path="/health-research/kit" size={96} />
          <p className="font-mono text-sm text-muted-foreground break-all">/health-research/kit</p>
        </div>
      </div>
      {guides.map((g) => (
        <div key={g.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-1">{g.label}</p>
          <p className="text-lg font-semibold mb-2">{g.title}</p>
          <p className="text-sm text-muted-foreground">{g.desc}</p>
        </div>
      ))}
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground mb-1">TOPIC</p>
        <p className="text-lg font-semibold mb-2">주제 3택 1</p>
        <ul className="space-y-1.5">
          {topics.map((t) => (
            <li key={t} className="text-sm text-muted-foreground">· {t}</li>
          ))}
        </ul>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S19PracticeBriefing";
export default S;
