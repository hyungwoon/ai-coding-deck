"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const GITHUB_CONCEPTS = [
  {
    term: "Repository",
    korean: "레포지토리",
    desc: "프로젝트 하나 = 레포 하나. 폴더·파일·변경 이력이 통째로 들어있는 프로젝트 상자. Claude Code는 이 레포를 통째로 읽고 작업한다.",
  },
  {
    term: "Commit",
    korean: "커밋",
    desc: '변경사항을 "저장점"으로 기록하는 행위. 언제든 이 시점으로 되돌아올 수 있다. AI가 작업할 때마다 커밋을 남기면 실수해도 복구 가능.',
  },
  {
    term: "Branch",
    korean: "브랜치",
    desc: '원본은 건드리지 않고 복사본에서 실험하는 공간. "기능A 브랜치"에서 AI가 작업하고, 잘 되면 메인에 합치는 방식. 실패해도 원본 안전.',
  },
  {
    term: "Pull Request",
    korean: "PR · 머지 요청",
    desc: "브랜치 작업이 끝나면 메인에 합쳐달라는 검토·승인 요청. 변경 내용이 한눈에 보이고, 사람이 확인 후 승인하면 합쳐진다.",
  },
];

const FLOW_STEPS = [
  "새 브랜치 생성",
  "Claude Code 작업 실행",
  "커밋으로 저장",
  "내가 결과 검토",
  "PR 열고 머지",
  "배포",
];

const GithubBasics = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        02-B · 버전 관리
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        GitHub 기초
      </h2>

      {/* 4-card 2x2 grid */}
      <div className={cn("grid grid-cols-2 gap-4 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        {GITHUB_CONCEPTS.map(({ term, korean, desc }) => (
          <div
            key={term}
            className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-border/40 bg-muted/20">
              <p className="font-mono text-xs font-semibold text-primary">{term}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{korean}</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI + GitHub 흐름 tip */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "200ms" }}>
        <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">
          AI 에이전트 + GitHub 실제 흐름
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {FLOW_STEPS.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className={cn(
                "rounded-lg border border-border/40 bg-muted/30 px-3 py-1.5",
                i === FLOW_STEPS.length - 1 && "border-primary/30 bg-primary/5 text-primary font-medium"
              )}>
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <span className="text-muted-foreground/50">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
));
GithubBasics.displayName = "GithubBasics";
export default GithubBasics;
