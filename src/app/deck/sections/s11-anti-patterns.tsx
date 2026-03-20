"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const items = [
  { num: "01", title: "플래닝 없이 바로 구현 요청", desc: '"로그인 기능 만들어줘"처럼 모호하게 던지면 AI가 엉뚱한 방향으로. 무엇을, 왜, 어떻게를 먼저 정의하고 플랜을 확인한 뒤 구현 지시.' },
  { num: "02", title: "컨텍스트 오염 — 대화가 너무 길어짐", desc: "같은 세션에서 너무 많은 수정을 반복하면 AI가 혼란을 느낀다. 큰 방향이 바뀌면 새 세션을 시작하고 CLAUDE.md로 맥락을 주입." },
  { num: "03", title: "무한 수정 루프 — \"조금만 더 고쳐줘\"", desc: "작은 수정을 계속 쌓으면 코드가 점점 복잡해진다. 일정 수준의 변경은 처음부터 다시 짜는 게 빠르다." },
  { num: "04", title: "검증 없이 그냥 배포", desc: 'AI가 "완성됐다"고 해도 실제로 실행되는지 직접 확인해야 한다. AI 출력 = 초안이지 완성본이 아니다.' },
  { num: "05", title: "이해 못 한 채로 사용", desc: 'AI가 만든 코드를 블랙박스로 두면 버그가 났을 때 고칠 수 없다. "이 코드 한 줄씩 설명해줘"로 항상 이해하며 진행.' },
  { num: "06", title: "문서 업데이트 생략", desc: "구현 후 CLAUDE.md를 업데이트하지 않으면 다음 세션에서 AI가 이전 상황을 모른 채 시작한다. 구현 → 문서 업데이트는 세트." },
  { num: "07", title: "너무 큰 태스크를 한 번에", desc: '"전체 앱 만들어줘"처럼 큰 요청은 방향이 틀어지면 수정 범위가 너무 넓어진다. 기능 단위로 잘게 쪼개서 각 단계를 확인하며 진행. 커밋도 작게 자주.', full: true },
];

const S11AntiPatterns = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      바이브 코딩 안티패턴
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      흔한 실수 7가지 — 미리 알면 절반은 피할 수 있다
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {items.map((item) => (
        <div
          key={item.num}
          className={cn(
            "rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm flex gap-3 items-start",
            item.full && "sm:col-span-2",
          )}
        >
          <span className="font-mono text-sm text-muted-foreground/50 shrink-0 mt-0.5">{item.num}</span>
          <div>
            <p className="text-sm font-semibold mb-1">{item.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S11AntiPatterns.displayName = "S11AntiPatterns";
export default S11AntiPatterns;
