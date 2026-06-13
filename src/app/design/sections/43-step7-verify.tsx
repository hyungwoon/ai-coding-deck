"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const PROMPTS = [
  { label: "컴포넌트 생성", text: "내 디자인 시스템으로 기본 버튼을 만들어줘" },
  { label: "보이스 적용", text: "이 CTA 문구를 우리 브랜드 톤으로 다시 써줘" },
  { label: "UX 원칙 적용", text: "이 폼에 에러 처리를 추가해줘" },
];

const PASS_FAIL = [
  { cond: "응답이 product.md의 컴포넌트 이름을 사용한다", pass: true },
  { cond: "응답이 bx.md의 Avoid 단어를 피한다", pass: true },
  { cond: "응답이 임의 색·크기를 사용한다", pass: false },
  { cond: "응답이 brand.md의 색 변수를 참조한다", pass: true },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      STEP 5 · 검증
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      내 판단이 AI에 전달되는지 확인
    </h2>
    <p className={cn("text-muted-foreground mb-6 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      Claude Desktop에서 직접 물어본다. DESIGN.md의 내용이 응답에 반영되면 성공.
    </p>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-5">
      {PROMPTS.map((p, i) => (
        <div
          key={p.label}
          className={cn("rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 80}ms` }}
        >
          <p className="font-mono text-xs text-primary mb-2">{p.label}</p>
          <p className="text-sm text-muted-foreground italic">"{p.text}"</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-5 mb-5", anim(index))} style={{ transitionDelay: "390ms" }}>
      <p className="font-semibold text-sm mb-3">응답에서 확인할 것</p>
      <div className="space-y-2">
        {PASS_FAIL.map((item) => (
          <div key={item.cond} className="flex items-center gap-3">
            <span className={cn(
              "flex size-5 shrink-0 items-center justify-center rounded text-[11px] font-bold",
              item.pass
                ? "border border-green-500/50 text-green-400"
                : "border border-red-400/50 text-red-400"
            )}>
              {item.pass ? "✓" : "✗"}
            </span>
            <span className="text-sm text-muted-foreground">{item.cond}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={cn("rounded-xl border border-primary/30 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "530ms" }}>
      <p className="font-semibold mb-1">결과 = 내 디자인 판단이 AI에 전달됨</p>
      <p className="text-muted-foreground">
        DESIGN.md 없이는 Claude가 임의 결정을 내린다. 이 파일이 있으면 내 판단이 실행된다. 그게 AI Native Design의 핵심.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S43Step7Verify";
export default S;
