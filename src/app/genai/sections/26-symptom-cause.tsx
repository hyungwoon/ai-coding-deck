"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rows = [
  { s: "컷마다 얼굴이 바뀐다", c: "정체성 조건이 없다 — 매번 새로 추첨", f: "참조 판 첨부 · 첫 프레임 고정 · 반복되면 파인튜닝" },
  { s: "지시 일부를 무시한다", c: "조건 과밀 — 주의가 희석됐다", f: "지시를 나눠 두 번 부르거나, 단계로 쪼갠다" },
  { s: "사실이 틀렸는데 유창하다", c: "학습 분포에서 나온 말 — 창 밖의 것", f: "근거 문서를 컨텍스트에 붙이고 출처를 직접 연다" },
  { s: "글자·로고가 깨진다", c: "생성은 재생성이라 정확 복제를 보장 못 한다", f: "생성에 맡기지 말고 편집기에서 얹는다" },
  { s: "색이 타고 질감이 딱딱하다", c: "가이던스가 너무 높다", f: "강도를 내리고, 대신 프롬프트를 구체화한다" },
  { s: "고쳐 달라니 다른 부분도 변했다", c: "부분 편집이 아니라 좌표를 옮겨 다시 그린 것", f: "마스크·부분 재생성 또는 후처리 합성" },
  { s: "묻지 않은 컷 전환이 생긴다", c: "카메라·컷 권한을 모델이 가져갔다", f: "컷 구조를 먼저 선언한다 — 「지정한 지점에서만 컷」" },
  { s: "움직임이 부자연스럽다", c: "물리를 계산하지 않는다", f: "짧게 · 단순한 동작 · 어려운 구간은 컷으로 건너뛴다" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · Debugging
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      증상에서 <span className="text-muted-foreground">칸을 되짚는다</span>
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      결과가 이상할 때 프롬프트 문장부터 고치지 않는다. 먼저 <span className="text-foreground font-medium">어느 칸의 문제인지</span>를 정한다.
    </p>

    <div className={cn("overflow-x-auto rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "160ms" }}>
      <table className="w-full min-w-[700px] text-left text-sm">
        <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5">증상</th>
            <th className="px-4 py-2.5">원리상 원인</th>
            <th className="px-4 py-2.5">손대야 할 곳</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.s} className="border-t border-border/30 align-top">
              <td className="px-4 py-2.5 text-xs font-semibold whitespace-nowrap">{r.s}</td>
              <td className="px-4 py-2.5 text-xs text-muted-foreground">{r.c}</td>
              <td className="px-4 py-2.5 text-xs"><span className="text-primary">{r.f}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </SectionShell>
));
S.displayName = "S26SymptomCause";
export default S;
