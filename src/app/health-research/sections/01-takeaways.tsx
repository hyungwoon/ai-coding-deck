"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const takeaways = [
  { no: "01", title: "워크플로우 지도", desc: "한 달 활동을 5단계로 다시 보고, 내 활동 어디에 AI가 끼는지 표시합니다." },
  { no: "02", title: "프롬프트 템플릿 6개", desc: "복붙해서 바로 쓰는 전문. QR로 배포하니 받아 적지 말고 스캔하세요." },
  { no: "03", title: "게시 전 5문 체크리스트", desc: "올리기 전 다섯 가지만 묻는다 — 팀 게시 규칙으로 가져가세요." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · Opening
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      오늘 가져갈 것 세 가지
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {takeaways.map((t) => (
        <div key={t.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-2">{t.no}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{t.title}</p>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">외우거나 받아 적을 필요 없습니다</p>
      <p className="text-xl sm:text-2xl font-bold">
        필기 불필요 — <span className="text-primary">오늘 자료는 전부 링크로 남습니다</span>
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        성인의 적절한 건강정보 이해능력은 60.4% — 10명 중 4명이 어려움을 겪습니다(2023 국민건강영양조사).
        여러분의 콘텐츠와 모니터링이 그 간극을 메웁니다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S01Takeaways";
export default S;
