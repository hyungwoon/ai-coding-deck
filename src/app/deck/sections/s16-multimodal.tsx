"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const cards = [
  {
    icon: "🎨",
    title: "디자인 → 코드",
    desc: "Figma 화면 스크린샷을 붙여넣고 \"이 디자인을 HTML/CSS로 구현해줘\"라고 하면 레이아웃·컬러·폰트까지 그대로 코드로 변환. 개발자 없이 시안을 바로 프로토타입으로.",
    example: '[스크린샷 첨부]\n"이 UI를 React 컴포넌트로 만들어줘. Tailwind 사용"',
  },
  {
    icon: "🐛",
    title: "에러 화면 → 디버깅",
    desc: "터미널 에러 메시지나 브라우저 콘솔 스크린샷을 그대로 붙이면 무슨 에러인지, 왜 났는지, 어떻게 고치는지를 바로 설명. 에러 텍스트를 일일이 복사할 필요 없음.",
    example: '[에러 스크린샷 첨부]\n"이 에러 왜 나는거야? 어떻게 고쳐?"',
  },
  {
    icon: "📄",
    title: "문서·PDF → 구조화",
    desc: "계약서·기획서·보고서 PDF를 넣고 \"주요 내용 요약해줘\" 또는 \"온톨로지로 정리해줘\"라고 하면 구조화된 지식으로 변환. 문서 분석 시간 대폭 절감.",
    example: '[PDF 첨부]\n"주요 내용 요약하고 온톨로지로 정리해줘"',
  },
  {
    icon: "📊",
    title: "데이터·표 → 인사이트",
    desc: "엑셀 화면, 대시보드 스크린샷을 붙이고 \"이 데이터에서 뭘 읽을 수 있어?\"라고 하면 패턴·이상값·인사이트를 즉시 분석. 데이터 분석가 없이도 가능.",
    example: '[대시보드 스크린샷 첨부]\n"이 데이터에서 뭘 읽을 수 있어?"',
  },
];

const S16Multimodal = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-4xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      멀티모달 — 이미지를 AI에게 보여주기
    </h2>
    <p className={cn("text-base text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "100ms" }}>
      Claude는 텍스트만 받는 게 아니다. 이미지·스크린샷·PDF를 그대로 붙여넣으면 읽고 분석하고 구현한다.
    </p>

    <div className={cn("grid grid-cols-2 gap-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      {cards.map((card) => (
        <div key={card.title} className="rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm overflow-hidden">
          <div className="bg-muted/30 border-b border-border/40 px-5 py-3">
            <p className="text-sm font-semibold">{card.icon} {card.title}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-[12px] text-muted-foreground leading-relaxed mb-3">{card.desc}</p>
            <div className="rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-[10px] text-primary leading-relaxed whitespace-pre-line">
              {card.example}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
));
S16Multimodal.displayName = "S16Multimodal";
export default S16Multimodal;
