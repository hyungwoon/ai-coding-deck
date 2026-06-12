"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation, useSectionObserver, useKeyboardNav } from "../deck/hooks";

import S00 from "./sections/00-title";
import S01 from "./sections/01-goal";
import S02 from "./sections/02-tools";
import S03 from "./sections/03-install-desktop";
import S04 from "./sections/04-setup-mcp";
import S05 from "./sections/05-ready-check";
import S06 from "./sections/06-inflection";
import S07 from "./sections/07-data-shift";
import S08 from "./sections/08-traditional-flow";
import S09 from "./sections/09-ai-native-flow";
import S10 from "./sections/10-artifact-to-spec";
import S11 from "./sections/11-mockup-to-prototype";
import S12 from "./sections/12-designer-to-builder";
import S13 from "./sections/13-hw-view-1";
import S14 from "./sections/14-hw-view-2-bridge";
import S15 from "./sections/15-design-system";
import S16 from "./sections/16-traditional-ds";
import S17 from "./sections/17-ai-cant-read-figma";
import S18 from "./sections/18-design-md-standard";
import S19 from "./sections/19-agents-vs-design";
import S20 from "./sections/20-design-md-format";
import S21 from "./sections/21-real-examples";
import S22 from "./sections/22-group2-summary";
import S23 from "./sections/23-atomic-recap";
import S24 from "./sections/24-whats-extracted";
import S25 from "./sections/25-tacit-in-prose";
import S26 from "./sections/26-extract-vs-transform";
import S27 from "./sections/27-so-we-transform";
import S28 from "./sections/28-good-design-md";
import S29 from "./sections/29-layer-split";
import S30 from "./sections/30-component-case";
import S31 from "./sections/31-usage-principles";
import S32 from "./sections/32-ai-readable-format";
import S33 from "./sections/33-common-traps";
import S34 from "./sections/34-checklist";
import S35 from "./sections/35-lab-overview";
import S36 from "./sections/36-step0-audit";
import S37 from "./sections/37-step1-brand";
import S38 from "./sections/38-step2-bx";
import S39 from "./sections/39-step3-product";
import S40 from "./sections/40-step4-ux";
import S41 from "./sections/41-step5-mcp";
import S42 from "./sections/42-step6-connect";
import S43 from "./sections/43-step7-verify";
import S44 from "./sections/44-troubleshooting";
import S45 from "./sections/45-wrap-up";

const sectionLabels = [
  "Title", "목표", "도구", "설치", "MCP 셋업", "준비 체크",
  "변곡점", "데이터", "전통 워크플로", "AI Native", "Artifact→Spec", "Mockup→Proto", "Designer→Builder", "형운 ①", "형운 ② 브릿지",
  "DS란", "전통 DS", "Figma 문제", "DESIGN.md", "AGENTS vs DESIGN", "포맷", "사례", "정리",
  "Atomic 복습", "추출되는 것", "산문 암묵지", "추출 vs 변환", "변환",
  "좋은 DESIGN.md", "계층 분리", "Component Case", "Usage", "AI 형식", "함정", "체크리스트",
  "실습 개요", "STEP0 진단", "STEP1 brand", "STEP2 bx", "STEP3 product", "STEP4 ux", "STEP5 MCP", "STEP6 연결", "STEP7 검증", "트러블슈팅", "마무리",
];

const sectionComponents = [
  S00, S01, S02, S03, S04, S05,
  S06, S07, S08, S09, S10, S11, S12, S13, S14,
  S15, S16, S17, S18, S19, S20, S21, S22,
  S23, S24, S25, S26, S27,
  S28, S29, S30, S31, S32, S33, S34,
  S35, S36, S37, S38, S39, S40, S41, S42, S43, S44, S45,
];

const SECTION_COUNT = sectionComponents.length;

if (sectionComponents.length !== sectionLabels.length) {
  throw new Error("design deck: sectionComponents/sectionLabels length mismatch");
}

export default function DesignDeckPage() {
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
          [data-print-root] section[data-code-slide] {
            height: auto !important;
            min-height: 800px !important;
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
