"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const CATEGORIES = [
  {
    label: "휴리스틱",
    items: [
      "피드백: 모든 액션은 0.3s 내 반응을 보여야 한다",
      "가시성: 현재 위치·상태는 항상 명시적으로 표시",
      "일관성: 같은 액션에 같은 컨트롤 사용",
    ],
  },
  {
    label: "에러 처리",
    items: [
      "오류 메시지는 무엇이 잘못됐는지 + 어떻게 고치는지 포함",
      "파괴적 액션(삭제)은 확인 단계 필수",
      "빈 폼 제출 차단 — 인라인 검증 우선",
    ],
  },
  {
    label: "로딩 상태",
    items: [
      "300ms 이상 = 스피너 또는 스켈레톤",
      "1s 이상 = 진행률 또는 취소 옵션",
      "낙관적 업데이트 가능한 곳엔 즉시 반영 후 롤백",
    ],
  },
];

const CHECKS = [
  "ux.md 파일 생성 완료",
  "휴리스틱 규칙 2개 이상",
  "에러 처리 규칙 2개 이상",
  "로딩 상태 규칙 1개 이상",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} data-code-slide>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      STEP 4 · ux.md
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
      UX 원칙을 규칙으로
    </h2>
    <p className={cn("text-muted-foreground mb-6 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
      "사용자 친화적으로 만들어줘"는 AI가 실행 못 한다. "300ms 이상이면 스피너"는 실행된다.
    </p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
      {CATEGORIES.map((cat, i) => (
        <div
          key={cat.label}
          className={cn("rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 80}ms` }}
        >
          <p className="font-semibold text-sm mb-3 text-primary">{cat.label}</p>
          <ul className="space-y-2">
            {cat.items.map((item) => (
              <li key={item} className="text-xs text-muted-foreground leading-relaxed">
                — {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden mb-5", anim(index))} style={{ transitionDelay: "390ms" }}>
      <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
        ② 당신 차례 — 내 ux.md 작성 포인트
      </div>
      <div className="p-4 grid grid-cols-1 gap-2 sm:grid-cols-3 text-xs text-muted-foreground">
        <div>
          <p className="text-foreground font-semibold mb-1">휴리스틱</p>
          <p>닐슨 10원칙에서 내 제품에 가장 중요한 3개 골라 구체화</p>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-1">에러 처리</p>
          <p>지금 내 앱에서 가장 자주 발생하는 에러 시나리오 기준으로 작성</p>
        </div>
        <div>
          <p className="text-foreground font-semibold mb-1">로딩 상태</p>
          <p>API 응답 시간 기준 임계값(ms) + 처리 방법 명시</p>
        </div>
      </div>
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-card/80 p-5", anim(index))} style={{ transitionDelay: "490ms" }}>
      <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">체크포인트 — STEP 4 완료 기준</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {CHECKS.map((c) => (
          <div key={c} className="flex items-center gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary">✓</span>
            <span className="text-sm">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S40Step4Ux";
export default S;
