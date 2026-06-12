"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="">
    <section data-code-slide className="w-full">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        설치 ② · MCP 연결 준비
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        MCP는 어디에 설정하나
      </h2>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          claude_desktop_config.json
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

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "250ms" }}>
          <p className="font-semibold mb-1">위치</p>
          <p className="text-muted-foreground">
            macOS: <span className="font-mono text-xs">~/Library/Application Support/Claude/</span><br />
            또는 <span className="text-foreground">Settings → Developer → Edit Config</span>
          </p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "350ms" }}>
          <p className="font-semibold mb-1">적용</p>
          <p className="text-muted-foreground">
            저장 후 <span className="text-foreground">Cmd+Q로 완전 종료 → 재실행</span>. JSON 오타 하나면 서버 전체가 조용히 꺼진다.
          </p>
        </div>
      </div>

      <p className={cn("mt-4 text-xs text-muted-foreground/60", anim(index))} style={{ transitionDelay: "450ms" }}>
        더 쉬운 길 — Desktop Extensions(.mcpb)는 더블클릭으로 설치, JSON 편집 불필요. (실습 STEP 6에서 직접)
      </p>
    </section>
  </SectionShell>
));
S.displayName = "S04SetupMcp";
export default S;
