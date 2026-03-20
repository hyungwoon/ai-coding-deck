"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const elements = [
  {
    tag: "ENTITY · 개체",
    title: "존재하는 것들의 목록",
    desc: "사람, 제품, 팀, 고객, 프로세스 등. \"우리 회사에 존재하는 것은 무엇인가.\"",
    code: "- 브랜드: Sparta Club\n- 팀: 디자인팀\n- 고객: B2B 기업",
  },
  {
    tag: "RELATION · 관계",
    title: "개체들이 어떻게 연결되는지",
    desc: "\"A는 B에 속한다\", \"A는 B를 담당한다\" 같은 연결 구조.",
    code: "디자인팀 → 브랜드 관리\n캠페인 → 브랜드에 종속\n고객 → 팀 배정됨",
  },
  {
    tag: "ATTRIBUTE · 속성",
    title: "각 개체가 가진 특성·값",
    desc: "브랜드 컬러, 톤앤매너, 타겟, 제약사항 같은 구체적 정보.",
    code: "Primary: #FF6B35\n톤: 에너지·도전\n금지: 파스텔 계열",
  },
  {
    tag: "RULE · 규칙",
    title: "판단 기준·제약·워크플로우",
    desc: "\"이럴 땐 이렇게 해야 한다\"는 로직. AI가 자율 판단할 때 따르는 기준.",
    code: "SNS 발행 → 승인 필요\n로고 변형 → 금지\n캠페인 → 브리프 선행",
  },
];

const S18OntologyElements = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-5xl font-bold tracking-tight sm:text-6xl mb-3", anim(index))}>
      온톨로지를 구성하는 4가지 요소
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "100ms" }}>
      Entity, Relation, Attribute, Rule — 이 네 가지로 AI의 지식 구조를 설계한다
    </p>

    <div className={cn("grid grid-cols-2 gap-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      {elements.map((el) => (
        <div key={el.tag} className="rounded-2xl border border-border/40 bg-card/80 p-5 shadow-sm backdrop-blur-sm">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-2">{el.tag}</p>
          <p className="text-sm font-semibold mb-2">{el.title}</p>
          <p className="text-[12px] text-muted-foreground leading-relaxed mb-3">{el.desc}</p>
          <div className="rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {el.code}
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S18OntologyElements.displayName = "S18OntologyElements";
export default S18OntologyElements;
