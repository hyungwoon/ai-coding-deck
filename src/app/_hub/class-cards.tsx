"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const CLASSES = [
  {
    href: "/deck",
    tag: "Foundations",
    title: "AI는 어떻게 작동하는가",
    sub: "LLM · 에이전트 · 온톨로지 · 해자",
    count: 48,
  },
  {
    href: "/agents-2026",
    tag: "Agents",
    title: "AI Agents 2026",
    sub: "무엇을 배우고 만들고 버릴 것인가",
    count: 31,
  },
  {
    href: "/design",
    tag: "Design",
    title: "AI Native Design",
    sub: "Design System에서 DESIGN.md로",
    count: 46,
    featured: true,
  },
];

export function ClassCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {CLASSES.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className={cn(
            "group flex flex-col rounded-2xl border bg-card/80 p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
            c.featured ? "border-primary/50" : "border-border/40",
          )}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {c.tag}
          </p>
          <h2 className="mt-3 text-xl font-bold tracking-tight">{c.title}</h2>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.sub}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-muted-foreground/60">{c.count} slides</span>
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
