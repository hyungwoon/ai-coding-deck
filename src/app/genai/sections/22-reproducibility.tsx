"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const record = [
  { k: "시드", v: "같은 그림으로 돌아가는 유일한 열쇠" },
  { k: "모델·버전", v: "같은 이름이라도 버전이 바뀌면 다른 그림이 나온다" },
  { k: "참조 이미지 원본", v: "썸네일이 아니라 넘긴 파일 그대로" },
  { k: "파라미터", v: "스텝 · 가이던스 · 변형 강도 · 해상도" },
  { k: "프롬프트 원문", v: "다듬기 전 문장까지 — 무엇을 고쳤는지가 자산이다" },
];

const bible = [
  { t: "캐릭터", d: "인물별 기준 판. 정면·측면·클로즈업" },
  { t: "로케이션", d: "장소별 기준 판. 시간대·날씨 변주까지" },
  { t: "소품", d: "반복 등장하는 사물" },
  { t: "스타일", d: "톤·색·질감의 기준 한 장" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Pipeline · 04 Reproducibility
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      잘 나온 것은 <span className="text-muted-foreground">기록해야 다시 온다</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-4 mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="sm:col-span-3 rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="font-mono text-xs text-muted-foreground mb-4">RECORD · 이걸 안 적으면 그 그림은 다시 오지 않는다</p>
        <div className="space-y-2">
          {record.map((r) => (
            <div key={r.k} className="flex items-baseline gap-3 border-b border-border/20 pb-2 last:border-0">
              <span className="w-28 shrink-0 text-sm font-semibold">{r.k}</span>
              <span className="text-xs text-muted-foreground">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2 rounded-2xl border border-primary/25 bg-primary/5 p-5">
        <p className="text-sm font-bold mb-3">에셋 바이블 — 판을 폴더로 나눈다</p>
        <div className="space-y-2">
          {bible.map((b) => (
            <div key={b.t}>
              <p className="text-xs font-semibold">{b.t}</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="font-mono text-[10px] text-muted-foreground mb-2">관측 · 공개 출품작 2,142편 분석 (2026-08)</p>
      <p className="text-base sm:text-lg font-bold mb-2">
        상위권은 샷 하나에 <span className="text-primary">더 많은 판을 물리고</span>, 프롬프트 종류는 <span className="text-primary">오히려 적게</span> 쓴다
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        매번 새 문장을 짜는 게 아니라 <span className="text-foreground">같은 판을 재사용</span>하기 때문이다. 문장을 새로 쓸수록 흔들리고,
        판을 재사용할수록 붙는다 — 정체성 드리프트를 구조로 막는 방법이다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S22Reproducibility";
export default S;
