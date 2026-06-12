"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const CHECKS = [
  "claude_desktop_config.json에 mcpServers 추가 완료",
  "Cmd+Q로 Claude 완전 종료 후 재실행",
  "Claude Desktop 좌측 패널에 내 서버 이름 표시",
  "서버 클릭 시 brand/bx/product/ux 리소스 보임",
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="">
    <section data-code-slide className="w-full">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        STEP 6 · Claude Desktop 연결
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
        config 한 줄 → Claude가 내 디자인 시스템을 안다
      </h2>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          ~/Library/Application Support/Claude/claude_desktop_config.json
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`{
  "mcpServers": {
    "my-design": {
      "command": "node",
      "args": ["/abs/path/to/design-mcp/server.mjs"]
    }
  }
}`}
        </pre>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-5">
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-semibold mb-1">파일 위치</p>
          <p className="text-muted-foreground text-xs">
            macOS: <span className="font-mono">~/Library/Application Support/Claude/</span><br />
            또는 Claude → Settings → Developer → Edit Config
          </p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "330ms" }}>
          <p className="font-semibold mb-1">Cmd+Q 필수</p>
          <p className="text-muted-foreground text-xs">
            창 닫기(X)는 백그라운드 유지. <span className="text-foreground">Cmd+Q</span>로 완전 종료 후 재실행해야 MCP가 로드된다.
          </p>
        </div>
      </div>

      <div className={cn("rounded-2xl border border-primary/30 bg-card/80 p-5", anim(index))} style={{ transitionDelay: "410ms" }}>
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">체크포인트 — STEP 6 완료 기준</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {CHECKS.map((c) => (
            <div key={c} className="flex items-center gap-3">
              <span className="flex size-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary">✓</span>
              <span className="text-sm">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </SectionShell>
));
S.displayName = "S42Step6Connect";
export default S;
