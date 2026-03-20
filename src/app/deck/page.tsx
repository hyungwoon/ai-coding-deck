"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation, useSectionObserver, useKeyboardNav } from "./hooks";

import S00 from "./sections/00-title";
import S01 from "./sections/01a-llm-tokenization";
import S02 from "./sections/01b-vector-context";
import S03 from "./sections/01c-reasoning-output";
import S04 from "./sections/02a-llm-vs-agent";
import S05 from "./sections/02b-github-basics";
import S05b from "./sections/s05b-dev-basics";
import S05c from "./sections/s05c-mcp-api-cli";
import S06 from "./sections/s06-ecosystem";
import S07 from "./sections/s07-evolution-early";
import S08 from "./sections/s08-evolution-advanced";
import S09 from "./sections/s09-claude-concepts";
import S10 from "./sections/s10-vibe-loop";
import S11 from "./sections/s11-anti-patterns";
import S12 from "./sections/s12-harness";
import S12b from "./sections/s12b-harness-real";
import S12c from "./sections/s12c-harness-biz";
import S13 from "./sections/s13-harness-maturity";
import S14 from "./sections/s14-editor-vs-agent";
import S15 from "./sections/s15-cost";
import S16 from "./sections/s16-multimodal";
import S17 from "./sections/s17-ontology-def";
import S18 from "./sections/s18-ontology-elements";
import S18b from "./sections/s18b-tacit-knowledge";
import S18c from "./sections/s18c-ai-native";
import S19 from "./sections/s19-rag";
import S20 from "./sections/s20-obsidian";
import S21 from "./sections/s21-ontology-practice";
import S21b from "./sections/s21b-security";
import S22 from "./sections/s22-rlhf-rlvr";
import S23 from "./sections/s23-context-moat";
import S24 from "./sections/s24-moat-diagram";
import S25 from "./sections/s25-moat-experts";
import S26 from "./sections/s26-philosophy";
import S27 from "./sections/s27-philosophy-gap";
import S28 from "./sections/s28-getting-started";
import S29 from "./sections/s29-install";
import S30 from "./sections/s30-ultrawork";
import S31 from "./sections/s31-contact";
import S32 from "./sections/s32-practice";

const SECTION_COUNT = 40;

const sectionLabels = [
  "Title", "LLM 정의", "벡터 임베딩", "추론과 출력",
  "LLM vs Agent", "GitHub", "개발 구조", "API·CLI·MCP", "생태계", "진화 초기",
  "진화 심화", "Claude Code", "바이브 코딩", "안티패턴",
  "하네스", "코딩 하네스", "비즈니스 하네스", "하네스 성숙도", "에디터 vs 에이전트", "비용",
  "멀티모달", "온톨로지", "4요소", "암묵지", "AI Native", "RAG",
  "Obsidian", "온톨로지 실전", "보안", "RLHF→RLVR", "컨텍스트",
  "해자", "전문가 시각", "도구의 철학", "격차",
  "시작 가이드", "설치", "Ultrawork", "Contact", "실습 과제",
];

const sectionComponents = [
  S00, S01, S02, S03, S04, S05, S05b, S05c, S06, S07,
  S08, S09, S10, S11, S12, S12b, S12c, S13, S14, S15,
  S16, S17, S18, S18b, S18c, S19, S20, S21, S21b, S22, S23,
  S24, S25, S26, S27, S28, S29, S30, S31, S32,
];

export default function AiCodingDeckPage() {
  const { activeSection, setActiveSection, anim } = useRevealAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useSectionObserver(containerRef, sectionRefs, setActiveSection);
  useKeyboardNav(activeSection, SECTION_COUNT, sectionRefs);

  const goTo = useCallback((i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto snap-y sm:snap-mandatory">
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 sm:flex">
        <div className="relative flex flex-col items-center gap-1">
          <div className="absolute inset-y-3 w-px bg-border/20" />
          {sectionLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => goTo(i)}
              className="group relative z-10 p-1"
              aria-label={`Go to ${label}`}
            >
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-card/90 px-2 py-0.5 text-[10px] font-medium opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                {label}
              </span>
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  activeSection === i
                    ? "size-2.5 bg-primary shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    : "size-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60",
                )}
              />
            </button>
          ))}
        </div>
      </nav>

      {sectionComponents.map((Component, i) => (
        <Component
          key={sectionLabels[i]}
          ref={(el: HTMLElement | null) => { sectionRefs.current[i] = el; }}
          anim={anim}
          index={i}
        />
      ))}
    </div>
  );
}
