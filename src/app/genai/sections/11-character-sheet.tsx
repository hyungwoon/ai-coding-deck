"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const sheetPrompt = `캐릭터 시트, 4패널 나란히: 정면 전신 · 측면 전신 · 뒷모습 · 얼굴 클로즈업.
평평한 회색 배경, 균일한 정면 스튜디오 조명, 강한 그림자·색 조명 없음.
인물: 「하나」, 22세 여대생, 검은 단발, 회색 후드, 흰 운동화, 작은 은색 이어링.
네 패널 모두 같은 사람 — 같은 얼굴, 같은 옷, 같은 소품.
참조용이므로 얼굴·옷·소품이 또렷하게 보여야 함. 글자 없음.`;

const rules = [
  { no: "01", title: "시트의 조명은 일부러 밋밋하게", desc: "예쁜 사진이 아니라 참조용이다. 그림자·색 조명은 나중에 장면 프롬프트가 입힌다." },
  { no: "02", title: "고정 항목 5개: 나이·머리·옷·신발·소품", desc: "이 다섯이 정체성이다. 상위 출품작 시트는 「나이가 이 이미지에서 가장 중요하다」처럼 우선순위까지 적었다." },
  { no: "03", title: "시트 안에 「같은 사람」 문장을 넣는다", desc: "패널끼리도 흔들린다. 시트 내부 잠금 문장이 먼저다." },
  { no: "04", title: "이후 모든 프롬프트 = 시트 첨부 + 한 줄", desc: "「참조와 100% 일치」. 옷·얼굴을 문장으로 다시 설명하지 않는다 — 이미지가 외모의 주인이다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Character Sheet
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      주인공을 먼저 만들고, <span className="text-muted-foreground">문장으로 다시 쓰지 않는다</span>
    </h2>

    <div className={cn("grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="rounded-2xl border border-border/40 bg-muted/30 p-5 font-mono text-sm leading-relaxed whitespace-pre-line">
        <p className="text-[10px] tracking-widest text-muted-foreground uppercase mb-3">Character Sheet Prompt · 킷에 복사 버튼</p>
        {sheetPrompt}
      </div>
      <div className="flex flex-col gap-3">
        {rules.map((r) => (
          <div key={r.no} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
            <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{r.no}</span>
            <div>
              <p className="text-sm font-semibold leading-snug mb-1">{r.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-lg sm:text-xl font-bold">
        상위 출품작 8편 전부: <span className="text-primary">캐릭터·장소·소품을 먼저 만들어 이름 붙이고</span>, 장면 프롬프트에는 참조로만 넣었다
      </p>
      <p className="mt-2 text-xs text-muted-foreground">캐릭터·장소·소품 폴더(에셋 바이블)를 가진 비율: 상위권 57.6% vs 나머지 37.8%. 프롬프트 문장보다 「작업을 나눈 방식」이 갈랐다. — 강사 자체 분석, Higgsfield AI Film Festival 공개 출품작 2,142편, 2026-08.</p>
    </div>
  </SectionShell>
));
S.displayName = "S11CharacterSheet";
export default S;
