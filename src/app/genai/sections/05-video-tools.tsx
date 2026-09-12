"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tools = [
  { name: "Veo 3.1 (Google)", spec: "8초 + 확장 · 네이티브 오디오", strength: "물리 사실감(빛·물·직물), 대사·효과음 동시 생성. Gemini 안에서 씀." },
  { name: "Kling 3.0", spec: "최대 15초 · 오디오", strength: "블라인드 테스트 상위. Elements로 인물·사물 참조, 시작·끝 프레임 지정." },
  { name: "Seedance 2.x", spec: "긴 단일 컷(2.5: 30초)", strength: "오디오+영상 통합. CapCut·Dreamina 계열에서 접근." },
  { name: "Runway Gen-4.5", spec: "편집·VFX 워크플로우", strength: "만든 컷을 고치고 잇는 데 강함." },
  { name: "Higgsfield", spec: "여러 모델을 한 화면에서", strength: "캐릭터·참조 슬롯, 카메라 프리셋. 위 모델들을 안에서 호출하는 허브." },
  { name: "CapCut", spec: "대학생 현실 세트", strength: "AI 컷 5~8초 × 3~4개 + 자막·음악·연결은 여기서." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · Tool Map · Video
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      영상 도구 지도 <span className="text-muted-foreground">(2026.9)</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      공통점: 짧은 컷 단위로 만들고, 참조로 붙잡고, 소리까지 지시한다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", anim(index))} style={{ transitionDelay: "225ms" }}>
      {tools.map((t) => (
        <div key={t.name} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <p className="text-base font-semibold">{t.name}</p>
          <p className="font-mono text-xs text-muted-foreground mb-1">{t.spec}</p>
          <p className="text-sm text-muted-foreground">{t.strength}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">릴스 30초를 설계하는 법</p>
      <p className="text-xl sm:text-2xl font-bold">
        「긴 영상 한 번」이 아니라 <span className="text-primary">「컷 4개 + 같은 참조 + 자막」</span>
      </p>
      <p className="mt-3 text-xs text-muted-foreground">5~15초가 표준인 이유는 Part 2에서. 모델·스펙은 2026-09 기준이며 바뀝니다 — 강의 직전 재확인.</p>
    </div>
  </SectionShell>
));
S.displayName = "S05VideoTools";
export default S;
