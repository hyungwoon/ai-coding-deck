"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const concepts = [
  {
    title: "API",
    subtitle: "Application Programming Interface",
    analogy: "식당의 메뉴판",
    desc: "두 프로그램이 대화하는 규칙. \"이 주소로 이 형식으로 보내면 이 결과를 돌려줄게.\" 웹의 모든 것이 API로 연결된다.",
    examples: ["REST API — 웹 표준 방식", "OpenAI API — AI 모델 호출", "Slack API — 메시지 전송"],
  },
  {
    title: "CLI",
    subtitle: "Command Line Interface",
    analogy: "직접 명령하는 리모컨",
    desc: "마우스 대신 텍스트 명령어로 컴퓨터를 조작. 개발자에게는 GUI보다 빠르고 강력하다. AI 에이전트의 실행 환경.",
    examples: ["claude — Claude Code 실행", "git — 코드 버전 관리", "npm/pnpm — 패키지 설치"],
  },
  {
    title: "MCP",
    subtitle: "Model Context Protocol",
    analogy: "AI의 만능 어댑터",
    desc: "AI 에이전트가 외부 앱을 직접 읽고 쓸 수 있게 해주는 프로토콜. API를 일일이 연결할 필요 없이, MCP 하나로 여러 도구에 접근.",
    examples: ["mcp:// Notion — 문서 읽기/쓰기", "mcp:// Slack — 메시지 전송", "mcp:// GitHub — 코드 관리"],
  },
];

const S05cMcpApiCli = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      API · CLI · MCP
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      AI 코딩에서 반복해서 등장하는 세 가지 핵심 개념
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      {concepts.map((c) => (
        <div key={c.title} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="text-lg font-bold">{c.title}</h3>
            <span className="text-sm text-muted-foreground/60 font-mono">{c.subtitle}</span>
          </div>
          <p className="text-sm text-muted-foreground/60 mb-3">비유: {c.analogy}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{c.desc}</p>
          <div className="space-y-1">
            {c.examples.map((ex) => (
              <p key={ex} className="text-sm font-mono text-muted-foreground/70">· {ex}</p>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className={cn("mt-5 rounded-2xl border border-border/40 bg-card/80 p-4", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="text-sm text-muted-foreground text-center">
        <span className="text-foreground font-semibold">관계:</span>{" "}
        Claude Code(CLI)가 OpenAI(API)를 호출하고, MCP로 Notion·Slack을 직접 조작한다
      </p>
    </div>
  </SectionShell>
));

S05cMcpApiCli.displayName = "S05cMcpApiCli";
export default S05cMcpApiCli;
