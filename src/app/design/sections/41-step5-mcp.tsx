"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index} className="">
    <section data-code-slide className="w-full">
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
        STEP 5 · 미니 MCP
      </p>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-4", anim(index))}>
        4개 md → Claude가 읽는 서버
      </h2>
      <p className={cn("text-muted-foreground mb-6 max-w-2xl", anim(index))} style={{ transitionDelay: "100ms" }}>
        경로만 바꾸면 된다. 코드를 이해할 필요 없다 — 복붙하고 내 파일 경로로 교체.
      </p>

      <div className={cn("rounded-2xl border border-border/40 bg-card/80 overflow-hidden mb-4", anim(index))} style={{ transitionDelay: "150ms" }}>
        <div className="border-b border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground">
          design-mcp/server.mjs — 복붙 골격 (경로만 교체)
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/90">
{`import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync } from "fs";
import { join } from "path";

// ← 이 경로만 내 프로젝트로 바꾼다
const DESIGN_DIR = "/abs/path/to/my-project/design";

const server = new McpServer({
  name: "my-design",
  version: "1.0.0",
});

const FILES = ["brand", "bx", "product", "ux"];

for (const name of FILES) {
  server.registerResource(
    \`design/\${name}\`,
    \`design://\${name}\`,
    { description: \`\${name}.md — 디자인 시스템 규칙\` },
    async () => ({
      contents: [{
        uri: \`design://\${name}\`,
        text: readFileSync(join(DESIGN_DIR, \`\${name}.md\`), "utf-8"),
      }],
    }),
  );
}

const transport = new StdioServerTransport();
await server.connect(transport);`}
        </pre>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "300ms" }}>
          <p className="font-semibold mb-1">설치</p>
          <p className="text-muted-foreground font-mono text-xs">npm install @modelcontextprotocol/sdk</p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "380ms" }}>
          <p className="font-semibold mb-1">실행 확인</p>
          <p className="text-muted-foreground font-mono text-xs">node server.mjs</p>
          <p className="text-muted-foreground text-xs mt-1">에러 없이 대기 상태면 OK</p>
        </div>
        <div className={cn("rounded-xl border border-border/40 bg-card/60 p-4 text-sm", anim(index))} style={{ transitionDelay: "460ms" }}>
          <p className="font-semibold mb-1">절대 경로 필수</p>
          <p className="text-muted-foreground text-xs">DESIGN_DIR은 <span className="font-mono">/abs/...</span> 형식. 상대 경로는 Claude에서 안 된다.</p>
        </div>
      </div>
    </section>
  </SectionShell>
));
S.displayName = "S41Step5Mcp";
export default S;
