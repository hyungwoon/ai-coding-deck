"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const cards = [
  { k: "도구를 배우면", v: "6개월 뒤 다시 배운다", d: "모델 이름·버튼 위치·가격은 계속 바뀐다. 작년 「필수 팁」의 절반은 이미 틀렸다." },
  { k: "원리를 알면", v: "처음 보는 도구도 읽힌다", d: "슬라이더 이름이 달라도 그것이 어느 칸을 만지는 손잡이인지 안다." },
  { k: "그래서 순서가", v: "원리 → 유도 → 실전", d: "「이렇게 쓰세요」를 외우는 대신, 왜 그게 먹히는지에서 방법을 꺼낸다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · Why principles
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      생성은 주문이 아니라 <span className="text-muted-foreground">조건 설계다</span>
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {cards.map((c) => (
        <div key={c.k} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-[11px] text-muted-foreground mb-2">{c.k}</p>
          <p className="text-lg font-bold leading-snug mb-2">{c.v}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{c.d}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="font-mono text-[11px] text-muted-foreground mb-2">오늘의 한 문장 — 이 문장 하나로 뒤의 모든 기법이 유도된다</p>
      <p className="text-xl sm:text-2xl font-bold leading-snug">
        프롬프트도, 참조 이미지도, 첫 프레임도, 노드 연결선도 전부 같은 것이다 —
        <br className="hidden sm:block" />
        <span className="text-primary">모델이 뽑을 수 있는 경우의 수를 좁히는 「조건」</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S01Thesis";
export default S;
