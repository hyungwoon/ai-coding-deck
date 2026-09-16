"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const rows = [
  {
    q: "조건으로 무엇을 넣나",
    text: "역할 · 근거 자료 · 출력 골격 · 예시",
    image: "6개 축(주체·구도·광원·렌즈·질감·색) + 참조 이미지",
    video: "첫 프레임 · 컷 구조 · 비트별 초 · 카메라 · 오디오",
  },
  {
    q: "무엇으로 잠그나",
    text: "형식 지정 · 예시 · 「원문에 있는 것만」",
    image: "시드 고정 · 참조 첨부 · 구조 참조 · 파인튜닝",
    video: "첫·끝 프레임 · 참조 인물 판 · 카메라 프리셋",
  },
  {
    q: "무엇을 흔드나",
    text: "온도 · 같은 요청을 여러 번",
    image: "시드만 바꿔 여러 장 · 한 축씩 변주",
    video: "같은 조건으로 여러 테이크 · 컷 단위로 재생성",
  },
  {
    q: "어떻게 검증하나",
    text: "출처 링크를 직접 연다 · 수치는 원문 대조",
    image: "손·글자·로고·개수를 확대해 확인",
    video: "컷 경계에서 인물·색 일치 확인 · 소리 유무",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 5 · Grammar
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      세 매체, <span className="text-muted-foreground">같은 문법</span>
    </h2>

    <div className={cn("overflow-x-auto rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "150ms" }}>
      <table className="w-full min-w-[700px] text-left text-sm">
        <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5 w-[18%]" />
            <th className="px-4 py-2.5">텍스트</th>
            <th className="px-4 py-2.5">이미지</th>
            <th className="px-4 py-2.5">영상</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.q} className="border-t border-border/30 align-top">
              <td className="px-4 py-3 text-sm font-semibold">{r.q}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{r.text}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{r.image}</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{r.video}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className={cn("mt-5 rounded-2xl border border-primary/30 bg-primary/5 p-5", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="text-base sm:text-lg font-bold">
        도구가 바뀌어도 이 네 줄은 안 바뀐다 — <span className="text-primary">무엇을 넣고, 무엇을 잠그고, 무엇을 흔들고, 무엇을 확인하는가</span>
      </p>
    </div>
  </SectionShell>
));
S.displayName = "S25Grammar3Col";
export default S;
