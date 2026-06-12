"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const DELIVERABLES = [
  { label: "brand.md", desc: "시각 아이덴티티 — 로고·색·타이포" },
  { label: "bx.md",    desc: "보이스·톤 — Use/Avoid 단어" },
  { label: "product.md", desc: "Atomic 컴포넌트 계층 + 조합·usage" },
  { label: "ux.md",    desc: "UX 원칙 — 휴리스틱·에러·로딩" },
  { label: "미니 MCP", desc: "4개 md를 Claude에 노출하는 서버" },
];

const TIMELINE = [
  { t: "00", step: "STEP 0", desc: "현황 진단 — 내 프로젝트 자산 파악", min: "10분" },
  { t: "01", step: "STEP 1–4", desc: "DESIGN.md 4개 작성", min: "50분" },
  { t: "02", step: "STEP 5–6", desc: "미니 MCP 빌드 + Claude 연결", min: "20분" },
  { t: "03", step: "STEP 7", desc: "검증 — 내 판단이 AI에 전달되는지", min: "10분" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 5 · 풀 핸즈온 Lab
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      오늘 만드는 것
    </h2>
    <p className={cn("text-muted-foreground mb-8 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      강의를 보는 게 아니라 직접 만든다. 90분 뒤 당신 손에 실제 파일이 남아야 한다.
    </p>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 mb-8">
      {DELIVERABLES.map((d, i) => (
        <div
          key={d.label}
          className={cn("rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 60}ms` }}
        >
          <p className="font-mono text-sm text-primary mb-1">{d.label}</p>
          <p className="text-xs text-muted-foreground">{d.desc}</p>
        </div>
      ))}
    </div>

    <div className="space-y-2 mb-8">
      {TIMELINE.map((t, i) => (
        <div
          key={t.t}
          className={cn("flex items-center gap-4 rounded-xl border border-border/40 bg-card/60 px-5 py-3", anim(index))}
          style={{ transitionDelay: `${450 + i * 60}ms` }}
        >
          <span className="font-mono text-sm text-primary">{t.t}</span>
          <span className="font-semibold text-sm">{t.step}</span>
          <span className="ml-auto hidden text-sm text-muted-foreground sm:block">{t.desc}</span>
          <span className="font-mono text-xs text-muted-foreground/60">{t.min}</span>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-3", anim(index))} style={{ transitionDelay: "730ms" }}>
      <div className="rounded-xl border border-border/40 bg-card/60 p-4 text-sm">
        <p className="font-semibold mb-1">막히면</p>
        <p className="text-muted-foreground">손들기 — 강사가 순회합니다. 5분 이상 혼자 헤매지 마세요.</p>
      </div>
      <div className="rounded-xl border border-border/40 bg-card/60 p-4 text-sm">
        <p className="font-semibold mb-1">페어 권장</p>
        <p className="text-muted-foreground">옆 사람과 2인 1조. 한 명이 타이핑, 한 명이 검토.</p>
      </div>
      <div className="rounded-xl border border-border/40 bg-card/60 p-4 text-sm">
        <p className="font-semibold mb-1">기준 프로젝트</p>
        <p className="text-muted-foreground">자기 프로젝트 없으면 강사 제공 예제(NMWC) 사용.</p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S35LabOverview";
export default S;
