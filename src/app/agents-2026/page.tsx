"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation, useSectionObserver, useKeyboardNav } from "../deck/hooks";

import S00 from "./sections/00-title";
import S01 from "./sections/01-premise";
import S02 from "./sections/02-five-filters";
import S03 from "./sections/03-keystone-habit";
import S04 from "./sections/04-context-engineering";
import S05 from "./sections/05-context-rot";
import S06 from "./sections/06-tool-design";
import S07 from "./sections/07-orchestrator-subagent";
import S08 from "./sections/08-eval-golden";
import S09 from "./sections/09-eval-mental";
import S10 from "./sections/10-fs-state-harness";
import S11 from "./sections/11-mcp-sandboxing";
import S12 from "./sections/12-build-orchestration";
import S13 from "./sections/13-build-protocol-memory";
import S14 from "./sections/14-build-obs-sandbox";
import S15 from "./sections/15-build-models";
import S16 from "./sections/16-skip-1";
import S17 from "./sections/17-skip-2";
import S18 from "./sections/18-skip-3";
import S19 from "./sections/19-move-outcome";
import S20 from "./sections/20-move-tracing-eval";
import S21 from "./sections/21-move-product-scope";
import S22 from "./sections/22-move-infra-econ";
import S23 from "./sections/23-signal";
import S24 from "./sections/24-noise";
import S25 from "./sections/25-friday-habit";
import S26 from "./sections/26-watch-list";
import S27 from "./sections/27-conventional-broken";
import S28 from "./sections/28-old-method";
import S29 from "./sections/29-real-skill";
import S30 from "./sections/30-playbook";

const sectionLabels = [
  "Title",
  "전제",
  "5가지 필터",
  "핵심 습관",
  "Context Engineering",
  "Context Rot",
  "Tool Design",
  "Orchestrator-Subagent",
  "Eval & Golden Set",
  "Eval 멘탈모델",
  "FS-as-State / Harness",
  "MCP & Sandboxing",
  "Build · Orchestration",
  "Build · Protocol/Memory",
  "Build · Obs/Sandbox",
  "Build · Models",
  "Skip ①",
  "Skip ②",
  "Skip ③",
  "Move · Outcome",
  "Move · Tracing+Eval",
  "Move · Product/Scope",
  "Move · Infra/Econ",
  "Signal",
  "Noise",
  "Friday 30min",
  "Watch List",
  "사다리가 없다",
  "오래된 방법",
  "진짜 스킬",
  "Playbook",
];

const sectionComponents = [
  S00, S01, S02, S03, S04, S05, S06, S07, S08, S09,
  S10, S11, S12, S13, S14, S15, S16, S17, S18, S19,
  S20, S21, S22, S23, S24, S25, S26, S27, S28, S29, S30,
];

const SECTION_COUNT = sectionComponents.length;

export default function Agents2026DeckPage() {
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
