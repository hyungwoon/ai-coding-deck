"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tools = [
  { name: "Gemini · Nano Banana Pro", feat: "참조 이미지 최대 14장", note: "인물 5명까지 동시 유지. 캐릭터 시트 + 장소 사진 + 스타일 샘플을 한 번에." },
  { name: "Midjourney", feat: "--cref · --sref · Omni Reference", note: "cref = 캐릭터, sref = 스타일. v7 Omni Reference는 사물까지." },
  { name: "FLUX.2", feat: "참조 최대 10장 · 헥스 컬러", note: "캠페인 색을 #코드로 못 박을 때." },
  { name: "Kling", feat: "Elements · 시작/끝 프레임", note: "인물·사물을 요소로 등록, 컷의 첫·끝 장면을 이미지로 지정." },
  { name: "Veo 3.1", feat: "참조 이미지 · 확장(extend)", note: "이전 컷의 마지막 상태를 다음 생성의 조건으로 넘긴다." },
  { name: "Higgsfield", feat: "참조 슬롯 · 이전 클립 참조", note: "프롬프트 안에 참조 토큰을 대명사처럼 끼워 쓴다 — 상위작 프롬프트 61.8%가 이 방식." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Reference Features
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      참조 기능 지도 — <span className="text-muted-foreground">이름은 달라도 원리는 하나</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      참조 이미지의 특징을 뽑아 생성 조건에 섞는다. 도구가 바뀌어도 여러분의 시트는 그대로 갑니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8", anim(index))} style={{ transitionDelay: "225ms" }}>
      {tools.map((t) => (
        <div key={t.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <p className="text-base font-semibold">{t.name}</p>
          <p className="font-mono text-xs text-primary/80 mb-1">{t.feat}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.note}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">기능 이름은 2026-09 기준 — 바뀌어도 상관없는 이유</p>
      <p className="text-xl sm:text-2xl font-bold">
        여러분이 관리할 것은 도구가 아니라 <span className="text-primary">참조 폴더</span>다: 캐릭터 · 장소 · 소품 · 스타일
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S12ReferenceMap";
export default S;
