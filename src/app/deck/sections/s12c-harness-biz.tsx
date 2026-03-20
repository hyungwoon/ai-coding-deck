"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S12cHarnessBiz = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      비즈니스 하네스 실전
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-3", anim(index))} style={{ transitionDelay: "80ms" }}>
      business-ai-team — 같은 Claude Code 위에 비즈니스 하네스를 씌운 실제 사례
    </p>

    {/* Stats */}
    <div className={cn("flex flex-wrap gap-3 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
      {[
        { value: "31", label: "네이티브 스킬" },
        { value: "112", label: "Plugin 스킬" },
        { value: "5", label: "커맨드" },
        { value: "4", label: "자동 규칙" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border/40 bg-card/80 px-4 py-2 shadow-sm backdrop-blur-sm">
          <span className="text-lg font-black text-primary mr-1.5">{s.value}</span>
          <span className="text-xs text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>

    {/* Architecture Flow */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-4", anim(index))} style={{ transitionDelay: "140ms" }}>
      <p className="text-sm font-bold mb-3">요청 처리 흐름</p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
        <span className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 text-blue-400 font-semibold">/ask · /route</span>
        <span className="text-muted-foreground/40">&rarr;</span>
        <span className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-amber-400 font-semibold">브레인스토밍 게이트</span>
        <span className="text-muted-foreground/40">&rarr;</span>
        <span className="rounded-lg bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 text-purple-400 font-semibold">도메인 분류</span>
        <span className="text-muted-foreground/40">&rarr;</span>
        <span className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 text-cyan-400 font-semibold">에이전트.md + SKILL.md 읽기</span>
        <span className="text-muted-foreground/40">&rarr;</span>
        <span className="rounded-lg bg-green-500/10 border border-green-500/20 px-2.5 py-1 text-green-400 font-semibold">전문가 답변</span>
      </div>
    </div>

    {/* 3-column domain breakdown */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4", anim(index))} style={{ transitionDelay: "200ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-0.5">PM 도메인</p>
        <p className="text-xs text-muted-foreground/50 mb-2">7개 메가스킬 → 62개 서브스킬</p>
        <div className="flex flex-wrap gap-1">
          {["Discovery", "Strategy", "Execution", "Core", "Research", "GTM", "Analytics"].map((d) => (
            <span key={d} className="text-[10px] px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 border border-green-500/20">{d}</span>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-0.5">기능 도메인</p>
        <p className="text-xs text-muted-foreground/50 mb-2">9개 메가스킬 → 50개 서브스킬</p>
        <div className="flex flex-wrap gap-1">
          {["Marketing", "Sales", "Finance", "Legal", "Data", "CS", "Search", "Productivity", "Plugin"].map((d) => (
            <span key={d} className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">{d}</span>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-0.5">단일 도메인 + 엔지니어링</p>
        <p className="text-xs text-muted-foreground/50 mb-2">7개 자체 완결 + 8개 워크플로우</p>
        <div className="flex flex-wrap gap-1">
          {["BizDev", "Compliance", "Design", "Dev", "HR", "PR", "Security"].map((d) => (
            <span key={d} className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">{d}</span>
          ))}
          {["/qa", "/review", "/ship"].map((d) => (
            <span key={d} className="text-[10px] px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 font-mono">{d}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Detail Link */}
    <div className={cn("mb-4 text-right", anim(index))} style={{ transitionDelay: "240ms" }}>
      <a
        href="/architecture.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
      >
        아키텍처 전체 보기 &rarr;
      </a>
    </div>

    {/* Auto Rules + RLVR */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "280ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-2">자동 규칙 (매 세션 자동 로드)</p>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li><span className="font-semibold text-foreground">expert-routing</span> — 에이전트→스킬 필수 Read + 담당 표시 강제</li>
          <li><span className="font-semibold text-foreground">brainstorming</span> — 모호한 요청은 2축 게이트로 분류 후 진행</li>
          <li><span className="font-semibold text-foreground">feedback-learning</span> — 피드백 자동 감지 → knowledge/ 저장</li>
          <li><span className="font-semibold text-foreground">session-reminder</span> — 선호도·맥락·학습 이력 자동 로드</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4 shadow-sm">
        <p className="text-sm font-bold text-green-400 mb-2">피드백 루프 (쓸수록 정교해짐)</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-md bg-card/80 border border-border/40 px-2 py-1">&quot;그건 틀려&quot;</span>
          <span>&rarr;</span>
          <span className="rounded-md bg-card/80 border border-border/40 px-2 py-1">자동 감지</span>
          <span>&rarr;</span>
          <span className="rounded-md bg-card/80 border border-border/40 px-2 py-1">knowledge/ 저장</span>
          <span>&rarr;</span>
          <span className="rounded-md bg-card/80 border border-border/40 px-2 py-1">3건 축적</span>
          <span>&rarr;</span>
          <span className="rounded-md bg-green-500/10 border border-green-500/20 px-2 py-1 text-green-400 font-semibold">SKILL.md 자동 반영</span>
        </div>
      </div>
    </div>
  </SectionShell>
));

S12cHarnessBiz.displayName = "S12cHarnessBiz";
export default S12cHarnessBiz;
