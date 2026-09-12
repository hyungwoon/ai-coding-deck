"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const fails = [
  { no: "01", fail: "얼굴이 컷마다 바뀐다", fix: "시트 첨부 + 「참조와 100% 일치」 한 줄. 옷·얼굴 문장 설명은 지운다." },
  { no: "02", fail: "「그대로 유지해줘」가 안 먹힌다", fix: "지금 참인 상태를 긍정문으로 다시 서술한다. 금지어보다 사실 서술." },
  { no: "03", fail: "한글이 깨진다", fix: "이미지에 글자를 넣지 않는다. 텍스트는 디자인 툴에서." },
  { no: "04", fail: "손가락·잔·병이 뒤틀린다", fix: "손이 크게 보이는 구도를 줄이고, 소품은 최소로. 굴려서 고른다." },
  { no: "05", fail: "술병·브랜드가 저절로 등장한다", fix: "비운 칸을 확률이 채운 것. 제약 블록을 매 프롬프트에 — 다음 슬라이드." },
  { no: "06", fail: "실존 인물·연예인을 닮는다", fix: "「가상의 인물」 명시. 실존 인물 사진을 참조로 넣지 않는다 — 초상권." },
  { no: "07", fail: "즐거운 건배 장면이 나온다", fix: "절주 메시지와 충돌. 장면 선택 단계에서 미디어 음주장면 가이드라인으로 거른다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Common Failures
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      흔한 실패 7과 <span className="text-muted-foreground">처방</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      앞의 넷은 일관성 문제, 뒤의 셋은 공공 메시지 문제 — 처방은 하나로 모인다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "225ms" }}>
      {fails.map((f, i) => (
        <div
          key={f.no}
          className={cn(
            "flex items-start gap-3 rounded-2xl border p-4 shadow-sm backdrop-blur-sm",
            i >= 4 ? "border-destructive/20 bg-destructive/5" : "border-border/40 bg-card/80",
            i === 6 && "sm:col-span-2",
          )}
        >
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{f.no}</span>
          <div>
            <p className="text-sm font-semibold leading-snug mb-1">{f.fail}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">→ {f.fix}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S16Failures";
export default S;
