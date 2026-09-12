"use client";

import Link from "next/link";
import { TemplateCard } from "../../health-research/kit/template-card";
import { CHECKLIST, FIXED_BLOCKS, REFERENCES, SOURCES, TEMPLATES, TOOLS, WARNING_TEXTS } from "./templates";

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">{children}</h2>;
}

export default function GenaiKitPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">프롬프트 킷 — 같은 얼굴, 맞는 사실</h1>
        <p className="text-lg text-muted-foreground mb-12">
          2026 절주서포터즈용. [대괄호]만 바꿔서 바로 쓰는 고정 블록 3개 · 템플릿 6종 · 출처 화이트리스트 · 게시 전 체크리스트.
        </p>

        <section className="mb-10">
          <H>쓰는 순서</H>
          <div className="rounded-xl border border-border bg-card px-4 py-4 space-y-2 text-sm text-muted-foreground">
            <p><span className="mr-2 font-bold text-foreground">1</span>고정 블록 A(캐릭터 시트)를 한 번 만들어 이미지로 저장한다. 카드뉴스라면 B(스타일 블록)로 1장을 먼저 완성한다.</p>
            <p><span className="mr-2 font-bold text-foreground">2</span>T2·T3에 시트(또는 1장)를 첨부하고 장면만 바꿔 쓴다. 끝에는 항상 C(절주 제약 블록).</p>
            <p><span className="mr-2 font-bold text-foreground">3</span>마음에 안 들면 문장을 고치기 전에 3~5번 다시 굴린다. 글자·자막은 Canva·CapCut에서 얹는다.</p>
            <p><span className="mr-2 font-bold text-foreground">4</span>문안의 숫자는 T5로 뽑아 화이트리스트 원문에서 대조한다. 게시 전 체크리스트 7문.</p>
          </div>
        </section>

        <section className="mb-10">
          <H>고정 블록 3 — 매 프롬프트에 글자 하나 안 바꾸고 붙입니다</H>
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
          <H>과음 경고문구 원문 3종 — 카드뉴스에 넣을 땐 이 중 하나를 그대로</H>
          <p className="text-sm text-muted-foreground mb-3">{WARNING_TEXTS.basis}</p>
          {WARNING_TEXTS.texts.map((t, i) => (
            <TemplateCard key={t} name={`경고문구 ${i + 1}`} purpose="원문 그대로 — 한 글자도 바꾸지 않습니다" prompt={t} />
          ))}
        </section>

        <section className="mb-10">
          <H>게시 전 7문 체크리스트</H>
          <div className="rounded-xl border border-border bg-card px-4 py-4 space-y-2.5">
            {CHECKLIST.map((q, i) => (
              <p key={q} className="text-sm text-muted-foreground">
                <span className="mr-2 font-bold text-foreground">Q{i + 1}.</span>
                {q}
              </p>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground/60">하나라도 「아니오」라면 게시하지 마세요. 고친 뒤 다시 7문을 통과시키면 됩니다.</p>
        </section>

        <section className="mb-10">
          <H>출처 화이트리스트 — 숫자는 여기서만</H>
          <p className="text-sm text-muted-foreground mb-3">AI가 준 숫자는 이 목록의 원문에서 찾을 때까지 「없는 숫자」입니다. 표기는 항상 기관 · 조사명 · 연도.</p>
          <div className="space-y-2">
            {SOURCES.map((s) => (
              <div key={s.name} className="rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-sm font-bold text-foreground">{s.name}</p>
                  <a href={`https://${s.url}`} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">
                    {s.url}
                  </a>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <H>도구 안내 — 무료 한도로 시작</H>
          <div className="space-y-2">
            {TOOLS.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <span className="font-mono text-xs text-muted-foreground/60">{t.url}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground/60">도구·버전·무료 한도는 2026-09 기준이며 자주 바뀝니다. 원리(참조 · 고정 블록 · 다시 굴리기)는 도구가 바뀌어도 그대로입니다.</p>
        </section>

        <section className="mb-10">
          <H>참고 링크 — 강의에서 인용한 원문</H>
          <div className="space-y-1.5">
            {REFERENCES.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="block rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
                {r.name}
              </a>
            ))}
          </div>
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
