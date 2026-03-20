"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const VectorContext = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <div>
      <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4", anim(index))}>
        STEP 1-2 · 벡터 임베딩 + 컨텍스트 윈도우
      </p>
      <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-8", anim(index))}>
        의미의 좌표와{" "}
        <span className="text-muted-foreground">AI의 책장</span>
      </h2>

      <div className={cn("grid grid-cols-2 gap-5 mb-5", anim(index))} style={{ transitionDelay: "100ms" }}>
        {/* 벡터 임베딩 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">
            벡터 임베딩(Vector Embedding)
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            숫자 배열은 단순한 ID가 아니다. 각 숫자는{" "}
            <span className="text-foreground font-medium">의미의 좌표</span>다.
            "강아지"와 "고양이"는 벡터 공간에서{" "}
            <span className="text-foreground font-medium">가까이 위치</span>하고, "자동차"는 멀리 있다.
          </p>
          <div className="space-y-2">
            <div className="bg-muted/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-foreground mb-1">의미가 같으면 가깝다</p>
              <p className="text-xs text-muted-foreground">"강아지"와 "개"는 벡터 공간에서 거의 같은 위치</p>
            </div>
            <div className="bg-muted/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-foreground mb-1">벡터 연산이 가능하다</p>
              <p className="text-xs text-muted-foreground">왕 − 남자 + 여자 ≈ 여왕. 의미를 더하고 빼는 수식이 동작</p>
            </div>
            <div className="bg-muted/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-primary mb-1">온톨로지 + 벡터DB (RAG)</p>
              <p className="text-xs text-muted-foreground">지식을 벡터로 저장하면 AI가 의미 기반으로 검색 가능</p>
            </div>
          </div>
        </div>

        {/* 컨텍스트 윈도우 */}
        <div className="rounded-2xl border border-border/40 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">
            STEP 2 · 컨텍스트 윈도우
          </p>
          <p className="text-sm font-semibold mb-3">AI의 책장</p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            컨텍스트 윈도우는{" "}
            <span className="text-foreground font-medium">AI가 한 번에 펼쳐볼 수 있는 책장</span>이다.
            책장 안에 든 것만 참고할 수 있고, 책장 밖은 존재하지 않는 것과 같다.
            대화가 길어질수록 오래된 내용이{" "}
            <span className="text-foreground font-medium">밖으로 밀려난다.</span>
          </p>
          <div className="font-mono text-xs bg-muted/30 rounded-xl p-4">
            <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-3">컨텍스트 윈도우 (200K tokens)</p>
            <div className="space-y-2">
              {[
                { label: "시스템 프롬프트 (지침)", width: "w-1/4" },
                { label: "업로드한 문서·코드", width: "w-1/3" },
                { label: "대화 히스토리", width: "w-1/5" },
                { label: "현재 질문", width: "w-[10%]" },
              ].map(({ label, width }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={cn("h-1.5 rounded-full bg-primary/40 flex-shrink-0", width)} />
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <div className="h-1.5 rounded-full bg-muted/40 flex-1 border border-dashed border-border/60" />
                <span className="text-muted-foreground/50">남은 공간</span>
              </div>
            </div>
            <p className="text-muted-foreground/50 text-[10px] mt-3">Claude 200K = A4 약 500장 분량</p>
          </div>
        </div>
      </div>

      {/* 핵심 요약 */}
      <div className={cn("grid grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "200ms" }}>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">CONCEPT</p>
          <p className="text-sm font-semibold mb-1.5">컨텍스트 윈도우</p>
          <p className="text-xs text-muted-foreground leading-relaxed">한 번에 처리할 수 있는 텍스트 한도. Claude 최대 200K 토큰.</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">CONCEPT</p>
          <p className="text-sm font-semibold mb-1.5">시맨틱 서치</p>
          <p className="text-xs text-muted-foreground leading-relaxed">벡터 유사도로 의미가 같은 내용을 찾는다. 키워드가 달라도 정확히 검색.</p>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">CONCEPT</p>
          <p className="text-sm font-semibold mb-1.5">RAG 패턴</p>
          <p className="text-xs text-muted-foreground leading-relaxed">외부 지식을 벡터 DB에 저장 → 검색 → 컨텍스트에 주입. 최신 정보 활용 가능.</p>
        </div>
      </div>
    </div>
  </SectionShell>
));
VectorContext.displayName = "VectorContext";
export default VectorContext;
