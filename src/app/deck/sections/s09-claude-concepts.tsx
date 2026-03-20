"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const concepts = [
  {
    emoji: "📄",
    title: "CLAUDE.md",
    desc: "프로젝트 루트에 두는 에이전트 행동 지침서. 세션 시작 시 자동 로드.",
  },
  {
    emoji: "🔀",
    title: "서브 에이전트",
    desc: "메인 에이전트가 하위 태스크를 별도 에이전트에게 위임. 병렬 실행으로 속도 향상.",
  },
  {
    emoji: "⚡",
    title: "커맨드 (슬래시)",
    desc: "/로 시작하는 단축 명령어. 자주 쓰는 프롬프트를 한 단어로 호출.",
  },
  {
    emoji: "🪝",
    title: "훅 (Hooks)",
    desc: "특정 이벤트 발생 시 자동으로 실행되는 스크립트. 파일 저장 후 린트, 커밋 전 테스트 등.",
  },
  {
    emoji: "🧩",
    title: "스킬 (Skills)",
    desc: "반복 작업 방식을 파일로 정의해두는 재사용 가능한 지식 모듈.",
  },
  {
    emoji: "🔗",
    title: "MCP 서버",
    desc: "Claude Code가 Notion·Slack·GitHub 등 외부 앱을 직접 읽고 쓸 수 있게 해주는 연결 프로토콜.",
  },
];

const S09ClaudeConcepts = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      Claude Code 핵심 개념
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      단순한 CLI 도구가 아닌, 작업 흐름 전체를 설계하는 프레임워크
    </p>

    <div className={cn("grid grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {concepts.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm flex flex-col gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{c.emoji}</span>
            <span className="font-mono text-xs font-semibold text-primary">{c.title}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S09ClaudeConcepts.displayName = "S09ClaudeConcepts";
export default S09ClaudeConcepts;
