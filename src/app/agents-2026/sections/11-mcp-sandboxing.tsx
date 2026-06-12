"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const sandboxBasics = ["프로세스 격리", "네트워크 egress 통제", "Secret scoping", "Auth boundary"];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Learn ⑥⑦ · MCP & Sandboxing
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
      두 가지 primitive
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6", anim(index))} style={{ transitionDelay: "150ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">MCP</p>
        <p className="text-xl font-bold mb-3">컨셉으로 배워라</p>
        <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
          <li>• Capability / Tool / Resource 깔끔한 분리</li>
          <li>• 확장 가능한 auth + transport</li>
          <li>• Linux Foundation stewarding</li>
          <li>• 모든 메이저 프로바이더가 백업</li>
        </ul>
        <p className="mt-3 text-sm">
          <span className="font-semibold">&ldquo;USB-C of AI&rdquo;</span>{" "}
          <span className="text-muted-foreground">— 더 이상 아이러니 아니라 정확한 표현</span>
        </p>
      </div>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 p-6", anim(index))} style={{ transitionDelay: "250ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Sandboxing</p>
        <p className="text-xl font-bold mb-3">Feature 아니라 Primitive</p>
        <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 mb-3">
          <li>• 모든 프로덕션 코딩 에이전트는 sandbox에서</li>
          <li>• 모든 브라우저 에이전트는 prompt injection에 맞아봤음</li>
          <li>• 모든 멀티테넌트는 permission 버그를 ship해봤음</li>
        </ul>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">기본기</p>
        <div className="flex flex-wrap gap-1.5">
          {sandboxBasics.map((b) => (
            <span key={b} className="text-xs px-2 py-0.5 rounded-full border border-border/40 bg-muted/30 text-muted-foreground">{b}</span>
          ))}
        </div>
      </div>
    </div>

    <div className={cn("mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "350ms" }}>
      <p className="text-sm">
        Bolt-on하는 팀 = <span className="text-destructive">딜 잃는 팀</span> · 1주차 빌트인 팀 = <span className="text-primary">엔터프라이즈 procurement 통과</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S11McpSandboxing";
export default S;
