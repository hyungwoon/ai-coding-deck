"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const tips = [
  { n: "41", t: "압축 후 컨텍스트 재주입", d: "Notification 훅으로 현재 태스크·수정 파일 자동 복원" },
  { n: "42", t: "인증/결제는 수동 리뷰", d: "Auth, 결제, 데이터 변경은 Claude가 잘해도 반드시 사람이 확인" },
  { n: "43", t: "/branch로 분기 시도", d: "위험한 리팩토링을 분기에서 시도. 원본 대화 보존" },
  { n: "44", t: "Claude에게 인터뷰 시키기", d: "\"나를 인터뷰해서 스펙 완성해줘\" — 빠진 세부사항 발견" },
  { n: "45", t: "작성과 리뷰 분리", d: "한 Claude가 구현, 다른 Claude가 리뷰. TDD에도 동일 적용" },
  { n: "46", t: "PR 대화형 리뷰", d: "\"가장 위험한 변경은?\" 일회성 리뷰보다 깊은 이슈 발견" },
  { n: "47", t: "세션 이름/색상 지정", d: "/rename auth-refactor, /color red — 병렬 세션 구분" },
  { n: "48", t: "완료 시 소리 알림", d: "Stop 훅에 afplay 추가. 태스크 끝나면 소리로 알림" },
  { n: "49", t: "claude -p 배치 처리", d: "파일 목록 루프 돌며 병렬 변환. 독립적 마이그레이션에 최적" },
  { n: "50", t: "스피너 문구 커스터마이징", d: "\"해리포터 주문으로 바꿔줘\" — 대기 시간의 작은 즐거움" },
];

const SlideTips5 = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-sm tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        13 · 팁 41-50
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-2", anim(index))}>
        실전 팁 50선
      </h2>
      <p className={cn("text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "50ms" }}>
        보안 & 워크플로우 패턴
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

SlideTips5.displayName = "SlideTips5";
export default SlideTips5;
