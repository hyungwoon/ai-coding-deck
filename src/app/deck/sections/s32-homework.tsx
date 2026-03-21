"use client";
import { forwardRef, useState, useCallback } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

const SETUP_PROMPT = `아래 도구와 스킬을 순서대로 전부 설치해줘.

## 1. oh-my-claudecode (OMC)
- GitHub: https://github.com/Yeachan-Heo/oh-my-claudecode
- 멀티 에이전트 오케스트레이션 — 여러 AI 에이전트를 동시에 조율하는 레이어
- /install-github Yeachan-Heo/oh-my-claudecode 로 설치

## 2. oh-my-hwclaude
- GitHub: https://github.com/hyungwoon/oh-my-hwclaude
- 파일 편집 정확도를 10배 높여주는 코딩 하네스
- git clone 후 install.sh 실행 (글로벌: ~/.claude/oh-my-hwclaude)

## 3. business-ai-team
- GitHub: https://github.com/hyungwoon/business-ai-team
- 마케팅·영업·법무·재무·HR 등 16명의 비즈니스 전문가 에이전트 팀
- git clone 후 install.sh 실행 (글로벌: ~/.claude/business-ai-team)

## 4. 필수 스킬
다음 7개 스킬을 설치해줘:
- brainstorming — 구현 전에 요구사항을 먼저 탐색
- writing-plans — 스펙 기반 단계별 구현 계획 생성
- executing-plans — 작성된 계획을 순서대로 실행
- verification-before-completion — 완료 전 실제 동작 검증
- using-superpowers — 요청에 맞는 스킬을 자동 탐색·실행
- humanizer — AI가 쓴 글에서 AI 느낌을 제거하고 자연스러운 문체로 다듬기
- ui-ux-pro-max — UI/UX 디자인 + 구현 (50가지 스타일, 21개 팔레트, React/Next.js/Tailwind 등)

전부 끝나면 설치된 목록 보여줘.`;

interface P { anim: (i: number) => string; index: number; }

const assignments = [
  { name: "신지환", task: "AI로 하네스 스터디", format: "5분 스피치" },
  { name: "김자현", task: "본인의 온톨로지 만들기", format: "5분 스피치" },
  { name: "조윤진", task: "내 업무의 암묵지/명시지 정리", format: "5분 스피치" },
  { name: "고지영", task: "AI로 RLVR, RLHF 개념 스터디", format: "5분 스피치" },
  { name: "모효빈", task: "오늘 강의 내용 다시 설명", format: "5분 요약 아티클" },
  { name: "유재형", task: "알아서 와우할만한 거 하나 가져오기", format: "자유" },
  { name: "장윤주", task: "PDF를 온톨로지화", format: "5분 스피치" },
  { name: "이용진", task: "케로셀 학습 → 디자인 스킬 만들기 (디자인 시스템화 고도화)", format: "5분 스피치" },
];

const S32Homework = forwardRef<HTMLElement, P>(({ anim, index }, ref) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(SETUP_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      1주차 과제
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      환경 세팅 + 개인별 과제
    </p>

    {/* 환경 세팅 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "120ms" }}>
      <p className="text-sm font-bold mb-3">환경 세팅 — 터미널에서 두 단계</p>

      <div className="mb-4">
        <p className="text-xs text-muted-foreground/50 uppercase tracking-wider mb-1.5">Step 1. Bypass 모드로 실행</p>
        <code className="block text-sm bg-muted/30 border border-border/40 rounded-lg px-3 py-2 font-mono text-foreground/90">
          claude --dangerously-skip-permissions
        </code>
        <p className="text-xs text-muted-foreground mt-1">승인 없이 자율 실행. 실습 환경에서만 사용.</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">Step 2. 아래 프롬프트를 그대로 붙여넣기</p>
          <button
            onClick={handleCopy}
            className={cn(
              "rounded-md border px-3 py-1 text-xs font-medium transition-all",
              copied
                ? "border-green-500/40 bg-green-500/10 text-green-400"
                : "border-border/40 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="text-sm bg-muted/30 border border-border/40 rounded-lg px-3 py-2 font-mono text-foreground/90 space-y-1 leading-relaxed">
          <p className="text-muted-foreground"># Claude Code가 알아서 전부 설치합니다</p>
          <p>아래 도구와 스킬을 순서대로 전부 설치해줘.</p>
          <p className="mt-2 text-muted-foreground">## 도구</p>
          <p>1. OMC — /install-github Yeachan-Heo/oh-my-claudecode</p>
          <p>2. oh-my-hwclaude — git clone ~/.claude/oh-my-hwclaude</p>
          <p>3. business-ai-team — git clone ~/.claude/business-ai-team</p>
          <p className="mt-2 text-muted-foreground">## 스킬 7개</p>
          <p>brainstorming, writing-plans, executing-plans,</p>
          <p>verification-before-completion, using-superpowers,</p>
          <p>humanizer, ui-ux-pro-max</p>
        </div>
      </div>
    </div>

    {/* 사용법 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "200ms" }}>
      <p className="text-sm font-bold mb-3">핵심 사용법</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
        {[
          { cmd: "ultrathink", desc: "깊은 추론", ex: "ultrathink 설계해줘" },
          { cmd: "ulw", desc: "최대 병렬 실행", ex: "ulw 3가지 병렬로" },
          { cmd: "/superpowers", desc: "스킬 자동 탐색", ex: "/superpowers 리팩토링" },
          { cmd: "/ask", desc: "전문가 질문", ex: "/ask 마케팅 분석" },
          { cmd: "/route", desc: "자동 라우팅", ex: "/route OKR 수립" },
          { cmd: "/team", desc: "팀 목록", ex: "/team" },
        ].map((item) => (
          <div key={item.cmd} className="rounded-lg border border-border/40 bg-muted/20 px-3 py-2">
            <code className="font-mono font-bold text-foreground/90">{item.cmd}</code>
            <span className="text-muted-foreground ml-1.5">— {item.desc}</span>
          </div>
        ))}
      </div>
    </div>

    {/* 개인별 과제 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "280ms" }}>
      <p className="text-sm font-bold mb-3">개인별 과제</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {assignments.map((a) => (
          <div key={a.name} className="flex items-center gap-3 rounded-lg border border-border/40 bg-muted/20 px-3 py-2.5">
            <span className="text-sm font-bold text-foreground/90 shrink-0 w-16">{a.name}</span>
            <span className="text-sm text-muted-foreground flex-1">{a.task}</span>
            <span className="text-xs text-muted-foreground/50 shrink-0">{a.format}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
  );
});

S32Homework.displayName = "S32Homework";
export default S32Homework;
