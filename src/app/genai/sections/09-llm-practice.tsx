"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const slots = [
  { n: "역할·목표", why: "분포의 출발 지점을 옮긴다", ex: "「신입에게 설명하는 데이터 분석가로서」" },
  { n: "근거 입력", why: "창 밖의 사실을 안으로 들인다", ex: "원문·표·링크를 직접 붙인다" },
  { n: "출력 골격", why: "주의를 정렬하고 형식을 고정한다", ex: "「표 3열: 항목/근거/한계」" },
  { n: "제약", why: "경우의 수를 잘라낸다", ex: "「300자 이내, 수치는 원문에 있는 것만」" },
  { n: "예시", why: "규칙 설명보다 강한 조건", ex: "원하는 답 1~3개를 그대로 보여 준다" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · Bridge · 원리에서 유도하기
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      프롬프트 = <span className="text-muted-foreground">분포를 좁히는 조건 목록</span>
    </h2>

    <div className={cn("overflow-hidden rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm mb-6", anim(index))} style={{ transitionDelay: "150ms" }}>
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5">조건 칸</th>
            <th className="px-4 py-2.5">원리상 하는 일</th>
            <th className="px-4 py-2.5">쓰는 법</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((s) => (
            <tr key={s.n} className="border-t border-border/30">
              <td className="px-4 py-3 font-semibold whitespace-nowrap">{s.n}</td>
              <td className="px-4 py-3 text-muted-foreground">{s.why}</td>
              <td className="px-4 py-3 text-muted-foreground">{s.ex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
        <p className="text-sm font-bold mb-2">왜 예시 한 개가 설명 열 줄보다 센가</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          모델은 규칙을 이해해서 따르는 게 아니라 패턴을 이어 쓴다. 예시를 넣으면 「이런 모양의 글이 이어지는 중」이라는
          상태 자체를 만들어 준다 — 규칙을 말로 푸는 것보다 직접적인 조건이다.
        </p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-2">고치는 순서도 원리에서 나온다</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          ① 먼저 두세 번 다시 굴린다(표본 부족인지 확인) → ② 여전히 빗나가면 조건을 <span className="text-foreground">더한다</span> →
          ③ 그래도면 한 번에 다 시키던 걸 <span className="text-foreground">단계로 나눈다</span>. 문장을 예쁘게 다듬는 건 마지막이다.
        </p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S09LlmPractice";
export default S;
