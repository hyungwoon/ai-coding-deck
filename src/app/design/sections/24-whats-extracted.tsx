"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      그룹 3 · AI-Native Design · D9
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      기계가 <span className="text-primary">이미 추출하는</span> 것
    </h2>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden mb-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
        nmwc-design — design.json에서 자동 생성된 도구
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`get_token      // 토큰 조회 — category · role · name 필터
get_component  // 캐노니컬 레시피 — 선언·상태·토큰·예제 html/jsx
validate_code  // spec 준수 검증 + nearest-token 수정 제안
scaffold       // spec 준수 스니펫 생성 (button·input·card…)
suggest_token  // raw 값 → 가장 가까운 토큰 제안`}
      </pre>
    </div>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className={cn("rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">get_token</p>
        <p className="text-muted-foreground leading-relaxed">
          <span className="text-foreground">color · radius · space · type · motion</span> 등 전체 토큰을 구조화된 JSON으로 반환. AI가 즉시 쿼리 가능.
        </p>
      </div>
      <div className={cn("rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm", anim(index))} style={{ transitionDelay: "330ms" }}>
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">get_component</p>
        <p className="text-muted-foreground leading-relaxed">
          이름으로 <span className="text-foreground">캐노니컬 레시피</span> 반환 — 어떤 클래스를 써야 하는지, 어떤 상태가 있는지, 예제 코드까지.
        </p>
      </div>
    </div>

    <div className={cn("mt-5 border-l-2 border-primary/40 pl-5", anim(index))} style={{ transitionDelay: "420ms" }}>
      <p className="text-base font-semibold">여기까진 자동화됐다.</p>
      <p className="mt-1 text-sm text-muted-foreground">토큰과 개별 컴포넌트 레시피는 도구가 기계적으로 추출·배포한다(design.json·정적 번들). 그런데 아직 부족한 게 있다.</p>
    </div>
  </SectionShell>
));
S.displayName = "S24WhatsExtracted";
export default S;
