"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const FILES = [
  { name: "Brand.md", desc: "시각 아이덴티티 — 로고·색·타이포" },
  { name: "BX.md", desc: "보이스·톤 — Use/Avoid" },
  { name: "Product.md", desc: "Atomic 컴포넌트 계층" },
  { name: "UX.md", desc: "UX 원칙·인터랙션" },
];

const BUNDLE = [
  { path: "AGENTS.md", desc: "AI 진입점" },
  { path: "design.json", desc: "토큰 단일 contract" },
  { path: "design.tokens.json", desc: "DTCG 토큰" },
  { path: "design.txt", desc: "LLM 친화 평문" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      실제 사례 · 라이브
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      NMWC — <span className="text-primary">지금 돌아가는</span> DESIGN.md
    </h2>
    <p className={cn("text-muted-foreground mb-6 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      오늘 실습 강사 예제는 가짜가 아니다 — {" "}
      <a href="https://nmwc.ai.kr" target="_blank" rel="noopener" className="text-foreground underline decoration-primary/50 underline-offset-4 hover:decoration-primary">
        nmwc.ai.kr
      </a>
      에서 지금 라이브로 돌아간다. AI에게 줄 수 있는 완성형 DESIGN.md를 직접 열어보라.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
      <div className={cn("rounded-2xl border border-border/40 bg-card/60 p-5", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">① 소스 — repo의 DESIGN.md</p>
        <div className="space-y-2">
          {FILES.map((f) => (
            <div key={f.name} className="flex items-baseline gap-2 text-sm">
              <span className="font-mono text-primary">{f.name}</span>
              <span className="text-xs text-muted-foreground">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">② 배포 — 정적 번들 (설치 0)</p>
        <div className="space-y-2">
          {BUNDLE.map((b) => (
            <div key={b.path} className="flex items-baseline gap-2 text-sm">
              <span className="font-mono text-foreground/90">nmwc.ai.kr/{b.path}</span>
              <span className="text-xs text-muted-foreground">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="font-semibold mb-1">별도 서버 없이도 된다</p>
      <p className="text-muted-foreground">
        DESIGN.md를 <span className="text-foreground">repo에 두면</span> Claude Desktop이 직접 읽고, {" "}
        <span className="text-foreground">URL로 publish하면</span> 어떤 AI든 fetch한다. 별도 서버·연동 불필요 — 파일이 곧 계약서다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S21bNmwcLive";
export default S;
