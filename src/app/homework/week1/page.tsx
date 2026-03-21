"use client";

import { useState, useCallback, useEffect, useMemo } from "react";

const DEADLINE = new Date("2026-03-27T21:00:00+09:00");

function useCountdown() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = DEADLINE.getTime() - now.getTime();
  const expired = diff <= 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  const urgency = days <= 1 ? "critical" : days <= 3 ? "warn" : "normal";

  return { days, hours, minutes, seconds, expired, urgency };
}

interface Submission {
  ts: string;
  name: string;
  task: string;
  content: string;
  edited: boolean;
}

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
  { cmd: "ultrathink", desc: "깊은 추론 — 복잡한 설계·분석에 효과적", ex: "ultrathink 하네스란 무엇이고 왜 필요한지 5분 스피치 원고 만들어줘" },
  { cmd: "ulw", desc: "최대 병렬 실행 — 독립 작업 2개 이상 동시 처리", ex: "ulw RLVR 개념 정리 + RLHF와 차이점 비교 + 5분 스피치 원고 병렬로" },
  { cmd: "/superpowers", desc: "스킬 자동 탐색 — 요청에 맞는 스킬을 찾아서 적용", ex: "/superpowers 내 업무의 암묵지와 명시지를 구분해서 정리해줘" },
  { cmd: "/ask", desc: "비즈니스 전문가에게 질문", ex: "/ask 온톨로지를 처음 만들 때 어떤 구조로 시작하면 좋아?" },
  { cmd: "/route", desc: "요청을 적합한 전문가에게 자동 라우팅", ex: "/route 오늘 강의 핵심 내용을 5분 요약 아티클로 정리해줘" },
  { cmd: "/team", desc: "전문가 팀 목록 확인", ex: "/team" },
];

