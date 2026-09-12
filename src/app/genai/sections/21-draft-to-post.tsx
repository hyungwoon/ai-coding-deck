"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const stages = [
  { no: "01", who: "AI", title: "초안", desc: "문안·이미지 초안, 앵글 30개. 여기까지는 아직 「콘텐츠」가 아니다." },
  { no: "02", who: "사람", title: "사실 확인", desc: "숫자·인용 전부 화이트리스트 원문 대조. 못 찾은 건 삭제 — 「대충 맞을 것」은 없다." },
  { no: "03", who: "사람 + AI 셀프체크", title: "톤 · 규정", desc: "미화·브랜드·미성년 묘사를 제약 블록으로 거르고, 경고문구는 원문 그대로." },
  { no: "04", who: "사람", title: "표시", desc: "AI 생성 표시 + 출처 표기(기관·조사명·연도) + 공공누리 조건 확인." },
  { no: "05", who: "다른 사람", title: "팀 검수", desc: "만든 사람이 검수하지 않는다. 팀원 1명이 체크리스트 7문으로." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · From Draft To Post
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      AI 초안이 <span className="text-muted-foreground">게시물이 되기까지 5단계</span>
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      AI가 만든 것을 「그대로 쓰지 않는다」가 아니라 — AI가 만든 것은 아직 콘텐츠가 아니다.
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6", anim(index))} style={{ transitionDelay: "225ms" }}>
      {stages.map((s, i) => (
        <div
          key={s.no}
          className={cn(
            "rounded-2xl border p-4 shadow-sm backdrop-blur-sm",
            i === 0 ? "border-border/40 bg-muted/30" : "border-border/40 bg-card/80",
          )}
        >
          <p className="font-mono text-xs text-muted-foreground mb-1">{s.no}</p>
          <span className={cn("inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] mb-2", i === 0 ? "border-border/60 text-muted-foreground" : "border-primary/40 text-primary")}>{s.who}</span>
          <p className="text-base font-semibold leading-snug mb-1">{s.title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "300ms" }}>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-2">활동보고서에 AI를 쓸 때</p>
        <p className="text-sm font-semibold mb-1">정리·문장 다듬기까지만.</p>
        <p className="text-xs text-muted-foreground leading-relaxed">활동 내용·참여 인원·날짜·성과 수치는 실제 기록에서만 가져온다. 「그럴듯한 성과」를 AI가 채우게 두면 보고서가 아니라 소설이 된다.</p>
      </div>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <p className="text-lg sm:text-xl font-bold">
          다섯 단계 중 <span className="text-primary">네 단계가 사람의 일</span>이다
        </p>
        <p className="mt-2 text-xs text-muted-foreground">AI를 쓰면 시간이 줄어드는 곳은 1단계뿐. 그 시간을 2~5단계에 쓰는 팀이 좋은 콘텐츠를 낸다.</p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S21DraftToPost";
export default S;
