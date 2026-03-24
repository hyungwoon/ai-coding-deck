"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tips = [
  { n: "31", t: "rules/ path 스코핑", d: "paths: [\"**/*.ts\"] → 해당 파일 작업 시에만 규칙 활성화" },
  { n: "32", t: "@import로 참조", d: "@docs/guide.md — CLAUDE.md 비대화 방지, 필요 시만 로드" },
  { n: "33", t: "/permissions 허용 목록", d: "npm run lint 매번 승인 클릭 불필요하게 설정" },
  { n: "34", t: "/sandbox 격리 실행", d: "OS 레벨 격리. 프로젝트 디렉토리만 쓰기 허용" },
  { n: "35", t: "커스텀 서브에이전트", d: ".claude/agents/에 보안 리뷰어(Opus), 빠른 검색(Haiku) 등 저장" },
  { n: "36", t: "MCP 서버 선택", d: "Playwright(브라우저), PostgreSQL(DB), Slack(버그 리포트), Figma" },
  { n: "37", t: "출력 스타일 설정", d: "/config에서 설명적/간결/기술적 선택. 커스텀도 가능" },
  { n: "38", t: "Hooks > CLAUDE.md", d: "CLAUDE.md ~80% 준수, 훅은 100%. 포맷/보안은 훅으로" },
  { n: "39", t: "PostToolUse 자동 포맷", d: "Edit/Write 후 Prettier 자동 실행 훅" },
  { n: "40", t: "PreToolUse 위험 차단", d: "rm -rf, drop table, truncate 패턴 사전 차단 훅" },
];

const SlideTips4 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        13 · 팁 31-40
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
        실전 팁 50선
      </h2>
      <p className={cn("text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "50ms" }}>
        자동화 & 훅
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

SlideTips4.displayName = "SlideTips4";
export default SlideTips4;
