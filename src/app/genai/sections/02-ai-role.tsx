"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const stages = [
  { step: "기획", mark: "○", tone: "go", role: "적극 활용", desc: "주제·앵글 30개를 뽑게 하고, 고르는 건 사람. 타깃(20대 대학생) 관점 반론도 시킨다." },
  { step: "리서치", mark: "△", tone: "mid", role: "보조만", desc: "출처를 찾아주는 도우미. 수치·사실의 확정은 공식 출처 원문에서만." },
  { step: "제작", mark: "○", tone: "go", role: "초안 생성", desc: "카드뉴스 이미지·릴스 컷·문안 초안. 단, 캐릭터·톤 고정 + 절주 제약 블록 필수." },
  { step: "검수", mark: "✗", tone: "stop", role: "사람의 일", desc: "사실·규정·표기 확인은 사람이. AI는 「내가 놓친 것 찾아줘」 셀프체크 도구로만." },
  { step: "게시·보고", mark: "△", tone: "mid", role: "정리만", desc: "활동보고서 문장 다듬기는 OK. 활동 내용·수치·날짜는 실제 기록에서만." },
];

const toneClass: Record<string, string> = {
  go: "text-green-400",
  mid: "text-muted-foreground",
  stop: "text-destructive",
};

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · AI의 자리
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      AI는 어디까지 — <span className="text-muted-foreground">활동 5단계로 보기</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      AI 활용이 목적이 아닙니다. 서포터즈 활동의 목적에 맞는 범위에서, 단계마다 역할이 다릅니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-3 mb-10", anim(index))} style={{ transitionDelay: "225ms" }}>
      {stages.map((s, i) => (
        <div key={s.step} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-xs text-muted-foreground">0{i + 1} · {s.step}</p>
            <span className={cn("font-mono text-lg font-bold", toneClass[s.tone])}>{s.mark}</span>
          </div>
          <p className="text-base font-semibold leading-snug mb-1">{s.role}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">오늘 40분 내내 반복할 한 문장</p>
      <p className="text-xl sm:text-2xl font-bold">
        AI는 조수, <span className="text-primary">메시지의 주인과 책임은 서포터즈</span>
      </p>
      <p className="mt-3 text-xs text-muted-foreground">기획 단계의 구체적 시키는 법(앵글 30개 발산 → 사람이 고름 → 8장 구성안)은 킷의 T1·T4 템플릿에 그대로 있습니다.</p>
    </div>
  </SectionShell>
));
S.displayName = "S02AiRole";
export default S;
