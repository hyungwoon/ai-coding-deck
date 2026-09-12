"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const slots = [
  { label: "SUBJECT", name: "주제", ex: "20대 대학생 「하나」, 검은 단발, 회색 후드" },
  { label: "ACTION", name: "행동", ex: "편의점 앞에서 무알코올 음료를 들고 웃는다" },
  { label: "SETTING", name: "배경", ex: "밤의 캠퍼스 편의점 앞, 비 그친 젖은 보도" },
  { label: "COMPOSITION", name: "구도", ex: "허리 위 미디엄 샷, 인물은 오른쪽 1/3" },
  { label: "CAMERA", name: "카메라", ex: "35mm, 눈높이, 얕은 심도" },
  { label: "LIGHTING", name: "조명", ex: "편의점 형광 불빛 + 가로등 역광" },
  { label: "STYLE", name: "스타일", ex: "따뜻한 필름 사진 느낌, 낮은 채도" },
  { label: "CONSTRAINT", name: "제약", ex: "술병·주류 브랜드·취한 표정 없음, 글자 없음", hl: true },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Prompt Anatomy · Image
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      이미지 프롬프트 <span className="text-muted-foreground">8칸</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      순서보다 빠짐없이. 칸을 비우면 모델이 확률로 채운다 — 그게 술병이 저절로 나오는 이유.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      {slots.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "rounded-2xl border p-4 shadow-sm backdrop-blur-sm",
            s.hl ? "border-primary/40 bg-primary/5" : "border-border/40 bg-card/80",
          )}
        >
          <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1">0{i + 1} · {s.label} · {s.name}</p>
          <p className="text-sm font-semibold leading-snug">{s.ex}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-1">힉스필드 페스티벌 분석에서 —</p>
      <p className="text-lg sm:text-xl font-bold">
        라벨을 붙이는 것 자체는 차별점이 아니었다. <span className="text-primary">세 칸 이상을 충실히 채운 프롬프트</span>가 상위권에 6.4배 많았다.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">강사 자체 분석 · Higgsfield AI Film Festival 공개 출품작 2,142편 · 프롬프트 184,205건 · 2026-08.</p>
    </div>
  </SectionShell>
));
S.displayName = "S10ImageAnatomy";
export default S;
