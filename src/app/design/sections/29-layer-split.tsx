"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="">
    <section data-code-slide className="w-full">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        그룹 4 · 계층별 분리
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        Atoms → Pages — 파일을 어떻게 나누나
      </h2>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          design/ — 권장 파일 트리
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`design/
├── brand.md        # 색·타이포·로고 — 브랜드 불변값
├── bx.md           # 브랜드 경험 원칙, 보이스 톤
├── product.md      # 컴포넌트 스펙, 상태, 변종
└── ux.md           # 인터랙션·네비게이션·접근성 규칙`}
        </pre>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-semibold mb-1">왜 분리하나</p>
          <p className="text-muted-foreground">
            AI 컨텍스트 창은 유한하다. <span className="text-foreground">색 규칙을 찾을 때 UX 패턴을 같이 올릴 필요 없다.</span> 파일이 작을수록 정확도가 오른다.
          </p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "350ms" }}>
          <p className="font-semibold mb-1">경계 원칙</p>
          <p className="text-muted-foreground">
            "이 규칙이 바뀌는 이유가 같은가?" — YES면 같은 파일. NO면 분리. <span className="text-foreground">브랜드는 분기마다 안 바뀐다. UX는 매 스프린트 바뀐다.</span>
          </p>
        </div>
      </div>

      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "450ms" }}>
        하나의 giant DESIGN.md는 쓰기 편하고 읽기 나쁘다. AI는 파일 단위로 컨텍스트를 로드한다.
      </p>
    </section>
  </SectionShell>
));
S.displayName = "S29LayerSplit";
export default S;
