"use client";

import { useState, useCallback } from "react";

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

const commands = [
  { cmd: "ultrathink", desc: "깊은 추론 — 복잡한 설계·디버깅에 효과적", ex: "ultrathink 로그인 기능 설계해줘" },
  { cmd: "ulw", desc: "최대 병렬 실행 — 독립 작업 2개 이상 동시 처리", ex: "ulw README + 테스트 + CI 병렬로" },
  { cmd: "/superpowers", desc: "스킬 자동 탐색 — 요청에 맞는 스킬을 찾아서 적용", ex: "/superpowers 이 코드 리팩토링해줘" },
  { cmd: "/ask", desc: "비즈니스 전문가에게 질문", ex: "/ask 경쟁사 마케팅 전략 분석해줘" },
  { cmd: "/route", desc: "요청을 적합한 전문가에게 자동 라우팅", ex: "/route 다음 분기 OKR 수립" },
  { cmd: "/team", desc: "전문가 팀 목록 확인", ex: "/team" },
];

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

export default function Week1Page() {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(SETUP_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24">

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">1주차 과제</h1>
        <p className="text-lg text-muted-foreground mb-12">환경 세팅 + 개인별 과제</p>

        {/* Step 1 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 1. Bypass 모드로 실행</h2>
          <code className="block rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm">
            claude --dangerously-skip-permissions
          </code>
          <p className="text-sm text-muted-foreground mt-2">
            승인 없이 자율 실행합니다. 실습 환경에서만 사용하세요.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest">Step 2. 프롬프트 붙여넣기</h2>
            <button
              onClick={handleCopy}
              className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition-all ${
                copied
                  ? "border-green-500/40 bg-green-500/10 text-green-400"
                  : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </div>
          <div className="rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {SETUP_PROMPT}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Claude Code에 그대로 붙여넣으면 알아서 전부 설치합니다.
          </p>
        </section>

        {/* Step 3 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 3. 핵심 사용법</h2>
          <div className="space-y-2">
            {commands.map((c) => (
              <div key={c.cmd} className="rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex items-baseline gap-2 mb-1">
                  <code className="font-mono font-bold text-foreground">{c.cmd}</code>
                  <span className="text-sm text-muted-foreground">{c.desc}</span>
                </div>
                <p className="text-sm text-muted-foreground/50 font-mono">{c.ex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 4. 개인별 과제</h2>
          <div className="space-y-2">
            {assignments.map((a) => (
              <div key={a.name} className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
                <span className="text-sm font-bold text-foreground shrink-0 w-16">{a.name}</span>
                <span className="text-sm text-muted-foreground flex-1">{a.task}</span>
                <span className="text-xs text-muted-foreground/50 shrink-0">{a.format}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
