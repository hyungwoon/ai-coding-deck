"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const conds = [
  { t: "첫 프레임 (image-to-video)", s: "가장 강함", d: "이미지 단계에서 이미 통제한 인물·구도·색을 통째로 물려준다. 영상 품질의 대부분이 여기서 결정된다." },
  { t: "끝 프레임 · 키프레임", s: "강함", d: "시작과 끝을 못 박으면 그 사이만 모델이 채운다 — 자유도를 줄여 사고를 줄인다." },
  { t: "참조 인물·스타일 고정", s: "중간", d: "여러 컷에 같은 판(plate)을 물린다. 컷마다 새로 추첨되는 걸 막는 장치." },
  { t: "카메라 프리셋·모션 지정", s: "중간", d: "달리·크레인·오빗처럼 이름 붙은 움직임은 검증된 조건이다. 자유 서술보다 안정적이다." },
  { t: "오디오 지시", s: "놓치기 쉬움", d: "적지 않으면 모델이 알아서 넣는다. 「대사 없음, 배경음 없음」도 명시적인 조건이다." },
];

const order = [
  { n: "1", t: "구조 선언", d: "「한 컷으로 간다」 또는 「지정한 지점에서만 컷」 — 컷 권한을 먼저 회수한다" },
  { n: "2", t: "비트별 초 배정", d: "0~2초 / 2~5초 / 5~8초에 무엇이 일어나는지" },
  { n: "3", t: "카메라", d: "위치·화각·움직임. 고정이면 고정이라고 적는다" },
  { n: "4", t: "긍정 잠금", d: "「흔들리지 않는다」가 아니라 「카메라는 8초 내내 한 자리에 있다」" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Bridge · 원리에서 유도하기
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      그래서 영상은 <span className="text-muted-foreground">조건을 더 건다</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="sm:col-span-3 space-y-2">
        {conds.map((c) => (
          <div key={c.t} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <p className="text-sm font-semibold">{c.t}</p>
              <span className="shrink-0 rounded-full border border-border/40 px-2 py-0.5 font-mono text-[9px] text-muted-foreground">{c.s}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="sm:col-span-2">
        <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5 h-full">
          <p className="text-sm font-bold mb-1">영상 프롬프트는 묘사가 아니라 <span className="text-primary">샷 지시서</span></p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            분위기를 적는 글이 아니라, 촬영 감독에게 넘기는 주문서의 형태로 쓴다.
          </p>
          <div className="space-y-3">
            {order.map((o) => (
              <div key={o.n} className="flex items-start gap-2">
                <span className="font-mono text-xs text-primary shrink-0 mt-0.5">{o.n}</span>
                <div>
                  <p className="text-xs font-semibold leading-snug">{o.t}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{o.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S18VideoConditions";
export default S;
