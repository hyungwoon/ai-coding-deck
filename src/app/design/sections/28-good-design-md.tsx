"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const PRINCIPLES = [
  {
    title: "토큰은 정확한 값",
    body: "색·간격·반경을 설명하지 말고 시스템 토큰 이름을 그대로 적는다. `primary-500` 대신 `--color-primary: #6366F1`.",
  },
  {
    title: "rationale은 왜·언제",
    body: "\"버튼 반경은 4px\" 만으로는 충분하지 않다. AI는 '왜'를 알아야 경계 상황을 스스로 판단한다.",
  },
  {
    title: "예시·반례 모두 포함",
    body: "좋은 사례와 나쁜 사례를 나란히 두면 AI가 양쪽 방향의 경계를 동시에 학습한다.",
  },
  {
    title: "AI가 파싱 가능한 구조",
    body: "헤딩·표·코드블록으로 의미를 분절한다. 단락 산문만 있으면 AI가 규칙을 문맥 속에서 잃는다.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 4 · DESIGN.md 구축법
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      실사용 가능한 DESIGN.md의 <span className="text-primary">4가지 조건</span>
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {PRINCIPLES.map((p, i) => (
        <div
          key={p.title}
          className={cn("rounded-2xl border border-border/40 bg-card/70 p-6", anim(index))}
          style={{ transitionDelay: `${150 + i * 80}ms` }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{String(i + 1).padStart(2, "0")}</p>
          <p className="text-lg font-bold mb-2">{p.title}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
        </div>
      ))}
    </div>

    <p className={cn("mt-6 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "500ms" }}>
      이 네 조건 중 하나라도 빠지면 AI는 규칙을 추측으로 채운다.
    </p>
  </SectionShell>
));
S.displayName = "S28GoodDesignMd";
export default S;
