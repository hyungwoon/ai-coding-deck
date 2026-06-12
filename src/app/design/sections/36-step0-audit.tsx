"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const AUDIT_ITEMS = [
  { q: "디자인 토큰이 코드에 있나?", hint: "CSS 변수, JS 상수, Tailwind config 등" },
  { q: "컴포넌트 목록이 문서화돼 있나?", hint: "Storybook, Figma, README, 아무 형태라도" },
  { q: "색·타이포·간격 규칙이 한 곳에 있나?", hint: "흩어진 파일들도 OK — 지금 목록만 파악" },
  { q: "보이스·톤 가이드가 있나?", hint: "없어도 OK — STEP 2에서 직접 만든다" },
];

const CHECKS = [
  "자기 프로젝트 폴더 열기",
  "디자인 관련 파일 목록 확인 (find . | grep -i design)",
  "있는 것·없는 것 메모 (메모장 OK)",
  "STEP 1 시작 전 손들어 확인받기",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      STEP 0 · 현황 진단
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      내 프로젝트 디자인 자산, 지금 어디 있나
    </h2>
    <p className={cn("text-muted-foreground mb-8 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      만들기 전에 현황 파악. 있는 것을 알아야 중복 안 만들고, 없는 것을 알아야 빠짐없이 채운다.
    </p>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-8">
      {AUDIT_ITEMS.map((item, i) => (
        <div
          key={item.q}
          className={cn("rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 80}ms` }}
        >
          <p className="font-semibold text-sm mb-1">{item.q}</p>
          <p className="text-xs text-muted-foreground">{item.hint}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-card/80 p-5 mb-6", anim(index))} style={{ transitionDelay: "490ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">체크포인트 — STEP 0 완료 기준</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {CHECKS.map((c, i) => (
          <div key={c} className="flex items-center gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary">✓</span>
            <span className="text-sm">{c}</span>
          </div>
        ))}
      </div>
    </div>

    <p className={cn("text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "650ms" }}>
      자기 프로젝트가 없으면 강사 예제(NMWC)로 진행. NMWC는 토큰·컴포넌트·보이스 모두 갖춘 레퍼런스.
    </p>
  </SectionShell>
));
S.displayName = "S36Step0Audit";
export default S;
