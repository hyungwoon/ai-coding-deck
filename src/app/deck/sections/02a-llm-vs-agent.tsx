"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const AGENT_PARTS = [
  { icon: "◉", label: "LLM", desc: "판단·추론 엔진" },
  { icon: "⚙", label: "툴 호출", desc: "파일·터미널·웹 실행" },
  { icon: "↻", label: "루프", desc: "실행→결과 확인→재시도" },
  { icon: "▣", label: "메모리", desc: "컨텍스트 유지" },
  { icon: "⬡", label: "MCP", desc: "외부 앱 연결 프로토콜" },
];

const LlmVsAgent = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        02 · 에이전트 전환점
      </p>
      <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-8", anim(index))}>
        LLM과 AI 에이전트의{" "}
        <span className="text-muted-foreground">차이</span>
      </h2>

      {/* 2-column 비교 */}
      <div className={cn("grid grid-cols-2 gap-5 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-3">LLM 단독</p>
          <p className="text-base font-semibold mb-4">질문 → 답변. 끝.</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            입력이 들어오면 출력을 냄. 기억 없음. 행동 없음. 매번 처음부터.
          </p>
          <p className="text-sm text-foreground font-medium">
            사람이 결과를 받아서 직접 실행해야 함.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-3">AI 에이전트</p>
          <p className="text-base font-semibold mb-4">태스크 → 계획 → 실행 → 검증. 반복.</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            LLM에{" "}
            <span className="text-foreground font-medium">툴(파일·터미널·웹·API)</span>을
            연결하면 에이전트가 됨. 스스로 계획하고, 실행하고, 결과를 보고 재시도.
          </p>
          <p className="text-sm text-foreground font-medium">
            사람은 목표만 주면 됨.
          </p>
        </div>
      </div>

      {/* 에이전트 구성 요소 */}
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "200ms" }}>
        <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4">
          에이전트 = LLM + 이것들
        </p>
        <div className="flex flex-wrap gap-3">
          {AGENT_PARTS.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-border/40 bg-muted/30 px-4 py-2.5"
            >
              <span className="text-primary text-sm">{icon}</span>
              <span className="text-sm font-semibold">{label}</span>
              <span className="text-sm text-muted-foreground">— {desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionShell>
));
LlmVsAgent.displayName = "LlmVsAgent";
export default LlmVsAgent;
