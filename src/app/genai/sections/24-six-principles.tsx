"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const principles = [
  { n: "01", t: "분포를 좁혀라", from: "모델은 확률에서 뽑는다", d: "비워 둔 자리는 모델이 대신 채운다. 안 정한 것은 지시하지 않은 게 아니라 모델에게 위임한 것이다." },
  { n: "02", t: "조건을 쌓아라", from: "말도 그림도 같은 공간의 좌표", d: "문장·참조 이미지·구조·첫 프레임은 경쟁 관계가 아니다. 겹쳐 걸수록 경우의 수가 줄어든다." },
  { n: "03", t: "단계를 나눠라", from: "생성은 원래 사슬이다", d: "한 번에 다 시키면 주의가 희석된다. 판을 먼저 만들고, 그 판을 조건으로 다음 칸을 돌린다." },
  { n: "04", t: "고정과 변주를 분리하라", from: "시드와 조건이 결과를 정한다", d: "무엇을 잠그고 무엇을 흔들지 먼저 정한다. 시드를 고정하고 한 번에 한 축만 바꿔야 인과가 보인다." },
  { n: "05", t: "금지 대신 긍정 잠금", from: "부정은 가장 약한 조건", d: "「흔들리지 않게」가 아니라 「카메라는 한 자리에 고정」. 참인 상태를 적는 쪽이 실측으로도 상위권의 습관이었다." },
  { n: "06", t: "표본을 늘려라", from: "한 번의 출력은 표본 하나", d: "가장 크게 갈린 변수가 물량이었다. 단, 무작정이 아니라 한 번에 하나만 바꾸면서 늘린다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · Principles
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      원리에서 <span className="text-muted-foreground">나오는 여섯 가지</span>
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      외울 팁이 아니라, 앞에서 본 구조에서 그대로 따라 나오는 것들이다. 왼쪽이 결론, 아래 회색이 그 근거가 된 원리.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", anim(index))} style={{ transitionDelay: "160ms" }}>
      {principles.map((p) => (
        <div key={p.n} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-mono text-xs text-primary">{p.n}</span>
            <p className="text-base font-bold">{p.t}</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.d}</p>
          <p className="border-t border-border/30 pt-2 font-mono text-[10px] text-muted-foreground/70">← {p.from}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S24SixPrinciples";
export default S;
