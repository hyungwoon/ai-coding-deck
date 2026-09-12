"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { no: "01", title: "출처를 요구한다", desc: "「각 수치·인용마다 기관·연도·URL을 붙여. 확실하지 않으면 [확인 필요]라고 써.」 — 검색(출처 표시) 모드를 켠다." },
  { no: "02", title: "원문을 연다", desc: "링크를 클릭해 실존하는지, 그 숫자·문장이 원문에 실제로 있는지 본다. AI는 존재하지 않는 URL도 그럴듯하게 만든다." },
  { no: "03", title: "두 곳 이상 교차한다", desc: "화이트리스트 출처 2곳에서 같은 수치가 나오는지, 시행일·조사연도가 최신인지 확인한다." },
];

const selfCheck = `이 초안에서 사실 주장(숫자·통계·법령·인용)을 전부 뽑아 목록으로 만들어.
각 항목 옆에 「출처 있음(기관·연도)」 또는 「출처 없음」을 표시해.
출처 없음 항목은 지어내지 말고 [확인 필요]로 남겨.`;

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Verification
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      검증 3단계 — <span className="text-muted-foreground">요구 · 열기 · 교차</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      2026년 6월, 27년차 변호사가 AI가 만든 존재하지 않는 판례 8건을 법원에 냈다. 절주 통계도 똑같이 지어진다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4", anim(index))} style={{ transitionDelay: "225ms" }}>
      {steps.map((s) => (
        <div key={s.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-sm text-primary mb-2">{s.no}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{s.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4", anim(index))} style={{ transitionDelay: "300ms" }}>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <p className="text-sm text-muted-foreground mb-1">AI에게 셀프체크를 시키되, 최종 판정은 사람이</p>
        <p className="text-lg sm:text-xl font-bold">
          「유창함」은 <span className="text-primary">정확함의 증거가 아니다</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">사례: 특허법원 2026-06-11 판결(법률신문). AI 생성 건강 정보의 위험 기제는 「가짜 유창함」과 「인용 흉내」(2026 체계적 문헌고찰).</p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-muted/30 p-4 font-mono text-xs leading-relaxed whitespace-pre-line">
        <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-2">Self-check Prompt · 킷 T5</p>
        {selfCheck}
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S19Verify3Steps";
export default S;
