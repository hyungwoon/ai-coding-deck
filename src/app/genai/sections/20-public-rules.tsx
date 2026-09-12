"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rules = [
  { no: "01", title: "주류광고 경고문구는 원문 그대로", desc: "현행 고시 3종 중 택1 — 「알코올은 발암물질로 지나친 음주는 간암, 위암 등을 일으킵니다. 임신 중 음주는 기형아 출생 위험을 높입니다.」 AI에게 「비슷하게 써줘」 금지. 3종 전문은 킷에. 2026-11-09 개정(경고그림 병행·음주운전 문구) 시행 예정 — 강의일엔 아직 전." },
  { no: "02", title: "위반의 60%는 인스타그램에서", desc: "2023년 국민건강증진법 위반 주류광고 2,547건 중 인스타그램 60%, 페이스북 25%. 여러분이 활동하는 바로 그 채널이다." },
  { no: "03", title: "AI 표시 — 법은 사업자에게, 신뢰는 여러분에게", desc: "인공지능기본법 제31조(2026-01-22 시행)의 표시 의무 주체는 AI 사업자. 학생 개인은 대상이 아니다. 그러나 YouTube는 합성 콘텐츠 미공개 시 강제 라벨, Meta는 「AI info」 라벨을 붙인다." },
  { no: "04", title: "공공 캠페인의 표시 원칙", desc: "「이미지: AI 생성(도구명) · 사실 확인: 절주온, 2026-09」 한 줄. 법이 시켜서가 아니라 공공 메시지의 신뢰가 자산이라서." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Public Message Rules
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      공공 메시지의 규칙 — <span className="text-muted-foreground">법 · 플랫폼 · 신뢰</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      규칙은 세 겹입니다. 법이 안 시켜도 플랫폼이 붙이고, 플랫폼이 안 붙여도 독자가 묻습니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      {rules.map((r) => (
        <div key={r.no} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{r.no}</span>
          <div>
            <p className="text-sm font-semibold leading-snug mb-1">{r.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        2024년 공익광고제 대상작이 AI 생성으로 드러났을 때 논란이 된 건 <span className="text-primary">AI 사용이 아니라 검수 안 된 손가락</span>이었다
      </p>
      <p className="mt-2 text-xs text-muted-foreground">출처: 법제처 인공지능기본법 제31조 · 보건복지부 고시 「과음 경고문구 표기내용」(현행 2021-01-05) · 보건복지부 보도자료(2021 개정) · 국회의원실 자료(2023 위반 통계) · YouTube 고객센터 · Meta 뉴스룸 · 서울신문 2024-02-29.</p>
    </div>
  </SectionShell>
));
S.displayName = "S20PublicRules";
export default S;
