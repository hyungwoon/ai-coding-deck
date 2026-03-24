"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const layers = [
  { step: "1", label: "메타데이터", desc: "세션 시작 시 name + description만 로드 (수십 토큰)", color: "text-emerald-400" },
  { step: "2", label: "본문 로드", desc: "요청이 매칭되면 SKILL.md 전체 내용 로드", color: "text-blue-400" },
  { step: "3", label: "참조 파일", desc: "필요 시에만 templates/, reference.md 추가 로드", color: "text-purple-400" },
];

const comparisons = [
  { item: "Commands", trigger: "사용자가 /명령 입력", scope: "단일 .md 파일", example: "/review, /deploy" },
  { item: "Skills", trigger: "Claude가 자동 판단", scope: "폴더 (SKILL.md + 리소스)", example: "보안 리뷰, 배포 체크" },
  { item: "Rules", trigger: "항상 또는 path 매칭 시", scope: "단일 .md 파일", example: "코드 스타일, API 규칙" },
  { item: "Hooks", trigger: "도구 실행 전후 자동", scope: "셸 명령", example: "포맷터, 위험 명령 차단" },
];

const SlideSkills = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        12 · 설정
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-4", anim(index))}>
        Skills & Rules
      </h2>
      <p className={cn("text-muted-foreground mb-6 max-w-2xl", anim(index))} style={{ transitionDelay: "50ms" }}>
        점진적 지식 공개 — 필요한 것만, 필요할 때만 로드하여 토큰을 아낀다.
      </p>

      <div className={cn("flex flex-col sm:flex-row gap-3 mb-8", anim(index))} style={{ transitionDelay: "100ms" }}>
        {layers.map((l) => (
          <div key={l.step} className="flex-1 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className={cn("font-mono text-lg font-bold", l.color)}>#{l.step}</span>
              <span className="text-sm font-semibold">{l.label}</span>
            </div>
            <p className="text-xs text-muted-foreground">{l.desc}</p>
          </div>
        ))}
      </div>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "200ms" }}>
        <div className="grid grid-cols-4 gap-px bg-border/20 text-xs font-semibold">
          <div className="bg-card/90 p-3">구분</div>
          <div className="bg-card/90 p-3">트리거</div>
          <div className="bg-card/90 p-3">범위</div>
          <div className="bg-card/90 p-3">예시</div>
        </div>
        {comparisons.map((c) => (
          <div key={c.item} className="grid grid-cols-4 gap-px bg-border/10 text-xs">
            <div className="bg-card/60 p-3 font-semibold text-primary">{c.item}</div>
            <div className="bg-card/60 p-3 text-muted-foreground">{c.trigger}</div>
            <div className="bg-card/60 p-3 text-muted-foreground">{c.scope}</div>
            <div className="bg-card/60 p-3 font-mono text-muted-foreground">{c.example}</div>
          </div>
        ))}
      </div>

      <div className={cn("mt-4 text-xs text-muted-foreground", anim(index))} style={{ transitionDelay: "300ms" }}>
        CLAUDE.md는 제안 (~80% 준수) · Hooks는 필수 (100% 실행) — 포맷/린트/보안은 훅으로
      </div>
    </div>
  </SectionShell>
));

SlideSkills.displayName = "SlideSkills";
export default SlideSkills;
