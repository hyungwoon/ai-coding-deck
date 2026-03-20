"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S21bSecurity = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      보안과 프라이버시
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "80ms" }}>
      AI를 잘 쓰는 것만큼, 안전하게 쓰는 것도 중요하다
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "120ms" }}>
      {[
        { icon: "🔍", title: "데이터가 어디로 가는지", desc: "Claude API는 학습에 사용 안 함. 하지만 모든 서비스가 그렇진 않다. 이용약관 반드시 확인. 무료 서비스는 특히 주의." },
        { icon: "🔒", title: "민감 정보 구분", desc: "고객 개인정보, 계약 금액, 내부 전략 — 아무 AI에나 넣지 마세요. 공개/비공개 정보를 명확히 구분." },
        { icon: "💻", title: "로컬 우선 전략", desc: "Obsidian = 내 컴퓨터에만 저장. Claude Code = 로컬 실행. API 키만 안전하면 코드 유출 없음." },
      ].map((card) => (
        <div key={card.title} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-2xl mb-2">{card.icon}</p>
          <p className="text-sm font-bold mb-2">{card.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>

    <div className={cn("mt-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-4", anim(index))} style={{ transitionDelay: "200ms" }}>
      <p className="text-sm text-muted-foreground">
        <span className="font-bold text-red-400">조직 도입 시:</span> 데이터 거버넌스 정책을 먼저 수립하세요.
      </p>
    </div>
  </SectionShell>
));

S21bSecurity.displayName = "S21bSecurity";
export default S21bSecurity;
