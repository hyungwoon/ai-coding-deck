"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const takeaways = [
  { no: "01", title: "2026 도구 지도", desc: "이미지·영상 도구 중 무엇이 무엇에 강한지, 무료로 시작하는 조합까지." },
  { no: "02", title: "일관성 프롬프트 공식", desc: "같은 캐릭터·같은 톤을 카드뉴스 8장, 릴스 3컷에 유지하는 고정 블록." },
  { no: "03", title: "게시 전 검증 체크리스트", desc: "공공 메시지에 AI를 쓸 때 멈춰야 하는 순간 — 팀 게시 규칙으로 가져가세요." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · Opening
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      오늘 가져갈 것 세 가지
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {takeaways.map((t) => (
        <div key={t.no} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground mb-2">{t.no}</p>
          <p className="text-lg font-semibold leading-snug mb-1">{t.title}</p>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">오늘은 실습이 없는 40분 강의입니다</p>
      <p className="text-xl sm:text-2xl font-bold">
        필기 불필요 — <span className="text-primary">복붙 가능한 프롬프트 킷</span>이 링크로 남습니다
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        마지막 슬라이드의 QR 하나면 됩니다. 도구 이름은 매달 바뀌니, 오늘 외울 것은 이름이 아니라 「왜 그렇게 동작하는가」와 「무엇을 고정하는가」입니다.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S01Takeaways";
export default S;
