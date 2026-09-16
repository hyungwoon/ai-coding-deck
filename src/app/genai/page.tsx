"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation, useSectionObserver, useKeyboardNav } from "../deck/hooks";

import S00 from "./sections/00-title";
import S01 from "./sections/01-thesis";
import S02 from "./sections/02-common-map";
import S03 from "./sections/03-tokens";
import S04 from "./sections/04-embeddings";
import S05 from "./sections/05-attention";
import S06 from "./sections/06-sampling";
import S07 from "./sections/07-training";
import S08 from "./sections/08-context";
import S09 from "./sections/09-llm-practice";
import S10 from "./sections/10-latent-space";
import S11 from "./sections/11-diffusion";
import S12 from "./sections/12-conditioning";
import S13 from "./sections/13-reference-paths";
import S14 from "./sections/14-why-similar";
import S15 from "./sections/15-image-practice";
import S16 from "./sections/16-video-spacetime";
import S17 from "./sections/17-video-problems";
import S18 from "./sections/18-video-conditions";
import S19 from "./sections/19-one-model-cant";
import S20 from "./sections/20-graph-anatomy";
import S21 from "./sections/21-preset-apps";
import S22 from "./sections/22-reproducibility";
import S23 from "./sections/23-evidence";
import S24 from "./sections/24-six-principles";
import S25 from "./sections/25-grammar-3col";
import S26 from "./sections/26-symptom-cause";
import S27 from "./sections/27-closing";

const sectionLabels = [
  "Title",
  "조건 설계",
  "공통 구조",
  "토큰",
  "임베딩",
  "어텐션",
  "표본 추출",
  "학습 3단계",
  "컨텍스트",
  "텍스트 실전",
  "잠재공간",
  "디퓨전",
  "조건화",
  "참조 5경로",
  "왜 닮는가",
  "이미지 실전",
  "시공간",
  "영상 3난제",
  "영상 실전",
  "역할 분업",
  "노드 그래프",
  "프리셋 앱",
  "재현성",
  "실측",
  "6원칙",
  "문법 3열",
  "증상→원인",
  "Closing",
];

const sectionComponents = [
  S00, S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23, S24, S25, S26, S27,
];

const SECTION_COUNT = sectionComponents.length;

export default function GenaiDeckPage() {
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
