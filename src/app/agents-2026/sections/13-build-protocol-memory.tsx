"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const memory = [
  { tool: "Mem0", case: "챗 personalization, 사용자 선호, 가벼운 히스토리" },
  { tool: "Zep", case: "프로덕션 대화형, 상태가 진화하고 entity tracking 필요" },
  { tool: "Letta", case: "에이전트가 며칠~몇 주 작업 코히런스 유지 (대부분은 필요 없음)" },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 3 · Build · Protocol & Memory
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      Protocol = MCP, full stop.
    </h2>

    <div className={cn("rounded-2xl border border-primary/30 bg-primary/5 p-6 mb-8", anim(index))} style={{ transitionDelay: "150ms" }}>
      <ul className="text-sm leading-relaxed space-y-1.5">
        <li>• 너의 툴 통합을 <span className="font-semibold">MCP 서버로 빌드</span></li>
        <li>• 외부 통합도 <span className="font-semibold">같은 방식으로 컨슘</span></li>
        <li>• 레지스트리는 거의 항상 만들기 전에 서버를 찾을 수 있는 지점을 넘었다</li>
        <li>• 2026년에 커스텀 툴 plumbing 배선 = <span className="text-destructive">이유 없는 세금</span></li>
      </ul>
    </div>

    <h3 className={cn("text-2xl font-bold mb-4", anim(index))} style={{ transitionDelay: "230ms" }}>
      Memory — 자율성 레벨로 골라라
    </h3>
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6", anim(index))} style={{ transitionDelay: "300ms" }}>
      {memory.map((m) => (
        <div key={m.tool} className="rounded-2xl border border-border/40 bg-card/80 p-5 backdrop-blur-sm">
          <p className="text-base font-bold text-primary mb-2">{m.tool}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{m.case}</p>
        </div>
      ))}
    </div>

    <div className={cn("rounded-2xl border border-destructive/30 bg-destructive/5 p-5", anim(index))} style={{ transitionDelay: "400ms" }}>
      <p className="text-sm">
        🚫 <span className="font-semibold">메모리 문제 생기기 전에 메모리 프레임워크 reach 금지.</span>{" "}
        <span className="text-muted-foreground">Context window가 담을 수 있는 것 + vector store로 시작. 해결할 실패 모드를 명확히 말할 수 있을 때만 추가.</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S13BuildProtocolMemory";
export default S;
