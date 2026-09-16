"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const gap = [
  { l: "생성 횟수 (중앙값)", top: "283건", bottom: "71건", x: "4.0배" },
  { l: "정리한 폴더 수 (중앙값)", top: "9개", bottom: "1개", x: "9.0배" },
];

const findings = [
  {
    n: "01", t: "1위 변수는 문장력이 아니라 물량",
    d: "규모를 맞춰 다시 재면, 29개 프롬프트 특징 중 통계적으로 살아남는 게 거의 없다. 「상위권은 프롬프트를 이렇게 쓴다」의 상당수는 「상위권은 더 많이 만들었다」의 다른 표현이었다.",
  },
  {
    n: "02", t: "규모를 맞춰도 남는 것 = 에셋 정리",
    d: "캐릭터·로케이션·소품을 폴더로 나눠 관리하는 습관은 물량을 통제한 뒤에도 1.4~1.5배 차이로 남았다. 프롬프트가 아니라 작업 구조가 변별했다.",
  },
  {
    n: "03", t: "역전 — 「보존·금지」는 오히려 하위권 쪽",
    d: "「그대로 유지」·「바꾸지 마」 류의 지시는 규모를 맞추면 오히려 하위권에서 더 많았다(0.82배). 상위권은 같은 것을 긍정문으로 다시 진술한다.",
  },
  {
    n: "04", t: "남의 매직 프롬프트를 베끼지 마라",
    d: "효과가 커 보이는 문구일수록 한 작가의 말버릇이었다 — 수백 건의 수치가 단 한 작품에서 나온 사례가 여럿. 기법처럼 보이는 것의 상당수는 개인의 사투리다.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · Evidence
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      실제로 <span className="text-muted-foreground">무엇이 결과를 갈랐나</span>
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      한 AI 영상 플랫폼의 공개 출품작 <span className="text-foreground">2,142편</span> · 생성 <span className="text-foreground">42만 건</span> ·
      프롬프트 <span className="text-foreground">18만 건</span>을 직접 수집해 분석한 결과 (2026-08).
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5", anim(index))} style={{ transitionDelay: "160ms" }}>
      {gap.map((g) => (
        <div key={g.l} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-[10px] text-muted-foreground mb-3">{g.l}</p>
          <div className="flex items-baseline gap-4">
            <div>
              <p className="text-3xl font-bold text-primary">{g.top}</p>
              <p className="font-mono text-[10px] text-muted-foreground">상위권</p>
            </div>
            <span className="text-muted-foreground/40">vs</span>
            <div>
              <p className="text-2xl font-bold text-muted-foreground">{g.bottom}</p>
              <p className="font-mono text-[10px] text-muted-foreground">하위권</p>
            </div>
            <span className="ml-auto rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">{g.x}</span>
          </div>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      {findings.map((f) => (
        <div key={f.n} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{f.n}</span>
          <div>
            <p className="text-sm font-semibold leading-snug mb-1">{f.t}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.d}</p>
          </div>
        </div>
      ))}
    </div>

    <p className={cn("mt-4 text-[11px] text-muted-foreground/70 leading-relaxed", anim(index))} style={{ transitionDelay: "320ms" }}>
      ⚠️ 관측 데이터다 — 「이 습관이 성과를 만든다」가 아니라 「성과를 낸 작업들이 이 습관을 함께 갖고 있었다」까지만 말한다.
    </p>
  </SectionShell>
));
S.displayName = "S23Evidence";
export default S;
