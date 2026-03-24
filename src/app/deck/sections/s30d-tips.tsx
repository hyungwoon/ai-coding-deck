"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tips = [
  { n: "01", t: "cc 별칭 설정", d: "alias cc='claude --dangerously-skip-permissions' → 권한 확인 생략" },
  { n: "02", t: "! 접두어 실행", d: "!git status 입력 → 즉시 실행, 결과가 컨텍스트에 포함" },
  { n: "03", t: "Esc 중단 / Esc+Esc 되감기", d: "체크포인트에서 코드·대화 복원. 40% 확신도 시도 가능" },
  { n: "04", t: "자동 검증 루프 제공", d: "테스트·린터를 프롬프트에 포함 → Claude가 스스로 수정 (2-3배 품질)" },
  { n: "05", t: "코드 인텔리전스 플러그인", d: "LSP로 편집마다 자동 진단 — 가장 임팩트 높은 플러그인" },
  { n: "06", t: "gh CLI 활용", d: "PR·이슈·코멘트를 MCP 없이 처리. 컨텍스트 효율적" },
  { n: "07", t: "ultrathink 키워드", d: "복잡한 아키텍처·디버깅에 심층 사고 트리거" },
  { n: "08", t: "Skills로 온디맨드 지식", d: "CLAUDE.md와 달리 관련 있을 때만 로드. 컨텍스트 경량 유지" },
  { n: "09", t: "폰에서 원격 조작", d: "claude remote-control → claude.ai/code나 앱에서 접속" },
  { n: "10", t: "1M 토큰 컨텍스트", d: "/model opus[1m] 또는 sonnet[1m]으로 전환" },
];

const SlideTips1 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        13 · 팁 1-10
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
        실전 팁 50선
      </h2>
      <p className={cn("text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "50ms" }}>
        기본 설정 & 단축키
      </p>
      <div className={cn("grid gap-2 sm:grid-cols-2", anim(index))} style={{ transitionDelay: "100ms" }}>
        {tips.map((t) => (
          <div key={t.n} className="rounded-xl border border-border/40 bg-card/80 p-3 shadow-sm backdrop-blur-sm flex items-start gap-3">
            <span className="font-mono text-xs font-bold text-primary/60 mt-0.5 shrink-0">{t.n}</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{t.t}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));

SlideTips1.displayName = "SlideTips1";
export default SlideTips1;
