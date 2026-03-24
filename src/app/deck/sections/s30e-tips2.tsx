"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tips = [
  { n: "11", t: "Plan Mode", d: "Shift+Tab으로 전환. 멀티파일 변경·낯선 코드에서 방향 잡기" },
  { n: "12", t: "/clear 습관화", d: "다른 작업 시 새 세션. 5초 투자로 30분 낭비 방지" },
  { n: "13", t: "버그는 원본 붙여넣기", d: "에러 로그·CI 출력 그대로 줘야 정확도 상승. 해석 금지" },
  { n: "14", t: "/btw 사이드 질문", d: "대화 히스토리에 안 남는 오버레이 질문. 컨텍스트 오염 없음" },
  { n: "15", t: "--worktree 병렬 브랜치", d: "격리된 워크트리에서 3-5개 Claude 세션 동시 실행" },
  { n: "16", t: "Ctrl+S 프롬프트 임시저장", d: "긴 프롬프트 중 빠른 질문 필요 시. 질문 후 자동 복원" },
  { n: "17", t: "Ctrl+B 백그라운드 실행", d: "오래 걸리는 빌드/테스트를 백그라운드로 보내고 대화 계속" },
  { n: "18", t: "라이브 스테이터스 라인", d: "/statusline으로 현재 디렉토리·git 브랜치·컨텍스트 사용량 표시" },
  { n: "19", t: "서브에이전트로 탐색 위임", d: "깊은 조사를 별도 인스턴스에 맡겨 메인 컨텍스트 보호" },
  { n: "20", t: "에이전트 팀", d: "3-5명 팀원에 5-6개 태스크 배분. 같은 파일 수정은 피하기" },
];

const SlideTips2 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        13 · 팁 11-20
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
        실전 팁 50선
      </h2>
      <p className={cn("text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "50ms" }}>
        컨텍스트 관리 & 병렬 작업
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

SlideTips2.displayName = "SlideTips2";
export default SlideTips2;
