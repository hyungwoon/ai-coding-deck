"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const excerpts = [
  { section: "ACTIVE REFERENCES", text: "<<<ref_1>>>: The same woman in a belted beige trench coat over a dark chocolate-brown shift dress, soaked by rain: her bob flattened and darkened by water. 100% matches the reference." },
  { section: "FORMAT MODE", text: "Controlled two-shot sequence: ONE HARD CUT ONLY, at 0:06. The camera does not cut anywhere else. No subtitles, no music." },
  { section: "OPTICS · CAMERA", text: "35° diagonal field of view, unchanged from its first frame to its last. The camera physically travels backward and upward, never because the lens changes. No zoom at any point." },
  { section: "AUDIO", text: "no music and no spoken voice of any kind. NOBODY SPEAKS at any point. THE FIRST SECOND IS ABSOLUTELY SILENT. AT 0:01 THE RAIN ARRIVES ALL AT ONCE." },
];

const extra = [
  { name: "동작 · 타이밍", ex: "0–3초 걸어 들어옴 · 3–6초 음료를 집음 · 6–8초 카메라를 본다" },
  { name: "카메라 움직임", ex: "고정 / 천천히 뒤로 / 팬 — 하나만, 줌 없음" },
  { name: "길이 · 컷 수", ex: "8초, 컷 없음(또는 0:04에 하드컷 1회)" },
  { name: "오디오", ex: "대사 없음, 배경음 없음, 빗소리만 — 또는 「소리 없음」" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Prompt Anatomy · Video
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      영상 프롬프트 = <span className="text-muted-foreground">이미지 8칸 + 4칸</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      상위 출품작 프롬프트 원문(영어) 발췌 — 섹션 이름을 대문자로 나누고, 초 단위로 지시한다.
    </p>

    <div className={cn("grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-4 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      <div className="flex flex-col gap-2">
        {excerpts.map((e) => (
          <div key={e.section} className="rounded-xl border border-border/40 bg-muted/30 p-3">
            <p className="font-mono text-[10px] tracking-widest text-primary/80 mb-1">{e.section}</p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{e.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {extra.map((x, i) => (
          <div key={x.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1">+{i + 1} · {x.name}</p>
            <p className="text-sm font-semibold leading-snug">{x.ex}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        29개 프롬프트 특징 중 상위권과 나머지를 실제로 가른 건 단 하나 — <span className="text-primary">「소리 없음」을 명시했는가</span> (63% vs 48%)
      </p>
      <p className="mt-2 text-xs text-muted-foreground">생성량으로 층화한 뒤 남은 유일한 유의 차이. 나머지 「상위권은 이렇게 쓴다」는 대부분 「상위권은 더 많이 만들었다」의 다른 표현이었다. — 발췌 출처: Higgsfield AI Film Festival 공개 출품작 《The Prompter》 등, 강사 자체 분석(2,142편·프롬프트 184,205건, 2026-08).</p>
    </div>
  </SectionShell>
));
S.displayName = "S13VideoAnatomy";
export default S;
