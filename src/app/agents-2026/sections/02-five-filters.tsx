"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const filters = [
  { num: "01", q: "2년 뒤에도 의미 있나?", a: "래퍼·CLI 플래그·\"X용 Devin\"이면 거의 항상 NO. Primitive(프로토콜·메모리 패턴·샌드박싱)면 더 자주 YES. 래퍼의 반감기는 짧다. Primitive는 몇 년이다." },
  { num: "02", q: "존경하는 사람의 솔직한 포스트모템 있나?", a: "마케팅 포스트는 안 침. \"프로덕션에서 X 써봤더니 깨졌다\" 1개 = 런칭 발표 10개. 좋은 신호는 항상 주말을 잃은 사람이 쓴다." },
  { num: "03", q: "기존 트레이싱·auth·config 다 버려야 하나?", a: "YES면 플랫폼이 되려는 프레임워크. 사망률 90%. 좋은 primitive는 마이그레이션 없이 끼워진다." },
  { num: "04", q: "6개월 스킵하면 비용이 뭐냐?", a: "대부분 답은 0. 6개월 뒤면 더 잘 알게 되고, 이긴 버전이 명확해진다. 90% 런칭을 불안 없이 스킵하게 해주는 테스트." },
  { num: "05", q: "도움 됐는지 측정 가능한가?", a: "못하면 추측. Eval 없는 팀은 vibe로 굴러가며 회귀 ship. Eval 있는 팀은 이번 주 Opus 4.7 vs GPT-5.5 누가 우리 워크로드에 이기는지 데이터로 결정." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 1 · The Filter
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
      5가지 필터
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      런칭이 스택에 닿기 전에 돌려라 — 지난 18개월 살아남은 테스트
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {filters.map((f) => (
        <div key={f.num} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm flex gap-3">
          <span className="font-mono text-sm text-primary shrink-0 mt-0.5">{f.num}</span>
          <div>
            <p className="text-sm font-semibold mb-1">{f.q}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S02FiveFilters";
export default S;
