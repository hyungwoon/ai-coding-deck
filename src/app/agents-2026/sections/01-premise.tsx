"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const facts = [
  { lead: "모든 로드맵은", body: "출시 한 달 만에 obsolete." },
  { lead: "지난 분기 마스터한 프레임워크는", body: "이미 레거시." },
  { lead: "최적화한 벤치마크는", body: "이미 게임당했고 교체됨." },
  { lead: "자격증 패스는", body: "필드가 안 움직일 때만 작동했다." },
  { lead: "지금 필드는", body: "모두에게 동등하게 움직인다." },
  { lead: "22살과 35살의 차이는", body: "더 이상 10년치 스택 마스터리가 아니다." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 0 · Premise
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      이 글의 전제
    </h2>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10", anim(index))} style={{ transitionDelay: "150ms" }}>
      {facts.map((f) => (
        <div key={f.lead} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-sm text-muted-foreground mb-1">{f.lead}</p>
          <p className="text-lg font-semibold leading-snug">{f.body}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      <p className="text-sm text-muted-foreground mb-2">2년 뒤 이기는 사람에게 복리로 쌓이는 것</p>
      <p className="text-xl sm:text-2xl font-bold">
        Ship하려는 의지 + 분기마다 폐기되지 않는 작은 primitive 리스트
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        Claude Code 팀조차 47% 회귀를 ship하고 사용자 커뮤니티가 먼저 잡았다.
        이 모든 것 아래에 안정된 지도가 있다는 생각은 픽션.
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S01Premise";
export default S;
