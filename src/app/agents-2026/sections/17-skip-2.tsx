"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const items = [
  { name: "Standalone code-writing 에이전트를 아키텍처로", reason: "Code-as-action은 흥미로운 리서치. 아직 프로덕션 default 패턴 아님. 경쟁사가 안 겪는 툴링·보안 전투를 하게 됨." },
  { name: "\"Autonomous agent\" 피치", reason: "AutoGPT/BabyAGI 계보는 제품 형태로 사망. 솔직한 framing은 \"agentic engineering\" — supervised, bounded, evaluated. 2026년에 deploy-and-forget 파는 사람 = 2023 파는 사람." },
  { name: "에이전트 앱스토어 / 마켓플레이스", reason: "2023년부터 약속, 엔터프라이즈 traction 없음. 엔터프라이즈는 generic pre-built를 안 산다 — 결과에 묶인 vertical을 사거나 직접 짓는다." },
  { name: "호리즌탈 enterprise 플랫폼 (고객 입장)", reason: "Google Agentspace, AWS Bedrock Agents, Microsoft Copilot Studio — 결국 유용해질 거다. 지금은 buy-vs-build 수학이 narrow agent 직접 짓거나 vertical 사는 쪽 유리. 예외: Salesforce Agentforce, ServiceNow Now Assist (워크플로 임베드)." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 4 · Skip List ② · 패턴 & 플랫폼
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      &ldquo;Autonomous&rdquo; 라는 단어를 의심하라
    </h2>

    <div className={cn("flex flex-col gap-3", anim(index))} style={{ transitionDelay: "150ms" }}>
      {items.map((it) => (
        <div key={it.name} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 flex gap-3">
          <span className="text-destructive shrink-0 mt-0.5">✗</span>
          <div>
            <p className="text-base font-bold mb-1">{it.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.reason}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S17Skip2";
export default S;
