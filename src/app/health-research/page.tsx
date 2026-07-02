"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation, useSectionObserver, useKeyboardNav } from "../deck/hooks";

import S00 from "./sections/00-title";
import S01 from "./sections/01-takeaways";
import S02 from "./sections/02-workflow-map";
import S03 from "./sections/03-ai-map";
import S04 from "./sections/04-intern";
import S05 from "./sections/05-demo-hallucination";
import S06 from "./sections/06-real-incidents";
import S07 from "./sections/07-do-dont";
import S08 from "./sections/08-five-rules";
import S09 from "./sections/09-recap1";
import S10 from "./sections/10-demo-bad";
import S11 from "./sections/11-five-elements";
import S12 from "./sections/12-demo-good";
import S13 from "./sections/13-fixed-blocks";
import S14 from "./sections/14-source-whitelist";
import S15 from "./sections/15-template-research";
import S16 from "./sections/16-template-cardnews";
import S17 from "./sections/17-template-monitoring";
import S18 from "./sections/18-recap2";
import S18b from "./sections/18b-break";
import S19 from "./sections/19-practice-briefing";
import S20 from "./sections/20-practice-step1";
import S21 from "./sections/21-practice-step2";
import S22 from "./sections/22-practice-step3";
import S23 from "./sections/23-practice-share";
import S24 from "./sections/24-checklist";
import S25 from "./sections/25-three-sentences";
import S26 from "./sections/26-prompt-kit";
import S27 from "./sections/27-qna";
import S28 from "./sections/28-one-month-mission";
import S29 from "./sections/29-closing";

const sectionLabels = [
  "Title",
  "가져갈 것",
  "워크플로우 지도",
  "AI 지도",
  "신입 인턴",
  "Demo · 환각",
  "실제 사고",
  "되는 일 / 안 되는 일",
  "5수칙 = AI 수칙",
  "Part 1 Recap",
  "Demo · Bad",
  "프롬프트 5요소",
  "Demo · Good",
  "고정 블록 3",
  "출처 화이트리스트",
  "T2 · 리서치",
  "T3 · 카드뉴스",
  "T4 · 모니터링",
  "Part 2 Recap",
  "휴식 10분",
  "실습 브리핑",
  "STEP 1 · A/B 비교",
  "STEP 2 · 카드뉴스",
  "STEP 3 · 모니터링",
  "공유",
  "체크리스트",
  "오늘의 세 문장",
  "프롬프트 킷",
  "Q&A",
  "한 달 미션",
  "Closing",
];

const sectionComponents = [
  S00, S01, S02, S03, S04, S05, S06, S07, S08, S09,
  S10, S11, S12, S13, S14, S15, S16, S17, S18, S18b,
  S19, S20, S21, S22, S23, S24, S25, S26, S27, S28, S29,
];

const SECTION_COUNT = sectionComponents.length;

export default function HealthResearchDeckPage() {
  const { activeSection, setActiveSection, anim } = useRevealAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useSectionObserver(containerRef, sectionRefs, setActiveSection);
  useKeyboardNav(activeSection, SECTION_COUNT, sectionRefs);

  const goTo = useCallback((i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={containerRef} data-print-root className="h-screen overflow-y-auto snap-y sm:snap-mandatory">
      <style>{`
        @media print {
          @page { size: 1280px 800px; margin: 0; }
          html, body { height: auto !important; overflow: visible !important; background: var(--background) !important; }
          [data-print-root] { height: auto !important; overflow: visible !important; }
          [data-print-root] section {
            min-height: 800px !important;
            height: 800px !important;
            page-break-after: always !important;
            break-after: page !important;
            scroll-snap-align: none !important;
            display: flex !important;
          }
          [data-print-root] section:last-of-type {
            page-break-after: auto !important;
            break-after: auto !important;
          }
          [data-print-nav] { display: none !important; }
          .animate-bounce { animation: none !important; }
          [class*="opacity-0"] { opacity: 1 !important; transform: none !important; }
          [class*="translate-y-6"] { transform: none !important; }
        }
      `}</style>
      <nav data-print-nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 sm:flex">
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
