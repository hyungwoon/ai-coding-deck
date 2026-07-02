"use client";

import Link from "next/link";
import { TemplateCard } from "./template-card";
import { CHECKLIST, FIXED_BLOCKS, SCORECARD, TEMPLATES, TOPICS, WHITELIST } from "./templates";

const FREE_TOOLS = [
  { name: "ChatGPT", url: "chatgpt.com", note: "리서치할 때는 검색(출처 표시) 모드를 켜고 쓰세요." },
  { name: "Claude", url: "claude.ai", note: "긴 초안 작성·다듬기에 강합니다. 웹 검색을 켜면 출처가 붙습니다." },
  { name: "Gemini", url: "gemini.google.com", note: "Google 검색 연동으로 출처 링크 확인이 쉽습니다." },
];

export default function HealthResearchKitPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-24">

        {/* 헤더 */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-2">프롬프트 킷 — AI는 초안, 검증은 당신</h1>
        <p className="text-lg text-muted-foreground mb-12">
          [대괄호]만 바꿔서 바로 쓰는 건강정보 디자인단용 프롬프트 템플릿 6종과 검증 도구 모음입니다.
        </p>

        {/* 실습 안내 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">실습 안내 — 주제 하나를 고르세요</h2>
          <p className="text-sm text-muted-foreground mb-3">
            아래 3개 중 하나를 골라 T1→T2→T3 순서로 프롬프트를 돌려보고, 결과물을 채점표 기준으로 스스로 점검하세요.
          </p>
          <div className="space-y-2 mb-4">
            {TOPICS.map((topic, i) => (
              <div key={topic} className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-sm text-foreground">
                  <span className="mr-2 font-bold text-muted-foreground/60">{i + 1}</span>
                  {topic}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card px-4 py-4">
            <p className="text-sm font-bold text-foreground mb-2">채점표 — 결과물은 이 4가지로 봅니다</p>
            <div className="space-y-2">
              {SCORECARD.map((s) => (
                <div key={s.item} className="flex items-start gap-3 rounded-lg border border-border bg-muted/10 px-3 py-2.5">
                  <span className="w-16 shrink-0 text-sm font-bold text-foreground">{s.item}</span>
                  <span className="text-sm text-muted-foreground">{s.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 고정 블록 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">고정 블록 3 — 어떤 프롬프트 끝에든 붙이세요</h2>
          <p className="text-sm text-muted-foreground mb-4">
            템플릿을 안 쓰고 자유롭게 물어볼 때도, 이 세 문장을 붙이면 환각과 무출처 답변이 크게 줄어듭니다.
          </p>
          {FIXED_BLOCKS.map((block) => (
            <TemplateCard key={block.id} name={`${block.id}. ${block.name}`} purpose="프롬프트 끝에 그대로 붙여넣는 고정 문장" prompt={block.text} />
          ))}
        </section>

        {/* 템플릿 T1~T6 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">템플릿 T1~T6 — [대괄호]만 바꿔서 쓰세요</h2>
          <p className="text-sm text-muted-foreground mb-4">
            역할·맥락·과업·형식·제약 5요소가 이미 들어 있습니다. Copy 버튼으로 복사한 뒤 [대괄호] 부분만 내 상황으로 바꾸세요.
          </p>
          {TEMPLATES.map((t) => (
            <TemplateCard key={t.id} name={`${t.id}. ${t.name}`} purpose={t.purpose} prompt={t.prompt} />
          ))}
        </section>

        {/* 게시 전 5문 체크리스트 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">게시 전 5문 체크리스트</h2>
          <div className="rounded-xl border border-border bg-card px-4 py-4 space-y-2.5">
            {CHECKLIST.map((question, i) => (
              <p key={question} className="text-sm text-muted-foreground">
                <span className="mr-2 font-bold text-foreground">{i + 1}.</span>
                {question}
              </p>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground/60">하나라도 「아니오」라면 게시하지 마세요. 고친 뒤 다시 5문을 통과시키면 됩니다.</p>
        </section>

        {/* 출처 화이트리스트 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">출처 화이트리스트</h2>
          <p className="text-sm text-muted-foreground mb-3">1군(공공기관)을 최우선으로 인용하세요. AI 답변의 사실 확인도 여기서 합니다.</p>
          <div className="space-y-2 mb-4">
            {WHITELIST.primary.map((source) => (
              <div key={source.name} className="rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-sm font-bold text-foreground">{source.name}</p>
                  <a
                    href={`https://${source.url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    {source.url}
                  </a>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{source.note}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-muted/10 px-4 py-3 space-y-2">
            <p className="text-sm text-muted-foreground">{WHITELIST.secondary}</p>
            <p className="text-sm text-muted-foreground">{WHITELIST.tertiary}</p>
          </div>
        </section>

        {/* 무료 도구 안내 */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground/50 uppercase tracking-widest mb-3">무료 도구 안내</h2>
          <p className="text-sm text-muted-foreground mb-3">
            셋 다 무료 버전으로 충분합니다. 무료 한도에 걸리면 다른 도구로 갈아타면 됩니다. 리서치는 반드시 출처가 표시되는 모드로 하세요.
          </p>
          <div className="space-y-2">
            {FREE_TOOLS.map((tool) => (
              <div key={tool.name} className="rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-sm font-bold text-foreground">{tool.name}</p>
                  <span className="font-mono text-xs text-muted-foreground/60">{tool.url}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{tool.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-border/40 pt-6">
          <p className="text-sm text-muted-foreground mb-1">만든 사람: 김형운 · AI Product Manager</p>
          <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
            연락처 보기 →
          </Link>
        </footer>

      </div>
    </div>
  );
}
