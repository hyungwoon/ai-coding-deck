"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation, useSectionObserver, useKeyboardNav } from "../deck/hooks";

import S00 from "./sections/00-title";
import S01 from "./sections/01-takeaways";
import S02 from "./sections/02-ai-role";
import S03 from "./sections/03-three-shifts";
import S04 from "./sections/04-image-tools";
import S05 from "./sections/05-video-tools";
import S06 from "./sections/06-text-mechanism";
import S07 from "./sections/07-image-mechanism";
import S08 from "./sections/08-video-mechanism";
import S09 from "./sections/09-no-memory";
import S10 from "./sections/10-image-anatomy";
import S11 from "./sections/11-character-sheet";
import S12 from "./sections/12-reference-map";
import S13 from "./sections/13-video-anatomy";
import S14 from "./sections/14-reels-3cuts";
import S15 from "./sections/15-cardnews-8";
import S16 from "./sections/16-failures";
import S17 from "./sections/17-constraint-block";
import S18 from "./sections/18-source-whitelist";
import S19 from "./sections/19-verify-3steps";
import S20 from "./sections/20-public-rules";
import S21 from "./sections/21-draft-to-post";
import S22 from "./sections/22-checklist";
import S23 from "./sections/23-closing";

const sectionLabels = [
  "Title",
  "가져갈 것",
  "AI의 자리",
  "달라진 4가지",
  "이미지 도구",
  "영상 도구",
  "텍스트 원리",
  "이미지 원리",
  "영상 원리",
  "기억이 없다",
  "이미지 8칸",
  "캐릭터 시트",
  "참조 기능",
  "영상 프롬프트",
  "릴스 3컷",
  "카드뉴스 8장",
  "실패 7",
  "절주 제약 블록",
  "출처 화이트리스트",
  "검증 3단계",
  "공공 메시지 규칙",
  "초안→게시물",
  "체크리스트",
  "Closing",
];

const sectionComponents = [
  S00, S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23,
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
