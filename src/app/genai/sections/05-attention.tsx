"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rows = [
  { s: "항구에 배가 들어왔다", w: ["항구", "들어왔다"], mean: "선박" },
  { s: "배가 달아서 잘 익었다", w: ["달아서", "익었다"], mean: "과일" },
  { s: "배가 아파서 누웠다", w: ["아파서", "누웠다"], mean: "신체" },
];

const points = [
  { no: "01", title: "문맥이 좌표를 바꾼다", desc: "같은 토큰도 주변 토큰을 얼마나 참조하느냐에 따라 다른 자리로 옮겨 간다. 이것이 어텐션이다." },
  { no: "02", title: "그래서 프롬프트의 순서와 거리가 결과를 바꾼다", desc: "서로 관련된 지시는 붙여 쓴다. 인물 묘사 사이에 조명 지시를 끼워 넣으면 엉뚱한 곳에 달라붙는다." },
  { no: "03", title: "무관한 지시를 몰아넣으면 희석된다", desc: "주의는 나눠 갖는 자원이다. 지시 20개짜리 한 덩어리보다, 나눠서 두 번 부르는 쪽이 정확하다." },
  { no: "04", title: "형식을 주면 주의가 정렬된다", desc: "제목·구분선·번호 같은 골격은 사람을 위한 게 아니라 모델이 무엇끼리 묶어 볼지를 정해 주는 장치다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · LLM · 03 Attention
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      같은 말도 <span className="text-muted-foreground">주변을 보고 뜻이 정해진다</span>
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-6 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <p className="font-mono text-xs text-muted-foreground mb-4">ATTENTION · 「배」가 무엇을 참조하는가</p>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.s} className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-primary/20 px-2 py-1 text-sm font-bold">배</span>
            <span className="text-muted-foreground/40">←</span>
            {r.w.map((w) => (
              <span key={w} className="rounded-md bg-muted/50 px-2 py-1 font-mono text-xs text-muted-foreground">{w}</span>
            ))}
            <span className="ml-auto rounded-full border border-border/40 px-3 py-0.5 text-xs">{r.mean}</span>
          </div>
        ))}
      </div>
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
S.displayName = "S05Attention";
export default S;
