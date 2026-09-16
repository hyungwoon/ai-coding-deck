"use client";

import Link from "next/link";
import { TemplateCard } from "../../health-research/kit/template-card";
import { CHECKLIST, FIXED_BLOCKS, PIPELINE_STEPS, TEMPLATES } from "./templates";

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">{children}</h2>;
}

export default function GenaiKitPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">프롬프트 킷 — 조건을 좁히는 일</h1>
        <p className="text-lg text-muted-foreground mb-4">
          강의에서 본 원리를 그대로 옮긴 틀입니다. [대괄호]만 바꿔서 어느 도구에서든 씁니다 —
          고정 블록 3개 · 템플릿 6종 · 작업 순서 · 체크리스트 8문.
        </p>
        <Link href="/genai" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          ← 덱으로 돌아가기
        </Link>

        <section className="mt-12 mb-10">
          <H>작업 순서 — 이 순서를 지키는 게 문장보다 중요합니다</H>
          <div className="rounded-xl border border-border bg-card px-4 py-4 space-y-3">
            {PIPELINE_STEPS.map((s) => (
              <div key={s.n} className="flex items-start gap-3">
                <span className="font-mono text-sm font-bold text-foreground shrink-0">{s.n}</span>
                <div>
                  <p className="text-sm font-semibold">{s.t}</p>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <H>고정 블록 A~C — 한 번 만들어 계속 재사용합니다</H>
          {FIXED_BLOCKS.map((b) => (
            <TemplateCard key={b.id} name={`${b.id}. ${b.name}`} purpose={b.purpose} prompt={b.prompt} />
          ))}
        </section>

        <section className="mb-10">
          <H>템플릿 T1~T6 — [대괄호]만 바꿔서 쓰세요</H>
          {TEMPLATES.map((t) => (
            <TemplateCard key={t.id} name={`${t.id}. ${t.name}`} purpose={t.purpose} prompt={t.prompt} />
          ))}
        </section>

        <section className="mb-10">
          <H>막혔을 때 8문</H>
          <div className="rounded-xl border border-border bg-card px-4 py-4 space-y-2.5">
            {CHECKLIST.map((q, i) => (
              <p key={q} className="text-sm text-muted-foreground">
                <span className="mr-2 font-bold text-foreground">Q{i + 1}.</span>
                {q}
              </p>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground/60">
            「아니오」가 나온 문항이 대개 원인입니다. 프롬프트 문장을 다듬는 건 이 여덟 개를 다 통과한 다음입니다.
          </p>
        </section>

        <footer className="border-t border-border/40 pt-6">
          <p className="text-sm text-muted-foreground mb-1">만든 사람: 형운 · AI Product Manager</p>
          <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
            연락처 보기 →
          </Link>
        </footer>
      </div>
    </div>
  );
}
