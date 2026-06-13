"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const MADE_TODAY = [
  { label: "brand.md", desc: "시각 아이덴티티 계약서" },
  { label: "bx.md",    desc: "보이스·톤 규칙" },
  { label: "product.md", desc: "컴포넌트 계층 + 조합" },
  { label: "ux.md",    desc: "UX 원칙 + 에러·로딩 처리" },
];

const NEXT_STEPS = [
  "팀 레포에 design/ 폴더 커밋 — 개발자도 같은 DESIGN.md 사용",
  "product.md 컴포넌트 목록 계속 확장 — 쓸수록 정밀해진다",
  "Claude Code·Cursor도 repo의 DESIGN.md를 자동 참조 — 파일 하나로 전 도구 공유",
  "디자인 변경 시 DESIGN.md 먼저 업데이트 — 파일이 단일 출처",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      마무리
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      오늘 만든 것이 내일의 기준이 된다
    </h2>
    <p className={cn("text-muted-foreground mb-8 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      DESIGN.md가 없으면 AI는 매번 임의 결정을 내린다. 지금 만든 파일이 그 임의성을 없앤다.
    </p>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-7">
      {MADE_TODAY.map((item, i) => (
        <div
          key={item.label}
          className={cn("rounded-xl border border-primary/30 bg-card/60 p-3", anim(index))}
          style={{ transitionDelay: `${150 + i * 60}ms` }}
        >
          <p className="font-mono text-xs text-primary mb-1">{item.label}</p>
          <p className="text-[11px] text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6", anim(index))} style={{ transitionDelay: "450ms" }}>
      <p className="font-semibold text-sm mb-3">다음 단계 — 팀에 적용</p>
      <div className="space-y-2">
        {NEXT_STEPS.map((step, i) => (
          <div key={step} className="flex items-start gap-3">
            <span className="font-mono text-xs text-primary mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground">{step}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", anim(index))} style={{ transitionDelay: "590ms" }}>
      <div className="rounded-xl border border-border/40 bg-card/60 p-4">
        <p className="font-semibold text-sm mb-2">Q&amp;A</p>
        <p className="text-sm text-muted-foreground">
          막힌 것, 더 알고 싶은 것 — 지금 물어보세요.
        </p>
      </div>
      <div className="rounded-xl border border-border/40 bg-card/60 p-4">
        <p className="font-semibold text-sm mb-2">Contact</p>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>형운 — <span className="font-mono text-xs">hyungwoon.kr@gmail.com</span></p>
          <p className="text-xs text-muted-foreground/60">이후 질문·피드백 환영합니다.</p>
        </div>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S45WrapUp";
export default S;
