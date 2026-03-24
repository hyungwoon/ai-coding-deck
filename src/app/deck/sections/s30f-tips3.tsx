"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tips = [
  { n: "21", t: "압축 시 보존 지시", d: "/compact API 변경사항과 수정 파일 목록 유지해줘" },
  { n: "22", t: "/loop 반복 점검", d: "/loop 5m 배포 확인 → 세션 내 최대 3일 유지" },
  { n: "23", t: "음성 입력 /voice", d: "Space 홀드로 받아쓰기. 타이핑보다 맥락 풍부한 프롬프트" },
  { n: "24", t: "2번 수정 실패 → /clear", d: "실패한 접근이 컨텍스트 오염. 새 프롬프트가 더 빠름" },
  { n: "25", t: "@ 파일 직접 지정", d: "@src/auth/middleware.ts — 검색 과정 생략, 토큰 절약" },
  { n: "26", t: "모호한 프롬프트로 탐색", d: "\"이 파일에서 뭘 개선하겠어?\" 낯선 코드에 신선한 시각" },
  { n: "27", t: "Ctrl+G 계획 편집", d: "Claude의 계획을 에디터에서 직접 수정 후 실행" },
  { n: "28", t: "/init 후 절반 줄이기", d: "자동 생성 CLAUDE.md는 비대. 불필요한 줄 삭제" },
  { n: "29", t: "CLAUDE.md 리트머스 테스트", d: "매 줄: \"이거 없으면 Claude가 실수할까?\" 아니면 삭제" },
  { n: "30", t: "실수 후 CLAUDE.md 업데이트", d: "\"CLAUDE.md 업데이트해\" → Claude가 스스로 규칙 작성" },
];

const SlideTips3 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        13 · 팁 21-30
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
        실전 팁 50선
      </h2>
      <p className={cn("text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "50ms" }}>
        CLAUDE.md & 프롬프트 전략
      </p>
      <div className={cn("grid gap-2 sm:grid-cols-2", anim(index))} style={{ transitionDelay: "100ms" }}>
        {tips.map((t) => (
          <div key={t.n} className="rounded-xl border border-border/40 bg-card/80 p-3 shadow-sm backdrop-blur-sm flex items-start gap-3">
            <span className="font-mono text-xs font-bold text-primary/60 mt-0.5 shrink-0">{t.n}</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{t.t}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionShell>
));

SlideTips3.displayName = "SlideTips3";
export default SlideTips3;
