"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const ISSUES = [
  {
    problem: "Claude가 DESIGN.md를 안 읽는 것 같음",
    cause: "Code 탭에서 프로젝트 폴더를 안 열었거나 파일이 루트에 없음",
    fix: "Code 탭에서 DESIGN.md가 있는 폴더를 연다. 파일은 repo 루트(또는 design/)에 둔다.",
  },
  {
    problem: "응답이 임의 색·크기를 씀",
    cause: "프롬프트가 DESIGN.md를 명시적으로 참조 안 함",
    fix: "'brand.md·product.md를 따라서'를 프롬프트에 명시. 파일이 있어도 자동 주입은 약하다.",
  },
  {
    problem: "AI가 파일 일부만 반영함",
    cause: "한 파일에 모든 걸 몰아넣어 너무 김",
    fix: "brand·bx·product·ux 4개로 분리. 한 파일은 한 주제만 담는다.",
  },
  {
    problem: "팀원마다 결과가 다름",
    cause: "DESIGN.md가 로컬에만 있고 repo에 없음",
    fix: "DESIGN.md를 commit해 공유. 또는 URL로 publish(예: nmwc.ai.kr).",
  },
  {
    problem: "수정해도 AI가 옛 규칙을 씀",
    cause: "이전 대화 컨텍스트가 그대로 유지됨",
    fix: "DESIGN.md 수정 후엔 새 대화로 시작. fresh chat이 최신 파일을 읽는다.",
  },
  {
    problem: "Code 탭이 안 보임",
    cause: "Claude 무료 플랜은 Code 미지원",
    fix: "Pro 이상 구독 필요. Settings → Account에서 플랜 확인.",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      트러블슈팅
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      자주 막히는 곳
    </h2>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {ISSUES.map((item, i) => (
        <div
          key={item.problem}
          className={cn("rounded-xl border border-border/40 bg-card/60 p-4", anim(index))}
          style={{ transitionDelay: `${150 + i * 60}ms` }}
        >
          <p className="font-semibold text-sm mb-1 text-foreground">{item.problem}</p>
          <p className="text-xs text-muted-foreground/70 mb-2">원인: {item.cause}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.fix}</p>
        </div>
      ))}
    </div>

    <p className={cn("mt-5 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "510ms" }}>
      위 6개로 해결 안 되면 손들기 — 강사가 직접 확인합니다.
    </p>
  </SectionShell>
));
S.displayName = "S44Troubleshooting";
export default S;
