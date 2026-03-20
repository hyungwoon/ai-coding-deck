"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const execModes = [
  { cmd: "autopilot", desc: "아이디어 → 코드 완전 자율 실행" },
  { cmd: "ralph", desc: "verify/fix 루프 — 완료까지 반복" },
  { cmd: "ulw", desc: "최대 병렬 실행 (ultrawork)" },
  { cmd: "/team N:executor", desc: "공유 태스크 리스트 협업 에이전트" },
  { cmd: "ccg", desc: "트리플 모델 오케스트레이션 (Claude + Codex + Gemini)" },
];

const vibeSteps = [
  { phase: "01 준비", title: "CLAUDE.md 작성", tip: "프로젝트 맥락·규칙·금지사항 선언 + 공식 문서 컨텍스트 등록 (hallucination 방지)" },
  { phase: "02 플래닝", title: "ultrathink 깊은 추론", tip: "요구사항 구체화 + 단계 분해 + 엣지케이스 정의 — 시간의 90%를 여기에" },
  { phase: "03 점검", title: "플랜 확인 후 승인", tip: '"플랜 출력해줘" → 방향 검증 → 구현 전에 반드시 멈춤' },
  { phase: "04 구현", title: "autopilot / ralph 자율 실행", tip: "서브에이전트 자동 위임 (리서치·코드·테스트) + /team 병렬 조율" },
  { phase: "05 개선", title: "verify/fix 루프 반복", tip: "ralph 자동 검증 → 문서 업데이트 → Phase 2로 반복하며 품질 향상" },
  { phase: "06 커밋", title: "컨벤셔널 커밋 + 맥락 보존", tip: "변경사항 리뷰 → 커밋 → 다음 세션을 위한 CLAUDE.md 갱신" },
];

const SlideUltrawork = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        11 · 사용법
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-5", anim(index))}>
        실행 모드 &amp; 바이브 코딩
      </h2>

      {/* Top half: 5가지 실행 모드 */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">oh-my-claudecode — 5가지 실행 모드</p>
        <div className="flex flex-col gap-2">
          {execModes.map(({ cmd, desc }) => (
            <div key={cmd} className="flex items-center gap-3">
              <code className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded min-w-44 shrink-0">{cmd}</code>
              <span className="text-xs text-muted-foreground">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom half: 바이브 코딩 6단계 */}
      <div className={cn("", anim(index))} style={{ transitionDelay: "200ms" }}>
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">바이브 코딩 프로세스 — 6단계</p>
        <div className="grid grid-cols-3 gap-3">
          {vibeSteps.map(({ phase, title, tip }) => (
            <div key={phase} className="rounded-xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-1">{phase}</p>
              <p className="text-xs font-semibold text-foreground mb-1">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
));
SlideUltrawork.displayName = "SlideUltrawork";
export default SlideUltrawork;
