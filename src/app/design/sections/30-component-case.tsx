"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="">
    <section data-code-slide className="w-full">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        그룹 4 · Component Case
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        변종·상태·경계를 한 번에 정의하라
      </h2>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          product.md — Button 컴포넌트 명세 예시
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`## Button

### Variants
| variant  | 용도                        | 배경              |
|----------|-----------------------------|-------------------|
| primary  | 핵심 CTA (페이지당 1개)     | --color-primary   |
| secondary| 보조 액션                   | --color-surface-2 |
| ghost    | 텍스트 링크 수준 강조        | transparent       |

### States
- default / hover / pressed / disabled / loading

### 경계 — 언제 쓰지 마라
- 아이콘만 있으면 IconButton 사용, Button 금지
- destructive 액션은 variant="destructive" 별도 정의`}
        </pre>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-semibold mb-1">변종(Variants)</p>
          <p className="text-muted-foreground">
            외형 차이가 아닌 <span className="text-foreground">의도 차이</span>로 분류한다. AI는 의도를 보고 올바른 variant를 선택한다.
          </p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "350ms" }}>
          <p className="font-semibold mb-1">경계(Boundary)</p>
          <p className="text-muted-foreground">
            "언제 쓰지 마라"가 없으면 AI는 모든 곳에 쓴다. <span className="text-foreground">금지 조건이 규칙을 완성한다.</span>
          </p>
        </div>
      </div>

      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "450ms" }}>
        States는 Figma 레이어 이름과 동일하게 — AI와 디자이너가 같은 언어를 쓴다.
      </p>
    </section>
  </SectionShell>
));
S.displayName = "S30ComponentCase";
export default S;
