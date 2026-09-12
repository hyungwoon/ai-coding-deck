"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const sources = [
  { name: "절주온 (KHEPI)", url: "khepi.or.kr/alcoholstop", note: "절주 캠페인·가이드라인·통계의 1차 출처. 무음모드ON 캠페인 자료." },
  { name: "질병관리청 국민건강영양조사", url: "knhanes.kdca.go.kr", note: "고위험음주율·월간폭음률. 2024년 잠정치: 고위험음주율 13.6% · 월간폭음률 37.8%(남 48.3 / 여 27.1)." },
  { name: "국립암센터", url: "cancer.go.kr", note: "알코올 = IARC 1군 발암물질. 전 세계 암 사례의 3.6%가 음주 기인." },
  { name: "WHO", url: "who.int", note: "「건강에 안전한 음주량은 없다」 — 2023년 공식 성명(Lancet Public Health)." },
  { name: "법제처 국가법령정보센터", url: "law.go.kr", note: "국민건강증진법·인공지능기본법 원문과 시행일. 「개정됐다더라」는 여기서 끝낸다." },
  { name: "보건복지부·건보공단", url: "mohw.go.kr", note: "저위험 음주 가이드라인(KHEPI 2013): 1회 순수알코올 남 40g·여 20g 이하(소주 기준 남 5잔·여 2.5잔 이내), 술자리는 주 1회 이하 · 음주 사회적 비용 15조 806억(2019년 기준, 건보공단)." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Sources
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      숫자는 AI가 아니라 <span className="text-muted-foreground">출처에서 온다</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      AI가 준 숫자는 이 목록의 원문에서 찾을 때까지 「없는 숫자」입니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      {sources.map((s) => (
        <div key={s.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1">
            <p className="text-base font-semibold">{s.name}</p>
            <span className="font-mono text-[10px] text-muted-foreground">{s.url}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.note}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        숫자 하나에 세 가지가 붙는다 — <span className="text-primary">기관 · 조사명 · 연도</span>
      </p>
      <p className="mt-2 text-xs text-muted-foreground">예: 「질병관리청 국민건강영양조사 2024년 잠정치」. 2025년 결과가 2026년 9월 발표 예정이라 강의 직전 최신치 재확인. 「남 2잔·여 1잔」 같은 떠도는 잔 수 기준은 공식 문서에 없다 — 잔 수는 술 종류에 따라 달라지니 그램(g)을 1차로.</p>
    </div>
  </SectionShell>
));
S.displayName = "S18SourceWhitelist";
export default S;
