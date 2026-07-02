"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { ContactQR } from "@/components/contact-qr";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const items = [
  {
    label: "KIT 01",
    title: "템플릿 6종 전문",
    desc: "T1 브레인스토밍부터 T6 후속 다듬기까지 — 복사 버튼 한 번으로 바로 씁니다.",
  },
  {
    label: "KIT 02",
    title: "고정 블록 3",
    desc: "어떤 프롬프트 앞에도 붙이는 공통 블록 — 역할·출처 규칙·검증 요구.",
  },
  {
    label: "KIT 03",
    title: "게시 전 체크리스트",
    desc: "올리기 전 마지막 5문 — 하나라도 막히면 게시를 멈춥니다.",
  },
  {
    label: "KIT 04",
    title: "출처 화이트리스트",
    desc: "국가건강정보포털·질병관리청·KHEPI 등 믿고 시작하는 공식 출처 모음.",
  },
  {
    label: "KIT 05",
    title: "실습 채점표",
    desc: "오늘 실습 결과물을 스스로 점검하는 기준표.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · 배포
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      가져가세요 — <span className="text-muted-foreground">프롬프트 킷</span>
    </h2>

    <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="flex flex-col gap-3">
        {items.map((it) => (
          <div key={it.label} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
            <p className="font-mono text-xs text-muted-foreground mb-1">{it.label}</p>
            <p className="text-lg font-semibold">{it.title}</p>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/40 bg-card/80 p-8 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Scan</p>
        <ContactQR path="/health-research/kit" size={160} />
        <p className="font-mono text-sm text-muted-foreground">/health-research/kit</p>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">슬라이드가 아니라 도구로 —</p>
      <p className="text-xl sm:text-2xl font-bold">
        이 링크는 <span className="text-primary">활동 기간 내내</span> 남습니다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S26PromptKit";
export default S;
