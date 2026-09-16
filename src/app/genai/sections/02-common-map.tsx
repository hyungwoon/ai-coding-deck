"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const flow = [
  { n: "1", t: "조건", d: "프롬프트 · 참조 이미지 · 구조 · 첫 프레임" },
  { n: "2", t: "확률 분포", d: "조건에 맞는 「가능한 결과들」의 지형" },
  { n: "3", t: "표본 추출", d: "그중 하나를 뽑는다 — 시드가 어디를 뽑을지 정한다" },
  { n: "4", t: "결과", d: "매번 다르다. 같은 조건 + 같은 시드면 같다" },
];

const media = [
  { m: "텍스트", pick: "다음 토큰 하나", unit: "토큰", loop: "한 개씩, 끝까지 반복" },
  { m: "이미지", pick: "잠재공간의 그림 한 장", unit: "압축된 좌표", loop: "노이즈를 20~50번 지움" },
  { m: "영상", pick: "시간까지 포함한 조각 뭉치", unit: "시공간 패치", loop: "클립 전체를 한꺼번에" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · The one diagram
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      셋은 <span className="text-muted-foreground">같은 구조</span>다
    </h2>

    <div className={cn("flex flex-col sm:flex-row items-stretch gap-2 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      {flow.map((f, i) => (
        <div key={f.n} className="flex flex-1 items-center gap-2">
          <div className="flex-1 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="font-mono text-[10px] text-primary mb-1">STEP {f.n}</p>
            <p className="text-base font-bold mb-1">{f.t}</p>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{f.d}</p>
          </div>
          {i < flow.length - 1 && <span className="hidden sm:block text-muted-foreground/40 shrink-0">→</span>}
        </div>
      ))}
    </div>

    <div className={cn("overflow-hidden rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm mb-6", anim(index))} style={{ transitionDelay: "250ms" }}>
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5">매체</th>
            <th className="px-4 py-2.5">무엇을 뽑나</th>
            <th className="px-4 py-2.5">단위</th>
            <th className="px-4 py-2.5">반복 방식</th>
          </tr>
        </thead>
        <tbody>
          {media.map((r) => (
            <tr key={r.m} className="border-t border-border/30">
              <td className="px-4 py-3 font-semibold">{r.m}</td>
              <td className="px-4 py-3 text-muted-foreground">{r.pick}</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.unit}</td>
              <td className="px-4 py-3 text-muted-foreground">{r.loop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className={cn("text-lg sm:text-xl font-bold", anim(index))} style={{ transitionDelay: "320ms" }}>
      다른 건 <span className="text-muted-foreground">「무엇을 뽑는가」</span> 하나뿐 —
      조건을 거는 법은 셋이 똑같다
    </p>
  </SectionShell>
));
S.displayName = "S02CommonMap";
export default S;
