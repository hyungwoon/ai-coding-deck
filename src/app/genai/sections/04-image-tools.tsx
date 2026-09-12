"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tools = [
  { name: "ChatGPT (GPT Image)", tag: "무료 한도", strength: "글자·구조가 정확, 대화로 고치기", use: "카드뉴스 초안, 도식·아이콘" },
  { name: "Gemini (Nano Banana)", tag: "무료 한도", strength: "참조 이미지 여러 장 · 캐릭터 일관성", use: "같은 주인공 시리즈" },
  { name: "Midjourney", tag: "유료", strength: "톤·색감 최상, --cref / --sref / Omni Reference", use: "표지·키비주얼 한 장" },
  { name: "FLUX.2", tag: "오픈웨이트", strength: "참조 최대 10장, 헥스 컬러 정확", use: "캠페인 색 고정" },
  { name: "Ideogram · Seedream", tag: "무료 한도", strength: "이미지 속 텍스트·상업 디자인", use: "영문 타이포 포스터 (한글은 검수)" },
  { name: "Canva AI", tag: "대학생 현실 세트", strength: "템플릿 + AI 이미지 + 한글 타이포", use: "최종 조립은 여기서" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · Tool Map · Image
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      이미지 도구 지도 <span className="text-muted-foreground">(2026.9)</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      무엇이 무엇에 강한지만 알면 됩니다 — 이름보다 「내 작업에 어느 칸을 쓰나」.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", anim(index))} style={{ transitionDelay: "225ms" }}>
      {tools.map((t) => (
        <div key={t.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2 mb-1">
            <p className="text-base font-semibold">{t.name}</p>
            <span className="rounded-full border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground whitespace-nowrap">{t.tag}</span>
          </div>
          <p className="text-sm text-muted-foreground">{t.strength}</p>
          <p className="text-xs text-primary/80 mt-1">→ {t.use}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">서포터즈 원칙 하나</p>
      <p className="text-xl sm:text-2xl font-bold">
        글자는 AI 이미지에 넣지 않는다 — <span className="text-primary">디자인 툴에서 얹는다</span>
      </p>
      <p className="mt-3 text-xs text-muted-foreground">한글 오타·경고문구 변형을 원천 차단하는 가장 싼 방법입니다. 모델·버전·무료 한도는 2026-09 기준, 강의 직전 재확인.</p>
    </div>
  </SectionShell>
));
S.displayName = "S04ImageTools";
export default S;
