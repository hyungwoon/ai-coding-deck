"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const block = `[절주 제약 — 모든 이미지·영상 프롬프트 끝에 그대로 붙임]
- 술병·술잔·주류 브랜드·로고가 보이지 않는다. 음료가 필요하면 라벨 없는 무알코올 음료.
- 음주를 즐겁게·멋지게 보여주는 장면(건배, 취해서 웃는 얼굴)은 없다. 음주 장면 자체를 최소화한다.
- 미성년자·임산부가 술과 함께 보이지 않는다. 운전·작업 상황과 술을 같이 두지 않는다.
- 폭력·위험 행동과 음주를 연결하지 않는다.
- 실존 인물·연예인을 닮지 않은 가상의 인물. 실존 인물 사진을 참조로 쓰지 않는다.
- 이미지 안에 글자·숫자·경고문구를 그리지 않는다. 텍스트는 디자인 툴에서 얹는다.`;

const basis = [
  { name: "국민건강증진법 제8조의2", desc: "주류광고 기준 — 음주 권장·유도 묘사, 미성년·임산부 음주 묘사, 운전·작업 중 음주, 검증 안 된 건강효과 표현 금지. 「부적절한 음주 묘사」의 법적 정의로 빌려 쓴다." },
  { name: "미디어 음주장면 가이드라인", desc: "2017년 10개 항목 → 2023년 12개 항목(유튜브·OTT 술방 조항 추가). 음주 장면 최소화, 긍정적 묘사 지양, 청소년 음주 금지, 위험 행동 연계 금지. 여러분의 모니터링 기준이기도 하다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 → 4 · Constraint Block
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      절주 제약 블록 — <span className="text-muted-foreground">일관성과 공공성이 만나는 자리</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      캐릭터 시트가 「같은 얼굴」을 지키듯, 이 블록은 「맞는 장면」을 지킨다. 매 프롬프트에 글자 하나 안 바꾸고 붙인다.
    </p>

    <div className={cn("grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 font-mono text-sm leading-relaxed whitespace-pre-line">
        {block}
      </div>
      <div className="flex flex-col gap-3">
        {basis.map((b) => (
          <div key={b.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="text-sm font-semibold mb-1">{b.name}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        비운 칸은 확률이 채운다 — <span className="text-primary">술병이 「저절로」 나오는 게 아니라, 금지하지 않아서 나온다</span>
      </p>
      <p className="mt-2 text-xs text-muted-foreground">근거: 국민건강증진법 제8조의2·시행령 제10조(법제처) · 보건복지부·KHEPI 미디어 음주장면 가이드라인(2017, 2023 개정). 12개 항목 원문은 절주온에서 확인.</p>
    </div>
  </SectionShell>
));
S.displayName = "S17ConstraintBlock";
export default S;
