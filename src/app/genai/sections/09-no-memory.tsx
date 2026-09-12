"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const methods = [
  { no: "①", title: "참조 이미지", strength: "가장 강함", desc: "캐릭터 시트·장소 사진을 매번 첨부한다. 참조의 특징이 숫자로 뽑혀 조건에 섞인다. 도구를 바꿔도 시트는 그대로." },
  { no: "②", title: "고정 블록(문장)", strength: "그 다음", desc: "캐릭터·스타일·제약 문단을 매 프롬프트 앞에 글자 하나 안 바꾸고 붙인다. 바꾸는 건 장면 부분만." },
  { no: "③", title: "시드(seed)", strength: "보조", desc: "시작 노이즈를 고정하면 같은 문장에서 비슷한 구도가 나온다. 도구가 지원할 때만." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Why Consistency Is Hard
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      모델에겐 <span className="text-muted-foreground">기억이 없다</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      매 생성은 새 추첨입니다. 어제 만든 주인공을 모델은 모릅니다 — 기억은 밖에서 넣어줘야 합니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8", anim(index))} style={{ transitionDelay: "225ms" }}>
      {methods.map((m) => (
        <div key={m.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-sm text-primary">{m.no}</p>
            <span className="rounded-full border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{m.strength}</span>
          </div>
          <p className="text-lg font-semibold leading-snug mb-1">{m.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">우선순위: 이미지 → 문장 → 시드. 그리고 한 가지 더 —</p>
      <p className="text-xl sm:text-2xl font-bold">
        틀리면 <span className="text-muted-foreground line-through">다시 써서</span> 고치지 말고, <span className="text-primary">다시 굴려서</span> 고른다
      </p>
      <p className="mt-3 text-xs text-muted-foreground">Part 3에서 힉스필드 AI 필름 페스티벌 출품작 2,142편·프롬프트 18만 건 분석으로 이 문장의 근거를 봅니다.</p>
    </div>
  </SectionShell>
));
S.displayName = "S09NoMemory";
export default S;
