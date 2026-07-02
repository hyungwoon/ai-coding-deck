"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tier1 = [
  { name: "국가건강정보포털", url: "health.kdca.go.kr", note: "6단계 검증: 기획→집필→교정→소비자 의견→의학 감수→질병관리청 승인" },
  { name: "질병관리청", url: "kdca.go.kr", note: "질병·건강 정보의 국가 공식 출처" },
  { name: "한국건강증진개발원", url: "khepi.or.kr", note: "KHEPI — 건강정보 디자인단 운영 기관" },
  { name: "국가암정보센터", url: "cancer.go.kr", note: "암 관련 정보의 공식 출처" },
  { name: "식품의약품안전처", url: "의약품안전나라 · 식품안전나라", note: "약·건강기능식품·식품 정보" },
  { name: "건강iN", url: "국민건강보험공단", note: "건강검진·의료 이용 정보" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Source Whitelist
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      카드뉴스에 <span className="text-muted-foreground">써도 되는 출처</span>
    </h2>

    <p className={cn("font-mono text-xs text-muted-foreground uppercase mb-2", anim(index))} style={{ transitionDelay: "150ms" }}>
      1군 · 공공기관 — 그대로 인용 가능
    </p>
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {tier1.map((s) => (
        <div key={s.name} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-lg font-semibold leading-snug mb-1">{s.name}</p>
          <p className="font-mono text-xs text-muted-foreground mb-1">{s.url}</p>
          <p className="text-sm text-muted-foreground">{s.note}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "225ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground uppercase mb-1">2군 · 조건부</p>
        <p className="text-lg font-semibold leading-snug mb-1">언론 보도</p>
        <p className="text-sm text-muted-foreground">단독으로 믿지 않는다 — 반드시 1군 자료와 대조한 뒤 사용.</p>
      </div>
      <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground uppercase mb-1">✗ 3군 · 인용 금지</p>
        <p className="text-lg font-semibold leading-snug mb-1">블로그 · 유튜브 · 커뮤니티</p>
        <p className="text-sm text-muted-foreground">단독 인용 금지 — 우리에겐 출처가 아니라 모니터링 대상일 뿐.</p>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">화이트리스트보다 먼저 지켜야 할 철칙 하나.</p>
      <p className="text-xl sm:text-2xl font-bold">
        AI가 준 출처는 <span className="text-primary">반드시 클릭</span> — AI는 출처도 지어낸다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S14SourceWhitelist";
export default S;
