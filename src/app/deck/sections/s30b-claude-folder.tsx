"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const folders = [
  { name: "CLAUDE.md", desc: "AI의 행동 매뉴얼 — 빌드 명령, 컨벤션, 아키텍처", badge: "핵심" },
  { name: "rules/", desc: "관심사별 분리된 모듈 규칙 — 특정 파일에서만 활성화 가능", badge: "규칙" },
  { name: "skills/", desc: "자동 트리거 워크플로우 — 매칭 시 Claude가 스스로 호출", badge: "스킬" },
  { name: "commands/", desc: "수동 슬래시 커맨드 — /review, /deploy 등", badge: "커맨드" },
  { name: "agents/", desc: "전문 서브에이전트 — 격리된 컨텍스트에서 작업 후 보고", badge: "에이전트" },
  { name: "settings.json", desc: "권한 allow/deny + 훅 설정", badge: "설정" },
];

const SlideClaude = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        12 · 설정
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-4", anim(index))}>
        .claude/ 폴더 해부
      </h2>
      <p className={cn("text-muted-foreground mb-8 max-w-2xl", anim(index))} style={{ transitionDelay: "50ms" }}>
        Claude Code의 조종석. 프로젝트 레벨(팀 공유)과 글로벌 ~/.claude/(개인 설정) 두 곳이 있다.
      </p>

      <div className={cn("grid gap-3 sm:grid-cols-2", anim(index))} style={{ transitionDelay: "100ms" }}>
        {folders.map((f) => (
          <div key={f.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1">
              <code className="font-mono text-sm font-bold text-primary">{f.name}</code>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">{f.badge}</span>
            </div>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className={cn("mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4", anim(index))} style={{ transitionDelay: "200ms" }}>
        <p className="text-sm font-semibold text-yellow-400 mb-1">CLAUDE.md 200줄 리밋</p>
        <p className="text-xs text-muted-foreground">
          200줄 넘으면 지시 준수율이 떨어진다. 핵심만 남기고, 나머지는 rules/로 분리하라.
        </p>
      </div>
    </div>
  </SectionShell>
));

SlideClaude.displayName = "SlideClaude";
export default SlideClaude;
