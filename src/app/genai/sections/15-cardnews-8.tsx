"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const steps = [
  { no: "01", title: "스타일 블록을 먼저 확정", desc: "색 2~3개(헥스 코드), 일러스트인지 사진인지, 여백·선 굵기. 이 문단은 8장 내내 같다." },
  { no: "02", title: "1장을 완성하고, 나머지 7장은 그걸 참조로", desc: "첫 장이 시트 역할. 매 장 첫 장 이미지를 첨부하고 「같은 스타일·같은 팔레트」 한 줄." },
  { no: "03", title: "글자는 넣지 않는다", desc: "제목·수치·경고문구는 Canva·Figma에서 얹는다. AI 이미지 속 한글은 오타의 온상." },
  { no: "04", title: "같은 문장, 3~5번 굴려서 고른다", desc: "마음에 안 들면 문장을 고치기 전에 한 번 더. 고친 문장은 다른 그림을 부른다." },
  { no: "05", title: "수치·문구는 출처 문서에서 붙인다", desc: "이미지가 완성돼도 숫자는 AI가 준 게 아니라 절주온·질병관리청 원문에서 — Part 4." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Card News · 8 Pages
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      카드뉴스 8장, <span className="text-muted-foreground">같은 톤으로</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      캐릭터가 없어도 원리는 같다 — 「스타일」이 주인공이고, 첫 장이 시트다.
    </p>

    <div className={cn("grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      <div className="flex flex-col gap-3">
        {steps.map((s) => (
          <div key={s.no} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{s.no}</span>
            <div>
              <p className="text-sm font-semibold leading-snug mb-1">{s.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 self-start lg:w-64">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-border/40 flex items-center justify-center"
            style={{ background: `oklch(${0.22 + (i % 4) * 0.03} 0 0)` }}
          >
            <p className="font-mono text-[10px] text-muted-foreground/60">{i === 0 ? "시트" : `${i + 1}`}</p>
          </div>
        ))}
        <p className="col-span-4 font-mono text-[10px] text-muted-foreground/60 text-center">첫 장이 시트, 나머지 7장은 그 참조</p>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        「그대로 유지해줘」는 안 먹힌다 — <span className="text-primary">지금 참인 상태를 긍정문으로 다시 쓴다</span>
      </p>
      <p className="mt-2 text-xs text-muted-foreground">힉스필드 분석: preserve · keep the same · unchanged 류는 오히려 하위권에 더 많았다(상위 35.9% vs 43.6%). 상위권은 「배경은 흰색, 선은 검정 2px, 팔레트는 #… #…」처럼 다시 서술했다.</p>
    </div>
  </SectionShell>
));
S.displayName = "S15CardNews8";
export default S;
