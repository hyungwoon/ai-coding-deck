"use client";

import { useState, useCallback } from "react";

const SETUP_PROMPT = `아래 도구와 스킬을 순서대로 전부 글로벌(~/.claude/)에 설치해줘.
모든 프로젝트에서 사용할 수 있도록 글로벌 설치해야 합니다.

## 1. oh-my-claudecode (OMC)
- GitHub: https://github.com/Yeachan-Heo/oh-my-claudecode
- 멀티 에이전트 오케스트레이션 — 여러 AI 에이전트를 동시에 조율하는 레이어
- /install-github Yeachan-Heo/oh-my-claudecode 로 글로벌 설치

## 2. oh-my-hwclaude
- GitHub: https://github.com/hyungwoon/oh-my-hwclaude
- 파일 편집 정확도를 10배 높여주는 코딩 하네스
- git clone https://github.com/hyungwoon/oh-my-hwclaude.git ~/.claude/oh-my-hwclaude
- cd ~/.claude/oh-my-hwclaude && ./install.sh

## 3. business-ai-team
- GitHub: https://github.com/hyungwoon/business-ai-team
- 마케팅·영업·법무·재무·HR 등 16명의 비즈니스 전문가 에이전트 팀
- git clone https://github.com/hyungwoon/business-ai-team.git ~/.claude/business-ai-team
- cd ~/.claude/business-ai-team && ./install.sh

## 4. 필수 스킬 (글로벌 설치)
다음 7개 스킬을 글로벌로 설치해줘:
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

const planSteps = [
  { step: "1. Plan 모드 진입", detail: "프롬프트에 /plan 입력 또는 Shift+Tab으로 전환" },
  { step: "2. ultrathink와 함께 요청", detail: "ultrathink 로그인 기능 설계해줘 — 깊은 추론 + 플랜 생성" },
  { step: "3. 플랜 확인", detail: "Claude가 단계별 계획을 출력 → 방향이 맞는지 검토" },
  { step: "4. 승인 후 실행", detail: "플랜이 맞으면 승인 → Claude가 계획대로 구현 시작" },
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
          <div className="rounded-xl border border-border bg-card px-4 py-3 mt-3 space-y-2">
            <p className="text-sm font-bold text-foreground">Bypass 모드란?</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Claude Code는 기본적으로 파일 수정, 터미널 명령 실행, 외부 접근 시마다 사용자에게 승인을 요청합니다.
              안전하지만 매번 &quot;허용&quot;을 눌러야 해서 흐름이 끊깁니다.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bypass 모드에서는 이 승인 과정을 건너뛰고 Claude가 <span className="text-foreground font-semibold">자율 실행</span>합니다.
              파일 생성·수정, 패키지 설치, git 명령 등을 승인 없이 바로 실행합니다.
            </p>
            <p className="text-sm text-muted-foreground/60">
              실습·학습 환경에서만 사용하세요. 프로덕션 코드에서는 기본 모드를 권장합니다.
            </p>
          </div>
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

        {/* Step 4: Planning */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 4. 플래닝 방법</h2>
          <p className="text-sm text-muted-foreground mb-4">
            바이브 코딩의 핵심은 <span className="text-foreground font-semibold">플래닝이 90%</span>입니다.
            구현을 바로 시키지 말고, Plan 모드에서 설계를 먼저 하세요.
          </p>
          <div className="space-y-2 mb-4">
            {planSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-sm font-bold text-foreground">{s.step}</p>
                <p className="text-sm text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card px-4 py-3">
            <p className="text-sm font-bold text-foreground mb-2">Plan 모드에서 이것들을 조합하세요</p>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p><code className="font-mono text-foreground">ultrathink</code> + <code className="font-mono text-foreground">/plan</code> — 깊은 추론으로 플랜 생성</p>
              <p><code className="font-mono text-foreground">/superpowers</code> + <code className="font-mono text-foreground">/plan</code> — 관련 스킬을 자동 탐색해서 플랜에 반영</p>
              <p><code className="font-mono text-foreground">ulw</code> — 플랜 승인 후, 독립 작업들을 병렬 실행</p>
              <p><code className="font-mono text-foreground">/ask</code> — 플래닝 중 모르는 도메인 지식을 전문가에게 질문</p>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section>
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 5. 개인별 과제</h2>
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
