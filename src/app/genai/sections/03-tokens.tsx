"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const en = ["straw", "berry", " is", " red"];
const ko = ["딸", "기", "는", " 빨", "갛", "다"];

const points = [
  { no: "01", title: "모델은 글자를 보지 못한다", desc: "입력은 「토큰 번호의 줄」로 바뀌어 들어간다. 토큰 안에 몇 글자가 들어 있는지는 모델에게 보이지 않는다." },
  { no: "02", title: "그래서 글자 세기·거꾸로 쓰기가 약하다", desc: "「딸기에 ㄱ이 몇 개?」 같은 질문은 모델에게 봉투 속을 세어 보라는 요구다. 계산기·코드로 시키면 정확해진다." },
  { no: "03", title: "한국어는 더 잘게 쪼개진다", desc: "같은 뜻이라도 영어보다 토큰이 많이 든다 — 컨텍스트도 요금도 그만큼 더 쓴다." },
  { no: "04", title: "토큰은 과금·한도의 단위", desc: "「글자 수」가 아니라 토큰 수가 컨텍스트 한도와 비용을 결정한다. 긴 붙여넣기의 대가가 여기서 나온다." },
];

const Chip = ({ t, tone }: { t: string; tone: string }) => (
  <span className={cn("rounded-md px-2 py-1 font-mono text-sm", tone)}>{t.replace(/ /g, "␣")}</span>
);

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · LLM · 01 Tokens
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      모델은 세상을 <span className="text-muted-foreground">조각으로 자른다</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">TOKENIZATION · 개념도 — 실제 분할은 모델마다 다르다</p>
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 shrink-0 font-mono text-[10px] text-muted-foreground">EN</span>
          {en.map((t, i) => <Chip key={i} t={t} tone="bg-muted/50" />)}
          <span className="font-mono text-[10px] text-muted-foreground">→ 4 토큰</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 shrink-0 font-mono text-[10px] text-muted-foreground">KO</span>
          {ko.map((t, i) => <Chip key={i} t={t} tone="bg-primary/15" />)}
          <span className="font-mono text-[10px] text-muted-foreground">→ 6 토큰</span>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        모델이 실제로 받는 것: <span className="font-mono">[3175, 19772, 374, 2579]</span> — 숫자의 줄이다.
      </p>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      {points.map((p) => (
        <div key={p.no} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{p.no}</span>
          <div>
            <p className="text-sm font-semibold leading-snug mb-1">{p.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S03Tokens";
export default S;
