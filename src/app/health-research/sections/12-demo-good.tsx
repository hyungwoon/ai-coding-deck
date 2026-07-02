"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const goodPrompt = `너는 대학생 대상 보건 콘텐츠 에디터야.
인스타그램 카드뉴스를 만든다. 타깃은 시험기간에 장이 예민해지는 20대 대학생.
주제는 유산균. 8장 구성안을 만들어.
형식: 장별 제목 + 본문 2줄, 마지막 장은 출처 정리.
제약: 국가건강정보포털·질병관리청 등 공공기관 자료만 인용해.
「완치」 「기적의 효과」 같은 과장 표현은 쓰지 마.
확실하지 않은 내용은 모른다고 답해.`;

const diffs = [
  { bad: "누구나 아는 뻔한 내용", good: "타깃 맞춤 앵글", desc: "시험기간 20대의 장 트러블 — 내 얘기가 된다." },
  { bad: "출처 없음", good: "공공기관 출처 명기", desc: "장마다 국가건강정보포털·질병관리청 근거가 붙는다." },
  { bad: "과장 표현이 슬쩍 섞임", good: "근거 기반 표현", desc: "「완치」 「기적」 대신 확인된 사실만 말한다." },
  { bad: "형식 제멋대로", good: "8장 구조", desc: "장별 제목 + 본문 2줄 — 바로 디자인에 얹는 구성안." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Live Demo ②
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      같은 주제, <span className="text-muted-foreground">다른 결과</span>
    </h2>

    <div className={cn("rounded-lg bg-muted/40 p-4 font-mono text-sm whitespace-pre-line mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      {goodPrompt}
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "225ms" }}>
      {diffs.map((d, i) => (
        <div key={d.good} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-1">{i + 1} · BAD → GOOD</p>
          <p className="text-sm text-muted-foreground line-through mb-0.5">{d.bad}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{d.good}</p>
          <p className="text-sm text-muted-foreground">{d.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">AI도, 주제도, 사람도 그대로였다.</p>
      <p className="text-xl sm:text-2xl font-bold">
        바뀐 건 <span className="text-primary">프롬프트 한 문단</span> — 산출물의 급이 달라진다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S12DemoGood";
export default S;
