"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const fixed = ["캐릭터 시트 참조(하나)", "장소 플레이트 참조(편의점 앞)", "스타일 블록(필름 톤, 낮은 채도)", "절주 제약 블록", "오디오 지시(대사 없음)"];

const cuts = [
  { no: "컷 1", time: "0–8초", action: "친구들과 편의점 앞. 누군가 캔을 내밀고, 하나는 웃으며 무알코올 음료를 집는다.", camera: "고정, 미디엄 샷", caption: "「오늘은 이걸로」" },
  { no: "컷 2", time: "8–14초", action: "하나 얼굴 클로즈업. 캔을 들어 보이며 고개를 살짝 젓는다.", camera: "천천히 앞으로", caption: "「한 잔도, 내 선택」" },
  { no: "컷 3", time: "14–20초", action: "다음 날 아침. 같은 후드를 입고 상쾌하게 강의실로 걸어 들어간다.", camera: "팬, 와이드", caption: "「내일의 나에게」" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Reels · 3 Cuts
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      릴스 3컷 — <span className="text-muted-foreground">무엇을 고정하고 무엇을 바꾸나</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      고정 블록은 세 컷에 글자 하나 안 바꾸고 붙는다. 컷마다 바뀌는 건 동작·카메라·자막뿐.
    </p>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-4 mb-4 flex flex-wrap items-center gap-2", anim(index))} style={{ transitionDelay: "200ms" }}>
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mr-2">고정 · 모든 컷</p>
      {fixed.map((f) => (
        <span key={f} className="rounded-full border border-primary/30 bg-background/40 px-3 py-1 text-xs font-medium">{f}</span>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6", anim(index))} style={{ transitionDelay: "250ms" }}>
      {cuts.map((c) => (
        <div key={c.no} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-xs text-primary">{c.no}</p>
            <p className="font-mono text-[10px] text-muted-foreground">{c.time}</p>
          </div>
          <p className="text-sm font-semibold leading-snug mb-1">{c.action}</p>
          <p className="text-xs text-muted-foreground">카메라: {c.camera}</p>
          <p className="text-xs text-muted-foreground">자막: {c.caption}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        상위 출품작은 컷당 프롬프트 문장을 <span className="text-primary">덜 바꾸고(0.71 vs 0.82)</span>, <span className="text-primary">더 많이 다시 굴렸다(2.33 vs 2.00)</span>
      </p>
      <p className="mt-2 text-xs text-muted-foreground">문장을 얼리고 주사위를 굴린다. 한 출품작은 같은 프롬프트를 시드만 바꿔 150번 돌렸다(강사 자체 분석, Higgsfield AI Film Festival 공개 출품작 2,142편, 2026-08). 자막·글자는 CapCut에서 얹는다.</p>
    </div>
  </SectionShell>
));
S.displayName = "S14Reels3Cuts";
export default S;
