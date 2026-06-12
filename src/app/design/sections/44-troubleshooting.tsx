"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const ISSUES = [
  {
    problem: "Claude 재시작해도 서버가 안 보임",
    cause: "Cmd+Q 없이 창만 닫음",
    fix: "Cmd+Q로 완전 종료 후 재실행. 백그라운드 프로세스가 남아 있으면 MCP가 로드 안 됨.",
  },
  {
    problem: "서버가 즉시 꺼짐 / 빨간 점",
    cause: "claude_desktop_config.json JSON 오타",
    fix: "jsonlint.com에 붙여넣어 검증. 쉼표 하나, 따옴표 하나가 전체를 조용히 죽인다.",
  },
  {
    problem: "리소스는 보이는데 내용이 비어 있음",
    cause: "DESIGN_DIR 경로가 상대 경로이거나 오타",
    fix: "server.mjs의 DESIGN_DIR을 /Users/이름/... 절대 경로로 교체. pwd 명령으로 확인.",
  },
  {
    problem: "Claude가 DESIGN.md를 무시하는 것 같음",
    cause: "리소스를 명시적으로 불러오지 않음",
    fix: "프롬프트 앞에 '내 디자인 시스템(design://product)을 참고해서'를 붙인다. MCP는 자동 주입 안 됨.",
  },
  {
    problem: "node 명령 못 찾음 (ENOENT)",
    cause: "config의 command가 node인데 경로 불인식",
    fix: "which node 결과(/usr/local/bin/node)를 command에 절대 경로로 사용.",
  },
  {
    problem: "구독 안 한 모델에서 MCP 탭 없음",
    cause: "Claude 무료 플랜은 MCP 미지원",
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
