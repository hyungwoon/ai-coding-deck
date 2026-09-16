"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const families = [
  {
    tag: "계보 A",
    name: "디퓨전 + 어댑터",
    how: "참조를 별도 통로로 주입한다. 깊이·자세·정체성을 각각 다른 어댑터가 맡고, 각 통로마다 세기 조절이 따로 있다.",
    feel: "손잡이가 많다 — 세밀하게 통제되지만 조립이 필요하다",
    ex: "노드 편집기·이미지 생성 전문 도구 계열",
  },
  {
    tag: "계보 B",
    name: "네이티브 멀티모달",
    how: "이미지를 텍스트와 같은 줄에 놓고 함께 읽는다. 참조가 「문맥」이 되고, 수정 요청은 대화의 다음 차례가 된다.",
    feel: "말로 고친다 — 「왼쪽 사람 옷만 파란색으로」가 통하고 글자도 정확해졌다",
    ex: "채팅형 이미지 모델 계열 (GPT Image · Nano Banana 등)",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Image · 05 Why it looks alike
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      왜 <span className="text-muted-foreground">「닮았지만 다른」</span> 그림이 나오나
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-5 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "140ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">참조는 점이 아니라 영역을 가리킨다</p>
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
        <div className="relative h-40 w-full max-w-[280px] shrink-0 rounded-xl border border-border/30 bg-muted/20">
          <span className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/40 bg-primary/5" />
          <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          <span className="absolute left-1/2 top-[calc(50%-62px)] -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-primary">참조 이미지</span>
          {[[38, 34], [62, 40], [36, 64], [64, 66], [50, 30]].map(([x, y], i) => (
            <span key={i} className="absolute size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-foreground/70" style={{ left: `${x}%`, top: `${y}%` }} />
          ))}
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-muted-foreground">실제로 나오는 그림들</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          모델은 참조를 <span className="text-foreground font-medium">좌표</span>로 바꾼 뒤 그 <span className="text-foreground font-medium">근처에서 다시 그린다</span>.
          복사해 붙이는 게 아니라 같은 동네에서 새로 뽑는 것 — 그래서 매번 닮았지만 같지는 않다.
          <br className="hidden sm:block" />
          참조를 여러 장 주거나 설명을 더 붙이면 이 <span className="text-foreground font-medium">영역이 좁아진다</span>. 일관성이 올라가는 건 그래서다.
        </p>
      </div>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5", anim(index))} style={{ transitionDelay: "230ms" }}>
      {families.map((f) => (
        <div key={f.tag} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-mono text-[10px] text-primary">{f.tag}</span>
            <p className="text-base font-bold">{f.name}</p>
          </div>
          <p className="text-xs leading-relaxed mb-3">{f.how}</p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{f.feel}</p>
          <p className="font-mono text-[10px] text-muted-foreground/70">{f.ex}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "310ms" }}>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <p className="text-sm font-bold mb-1">둘의 공통 한계 — 어느 쪽이든 재생성이다</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          「이 부분은 그대로 두세요」라고 해도 원본 픽셀이 보존된다는 보장은 없다. 로고·얼굴·문구처럼
          <span className="text-foreground"> 정확히 같아야 하는 것</span>은 생성에 맡기지 말고 편집기에서 얹는다.
        </p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">한 줄 정리</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          계보 A는 <span className="text-foreground">통로를 늘려</span> 참조를 넣고, 계보 B는 <span className="text-foreground">대화에 끼워</span> 참조를 넣는다.
          하는 일은 같다 — 그림을 조건으로 바꾸는 것.
        </p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S14WhySimilar";
export default S;
