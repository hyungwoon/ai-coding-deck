"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  {
    num: "01",
    label: "수집",
    desc: "뭐든 일단 Vault에",
    color: "border-primary/30 bg-primary/5",
    textColor: "text-primary",
  },
  {
    num: "02",
    label: "연결 ★",
    desc: "[[링크]] · 태그 · MOC",
    color: "border-primary/50 bg-primary/10",
    textColor: "text-primary",
    star: true,
  },
  {
    num: "03",
    label: "구조화",
    desc: "YAML · 폴더 · Dataview",
    color: "border-border/40 bg-card/80",
    textColor: "text-foreground",
  },
  {
    num: "04",
    label: "AI 연동",
    desc: "내 지식이 AI의 기억",
    color: "border-border/40 bg-card/80",
    textColor: "text-foreground",
  },
];

const methods = [
  {
    tag: "METHOD 1 — 추천",
    title: "MCP 서버 연결",
    desc: "Obsidian Vault를 MCP 서버로 노출하면 Claude Code 등 에이전트가 노트를 직접 읽고·검색·수정할 수 있다.",
    code: "Claude Code\n├─ mcp:// Obsidian Vault\n├─ mcp:// Notion\n└─ mcp:// Slack",
  },
  {
    tag: "METHOD 2 — 간단",
    title: "로컬 파일 직접 참조",
    desc: "Obsidian Vault는 그냥 폴더다. Claude Code에서 경로만 지정하면 .md 파일을 바로 읽는다. CLAUDE.md에 Vault 경로를 명시해두면 매번 알려줄 필요 없음.",
    code: "# CLAUDE.md에 추가\n지식 저장소: ~/Vault/\n참조 시 .md 파일을 검색할 것",
  },
  {
    tag: "METHOD 3 — Obsidian 내장",
    title: "Smart Connections",
    desc: "Obsidian 안에서 노트를 벡터 임베딩하고, AI 채팅으로 Vault 내용을 질문할 수 있는 플러그인. Obsidian 자체가 RAG 시스템이 됨.",
    code: 'Community Plugins에서\n"Smart Connections" 설치\n→ 자동 임베딩 생성\n→ AI Chat 패널 활성화',
  },
];

const S21OntologyPractice = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      온톨로지 실전
    </h2>
    <p className={cn("text-base text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      수집 → 연결 → 구조화 → AI 연동 — 쌓으면 쌓을수록 AI가 똑똑해지는 구조
    </p>

    {/* 4-step workflow strip */}
    <div className={cn("grid grid-cols-4 gap-0 mb-6 rounded-2xl overflow-hidden border border-border/40 shadow-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      {steps.map((step, i) => (
        <div
          key={step.label}
          className={cn(
            "px-5 py-5 border-border/30",
            i < steps.length - 1 && "border-r",
            step.color
          )}
        >
          <p className="text-[10px] font-mono tracking-widest text-muted-foreground mb-2">STEP {step.num}</p>
          <p className={cn("text-sm font-bold mb-1", step.textColor)}>{step.label}</p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
          {step.star && (
            <span className="inline-block mt-2 rounded-full px-2 py-0.5 text-[9px] font-semibold bg-primary/20 text-primary">핵심</span>
          )}
        </div>
      ))}
    </div>

    {/* AI integration methods */}
    <div className={cn("grid grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "250ms" }}>
      {methods.map((m) => (
        <div key={m.title} className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
          <div className="bg-muted/30 border-b border-border/40 px-4 py-3">
            <p className="text-[9px] font-mono tracking-widest text-primary uppercase mb-1">{m.tag}</p>
            <p className="text-sm font-semibold">{m.title}</p>
          </div>
          <div className="px-4 py-3">
            <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">{m.desc}</p>
            <div className="rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-muted-foreground leading-relaxed whitespace-pre-line">
              {m.code}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S21OntologyPractice.displayName = "S21OntologyPractice";
export default S21OntologyPractice;