const planSteps = [
  { step: "1. Plan 모드 진입", detail: "프롬프트에 /plan 입력 또는 Shift+Tab으로 전환" },
  { step: "2. /superpowers + ultrathink로 요구사항을 전달하세요", detail: "예: /superpowers ultrathink PDF 문서를 온톨로지 형태로 변환하는 방법을 설계해줘 — superpowers가 스킬을 찾고, ultrathink가 깊이 추론합니다" },
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

function CountdownTimer() {
  const { days, hours, minutes, seconds, expired, urgency } = useCountdown();

  if (expired) {
    return (
      <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-4 text-center">
        <p className="text-lg font-bold text-red-400">제출 마감</p>
        <p className="text-sm text-red-400/60">제출 기한이 종료되었습니다</p>
      </div>
    );
  }

  const borderColor = urgency === "critical" ? "border-red-500/40" : urgency === "warn" ? "border-amber-500/40" : "border-border";
  const bgColor = urgency === "critical" ? "bg-red-500/5" : urgency === "warn" ? "bg-amber-500/5" : "bg-card";
  const numColor = urgency === "critical" ? "text-red-400" : urgency === "warn" ? "text-amber-400" : "text-foreground";
  const labelColor = urgency === "critical" ? "text-red-400/60" : urgency === "warn" ? "text-amber-400/60" : "text-muted-foreground/50";

  return (
    <div className={`rounded-xl border ${borderColor} ${bgColor} px-4 py-4`}>
      <p className={`text-xs font-bold uppercase tracking-widest mb-3 text-center ${labelColor}`}>
        제출 마감까지
      </p>
      <div className="flex items-center justify-center gap-3">
        {[
          { value: days, label: "일" },
          { value: hours, label: "시간" },
          { value: minutes, label: "분" },
          { value: seconds, label: "초" },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3">
            <div className="text-center min-w-[48px]">
              <p className={`text-2xl sm:text-3xl font-black font-mono tabular-nums ${numColor} ${urgency === "critical" ? "animate-pulse" : ""}`}>
                {String(unit.value).padStart(2, "0")}
              </p>
              <p className={`text-[10px] ${labelColor}`}>{unit.label}</p>
            </div>
            {i < 3 && <span className={`text-xl font-bold ${labelColor}`}>:</span>}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground/40 text-center mt-2">3월 27일 (금) 21:00 마감</p>
    </div>
  );
}

export default function Week1Page() {
  const [copied, setCopied] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedName, setSelectedName] = useState("");
  const [submitContent, setSubmitContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editingTs, setEditingTs] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(SETUP_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch("/api/submissions");
      const data = await res.json();
      if (data.submissions) setSubmissions(data.submissions);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { fetchSubmissions(); }, [fetchSubmissions]);

  const handleSubmit = async () => {
    if (!selectedName || !submitContent.trim()) return;
    setSubmitting(true);
    const assignment = assignments.find((a) => a.name === selectedName);
    try {
      await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: selectedName,
          task: assignment?.task ?? "",
          content: submitContent,
        }),
      });
      setSubmitContent("");
      setSelectedName("");
      await fetchSubmissions();
    } catch { /* ignore */ }
    setSubmitting(false);
  };

  const handleEdit = async (ts: string) => {
    if (!editContent.trim()) return;
    const sub = submissions.find((s) => s.ts === ts);
    if (!sub) return;
    setSubmitting(true);
    try {
      await fetch(`/api/submissions/${ts}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sub.name,
          task: sub.task,
          content: editContent,
        }),
      });
      setEditingTs(null);
      setEditContent("");
      await fetchSubmissions();
    } catch { /* ignore */ }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24">

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">1주차 과제</h1>
        <p className="text-lg text-muted-foreground mb-12">아래 순서대로 따라오시면 됩니다. 막히는 부분은 편하게 물어보세요.</p>

        {/* Step 1 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 1. Claude Code를 Bypass 모드로 실행하세요</h2>
          <p className="text-sm text-muted-foreground mb-3">
            터미널(Warp 또는 기본 Terminal)을 열고 아래 명령어를 입력하세요.
          </p>
          <code className="block rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm">
            claude --dangerously-skip-permissions
          </code>
          <div className="rounded-xl border border-border bg-card px-4 py-3 mt-3 space-y-2">
            <p className="text-sm font-bold text-foreground">Bypass 모드란?</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Claude Code는 기본적으로 파일을 수정하거나 터미널 명령을 실행할 때마다 &quot;이거 해도 돼?&quot;라고 승인을 요청합니다.
              안전하지만, 매번 &quot;허용&quot;을 눌러야 해서 작업 흐름이 끊깁니다.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bypass 모드에서는 이 승인 과정을 건너뛰고 Claude가 <span className="text-foreground font-semibold">자율적으로 실행</span>합니다.
              파일 생성·수정, 패키지 설치, git 명령 등을 묻지 않고 바로 처리합니다.
            </p>
            <p className="text-sm text-muted-foreground/60">
              실습·학습 환경에서만 사용하세요. 실제 업무 코드에서는 기본 모드를 권장합니다.
            </p>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 2. 아래 프롬프트를 Claude Code에 그대로 붙여넣으세요</h2>
          <p className="text-sm text-muted-foreground mb-3">
            오른쪽 Copy 버튼을 누르면 프롬프트가 클립보드에 복사됩니다.
            Step 1에서 열린 Claude Code 화면에 붙여넣고 Enter를 누르세요.
            Claude가 알아서 도구 3개 + 스킬 7개를 전부 설치합니다. 완료까지 몇 분 걸릴 수 있습니다.
          </p>
          <div className="flex items-center justify-end mb-2">
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
        </section>

        {/* Step 3: Planning */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 3. 무언가를 만들고 싶다면 Plan 모드를 먼저 켜세요</h2>
          <p className="text-sm text-muted-foreground mb-4">
            바이브 코딩의 핵심은 <span className="text-foreground font-semibold">플래닝이 90%</span>입니다.
            &quot;바로 만들어줘&quot;가 아니라, 먼저 계획을 세우고 확인한 다음에 실행하세요.
          </p>
          <div className="space-y-2 mb-6">
            {planSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-sm font-bold text-foreground">{s.step}</p>
                <p className="text-sm text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">핵심 명령어 — Plan 모드와 함께 쓰면 더 강력합니다</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Claude Code 입력창에 아래 명령어를 입력하면 됩니다. 각 명령어 뒤에 하고 싶은 말을 자연어로 붙이세요.
          </p>
          <div className="rounded-xl border border-foreground/20 bg-card px-5 py-4">
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <code className="font-mono font-bold text-foreground">ultrathink</code>
                  <span className="text-muted-foreground/40">+</span>
                  <code className="font-mono font-bold text-foreground">/plan</code>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plan 모드에서 <code className="font-mono text-foreground/80">ultrathink</code>를 프롬프트에 넣으면,
                  Claude가 실행하기 전에 훨씬 깊이 추론합니다. 복잡한 설계일수록 효과가 큽니다.
                </p>
                <p className="text-sm text-muted-foreground/50 font-mono mt-1.5">ultrathink 하네스의 개념과 구성 요소를 정리하고 5분 스피치 원고를 만들어줘</p>
              </div>

              <div className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <code className="font-mono font-bold text-foreground">/superpowers</code>
                  <span className="text-muted-foreground/40">+</span>
                  <code className="font-mono font-bold text-foreground">/plan</code>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  설치된 스킬 중 요청에 맞는 것을 자동으로 찾아서 플랜에 반영합니다.
                  어떤 스킬을 써야 할지 몰라도 됩니다. Claude가 알아서 고릅니다.
                </p>
                <p className="text-sm text-muted-foreground/50 font-mono mt-1.5">/superpowers 내 업무에서 암묵지와 명시지를 구분해서 표로 정리해줘</p>
              </div>

              <div className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <code className="font-mono font-bold text-foreground">ulw</code>
                  <span className="text-sm text-muted-foreground ml-1">(UltraWork)</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  플랜을 승인한 뒤, 서로 독립적인 작업들을 동시에 병렬로 실행합니다.
                  예를 들어 &quot;API 만들기 + 테스트 작성 + 문서화&quot;를 동시에 진행합니다.
                </p>
                <p className="text-sm text-muted-foreground/50 font-mono mt-1.5">ulw RLVR 개념 정리 + RLHF와 비교표 + 5분 스피치 원고 병렬로 만들어줘</p>
              </div>

              <div className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <code className="font-mono font-bold text-foreground">/ask</code>
                  <span className="text-sm text-muted-foreground ml-1">(전문가 질문)</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  플래닝 중에 도메인 지식이 필요할 때, 16명의 비즈니스 전문가에게 바로 물어봅니다.
                  법률, 재무, 마케팅, HR 등 해당 분야 전문가가 답합니다.
                </p>
                <p className="text-sm text-muted-foreground/50 font-mono mt-1.5">/ask 온톨로지를 처음 만들 때 개체-관계-속성-규칙을 어떻게 정의하면 좋아?</p>
              </div>

              <div className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <code className="font-mono font-bold text-foreground">/route</code>
                  <span className="text-sm text-muted-foreground ml-1">(전문가 자동 라우팅)</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  요청 내용을 분석해서 가장 적합한 전문가 에이전트에게 자동으로 전달합니다.
                  마케팅인지, 법무인지, 데이터인지 몰라도 됩니다. 시스템이 판단합니다.
                </p>
                <p className="text-sm text-muted-foreground/50 font-mono mt-1.5">/route 오늘 강의 핵심을 5분 요약 아티클로 정리해줘</p>
              </div>

              <div className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <code className="font-mono font-bold text-foreground">/humanizer</code>
                  <span className="text-sm text-muted-foreground ml-1">(AI 느낌 제거)</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Claude가 만든 글이 AI스러울 때, 자연스러운 문체로 다듬어줍니다.
                  아티클, 이메일, 보고서 등 대외용 텍스트에 특히 유용합니다.
                </p>
                <p className="text-sm text-muted-foreground/50 font-mono mt-1.5">/humanizer 이 스피치 원고 AI 느낌 빼고 자연스럽게 다듬어줘</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-border bg-muted/10 px-4 py-3">
              <p className="text-sm font-bold text-foreground mb-1">실전 조합 예시</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plan 모드 진입 → <code className="font-mono text-foreground/80">ultrathink 이 PDF를 온톨로지로 변환하는 방법 설계해줘</code>
                → 플랜 확인·승인 → <code className="font-mono text-foreground/80">ulw</code>로 개체 추출 + 관계 정의 + 규칙 정리 병렬 실행
                → 결과물에 <code className="font-mono text-foreground/80">/humanizer</code>로 자연스러운 스피치 원고로 다듬기
                → 모르는 건 <code className="font-mono text-foreground/80">/ask</code>로 물어보기
              </p>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">Step 4. 개인별 과제</h2>
          <p className="text-sm text-muted-foreground mb-3">
            위에서 세팅한 환경을 활용해서 아래 과제를 수행하세요. 과제 수행 자체를 Claude Code와 함께 하시면 됩니다.
          </p>
          <div className="space-y-2">
            {assignments.map((a) => {
              const submitted = submissions.some((s) => s.name === a.name);
              return (
                <div key={a.name} className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${submitted ? "border-green-500/30 bg-green-500/5" : "border-border bg-card"}`}>
                  <span className={`text-sm font-bold shrink-0 w-16 ${submitted ? "text-green-400" : "text-foreground"}`}>{a.name}</span>
                  <span className="text-sm text-muted-foreground flex-1">{a.task}</span>
                  <span className="text-xs text-muted-foreground/50 shrink-0">{a.format}</span>
                  {submitted && (
                    <span className="text-xs font-medium text-green-400 shrink-0">제출 완료</span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 과제 제출 */}
        <section className="mb-10 mt-16">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">과제 제출</h2>

          <CountdownTimer />

          <p className="text-sm text-muted-foreground mb-4 mt-4">
            이름을 선택하고 과제 내용을 작성한 뒤 제출하세요. 제출하면 Slack 채널에 자동으로 공유됩니다.
          </p>
          <div className="rounded-xl border border-border bg-card px-4 py-4 space-y-3">
            <select
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="">이름을 선택하세요</option>
              {assignments.map((a) => (
                <option key={a.name} value={a.name}>{a.name} — {a.task}</option>
              ))}
            </select>
            <textarea
              value={submitContent}
              onChange={(e) => setSubmitContent(e.target.value)}
              placeholder="과제 내용을 작성하세요. 링크, 요약, 스크린샷 URL 등 자유롭게 입력할 수 있습니다."
              rows={6}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 resize-y"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={!selectedName || !submitContent.trim() || submitting}
                className="rounded-lg border border-border bg-foreground px-5 py-2 text-sm font-medium text-background transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {submitting ? "제출 중..." : "제출하기"}
              </button>
            </div>
          </div>
        </section>

        {/* 제출된 과제 목록 */}
        {submissions.length > 0 && (
          <section className="mb-10">
            <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">
              제출된 과제 ({submissions.length}건)
            </h2>
            <div className="space-y-3">
              {submissions.map((sub) => (
                <div key={sub.ts} className="rounded-xl border border-border bg-card px-4 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground">{sub.name}</span>
                      <span className="text-sm text-muted-foreground">— {sub.task}</span>
                      {sub.edited && (
                        <span className="text-xs text-muted-foreground/40">(수정됨)</span>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        if (editingTs === sub.ts) {
                          setEditingTs(null);
                          setEditContent("");
                        } else {
                          setEditingTs(sub.ts);
                          setEditContent(sub.content);
                        }
                      }}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {editingTs === sub.ts ? "취소" : "수정"}
                    </button>
                  </div>

                  {editingTs === sub.ts ? (
                    <div className="space-y-2">
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={5}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground resize-y"
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleEdit(sub.ts)}
                          disabled={submitting}
                          className="rounded-lg border border-border bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-all hover:opacity-90 disabled:opacity-30"
                        >
                          {submitting ? "수정 중..." : "수정 완료"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{sub.content}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
