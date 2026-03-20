"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S12bHarnessReal = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      코딩 하네스 실전
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      건축 현장에 비유하면 — 현장 감독 + 정밀 도구 세트
    </p>

    {/* 비유 카드 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm mb-4", anim(index))} style={{ transitionDelay: "120ms" }}>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        AI에게 <span className="text-foreground font-semibold">&quot;로그인 기능 만들어줘&quot;</span>라고 하면 어떻게 될까? 하네스 없으면 AI가 혼자 대충 만든다.
        하네스가 있으면? <span className="text-foreground font-semibold">현장 감독</span>(OMC)이 이 작업을 분해한다 — DB 설계, API, 화면, 테스트.
        각각을 전문 작업자에게 위임한다. 그리고 <span className="text-foreground font-semibold">정밀 도구</span>(hwclaude)가 코드를 수정할 때 정확한 위치를 찍어서 편집한다.
        실수하면? 자동으로 복구한다.
      </p>
    </div>

    {/* 두 플러그인 비교 */}
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4", anim(index))} style={{ transitionDelay: "180ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">oh-my-claudecode (OMC)</p>
        <p className="text-sm text-muted-foreground/60 mb-2">비유: 건축 현장의 현장 감독</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li>· <span className="text-foreground">일 분배</span> — 큰 작업을 32개 전문 에이전트에 자동 위임</li>
          <li>· <span className="text-foreground">실행 모드</span> — autopilot(완전자율), ralph(완료까지 반복), ultrawork(병렬처리)</li>
          <li>· <span className="text-foreground">비용 절감</span> — 간단한 일은 싼 모델(Haiku), 어려운 일은 비싼 모델(Opus)</li>
          <li>· <span className="text-foreground">검수</span> — 결과를 확인하고, 틀리면 자동으로 고쳐서 다시 시도</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">oh-my-hwclaude</p>
        <p className="text-sm text-muted-foreground/60 mb-2">비유: 레이저 가이드가 달린 정밀 공구</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li>· <span className="text-foreground">정밀 편집</span> — 파일의 정확한 줄 번호+해시로 위치를 특정 (성공률 6.7%→68.3%)</li>
          <li>· <span className="text-foreground">자동 복구</span> — 편집 실패 시 원인 분석 + 복구 가이드를 AI에게 자동 주입</li>
          <li>· <span className="text-foreground">오류 보정</span> — 들여쓰기 깨짐, 줄 합쳐짐 같은 흔한 실수를 자동으로 고침</li>
          <li>· <span className="text-foreground">품질 검사</span> — 파일 저장할 때마다 자동으로 문법·타입 오류 검사</li>
        </ul>
      </div>
    </div>

    {/* 실제 흐름 */}
    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-4 text-center", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">실제 흐름:</span>{" "}
        &quot;로그인 만들어줘&quot; → OMC가 DB·API·UI·테스트로 분해 → 각 에이전트에 위임 → hwclaude가 정확한 위치에 코드 편집 → 실패 시 자동 복구 → 검수 통과까지 반복
      </p>
    </div>
  </SectionShell>
));

S12bHarnessReal.displayName = "S12bHarnessReal";
export default S12bHarnessReal;
