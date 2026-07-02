"use client";

import { useCallback, useState } from "react";

interface Props {
  name: string;
  purpose: string;
  prompt: string;
}

export function TemplateCard({ name, purpose, prompt }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [prompt]);

  return (
    <div className="mb-4">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{purpose}</p>
        </div>
        <button
          onClick={handleCopy}
          className={`shrink-0 rounded-lg border px-4 py-1.5 text-sm font-medium transition-all ${
            copied
              ? "border-green-500/40 bg-green-500/10 text-green-400"
              : "border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
        {prompt}
      </div>
    </div>
  );
}
