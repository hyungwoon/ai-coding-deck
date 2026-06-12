"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const ELEMENTS = [
  {
    label: "Figma 라이브러리",
    desc: "컴포넌트·스타일·토큰을 Figma에서 공유. 디자이너의 단일 진실 소스.",
    tag: "시각",
  },
  {
    label: "Storybook",
    desc: "개발된 컴포넌트를 격리 렌더링·문서화. 개발자의 컴포넌트 카탈로그.",
    tag: "코드",
  },
  {
    label: "토큰 문서",
    desc: "색·타이포·간격 값과 사용 원칙. 팀이 참고하는 레퍼런스 페이지.",
    tag: "기준",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      전통 Design System
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-10", anim(index))}>
      지금까지의 DS는 <span className="text-muted-foreground">세 곳에 나뉘어 있었다</span>
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {ELEMENTS.map((el, i) => (
        <div
          key={el.label}
          className={cn("rounded-2xl border border-border/40 bg-card/60 p-6", anim(index))}
          style={{ transitionDelay: `${150 + i * 90}ms` }}
        >
          <span className="inline-block rounded-full border border-border/40 px-2.5 py-0.5 font-mono text-xs text-muted-foreground mb-4">
            {el.tag}
          </span>
          <p className="font-bold text-lg mb-2">{el.label}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{el.desc}</p>
        </div>
      ))}
    </div>

    <p className={cn("mt-8 text-sm text-muted-foreground", anim(index))} style={{ transitionDelay: "450ms" }}>
      사람은 세 곳을 오가며 맥락을 조합할 수 있다.{" "}
      <span className="text-foreground">AI는 그렇게 하지 못한다.</span>
    </p>
  </SectionShell>
));
S.displayName = "S16TraditionalDs";
export default S;
