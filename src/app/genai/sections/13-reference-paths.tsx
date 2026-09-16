"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const paths = [
  {
    n: "1", name: "말로만", tech: "text-to-image",
    give: "텍스트 조건만",
    lock: "아무것도 안 잠긴다",
    use: "아이디어 탐색 · 첫 장 찾기",
  },
  {
    n: "2", name: "원본에서 출발", tech: "image-to-image · 변형 강도",
    give: "출발 잡음을 원본에서 만든다",
    lock: "전체 구도와 색 (강도가 낮을수록 더 잠김)",
    use: "화풍 변환 · 리터치 · 같은 그림 다른 분위기",
  },
  {
    n: "3", name: "뼈대만 빌린다", tech: "구조 참조 (깊이·자세·윤곽)",
    give: "그림에서 기하 정보만 뽑아 조건으로",
    lock: "구도 · 인물의 자세 · 외곽선",
    use: "같은 레이아웃에 다른 내용 · 포즈 지정",
  },
  {
    n: "4", name: "정체성을 빌린다", tech: "이미지 임베딩 주입 · 참조 첨부",
    give: "참조 사진을 좌표로 바꿔 프롬프트 옆에",
    lock: "얼굴·사물의 인상 · 화풍",
    use: "같은 인물을 여러 장면에 · 브랜드 톤 유지",
  },
  {
    n: "5", name: "모델에 새긴다", tech: "파인튜닝 (LoRA 등)",
    give: "가중치 자체에 새 개념을 학습시킨다",
    lock: "그 개념 전체 — 어느 각도에서도",
    use: "반복해서 쓰는 캐릭터·제품·화풍",
  },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Image · 04 References — 핵심
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-3", anim(index))}>
      「참조」는 <span className="text-muted-foreground">한 가지가 아니다</span>
    </h2>
    <p className={cn("text-sm text-muted-foreground mb-6", anim(index))} style={{ transitionDelay: "100ms" }}>
      이미지를 첨부한다는 건 전부 <span className="text-foreground font-medium">그림을 조건으로 바꾸는 일</span>이다. 다만 경로마다 <span className="text-foreground font-medium">무엇이 잠기는지</span>가 다르다 — 원하는 게 안 나오면 대개 경로를 잘못 고른 것이다.
    </p>

    <div className={cn("overflow-x-auto rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm", anim(index))} style={{ transitionDelay: "180ms" }}>
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5">경로</th>
            <th className="px-4 py-2.5">모델에 무엇을 넘기나</th>
            <th className="px-4 py-2.5">무엇이 잠기나</th>
            <th className="px-4 py-2.5">언제 쓰나</th>
          </tr>
        </thead>
        <tbody>
          {paths.map((p) => (
            <tr key={p.n} className="border-t border-border/30 align-top">
              <td className="px-4 py-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-primary">{p.n}</span>
                  <span className="font-semibold whitespace-nowrap">{p.name}</span>
                </div>
                <p className="mt-0.5 font-mono text-[10px] text-muted-foreground/70">{p.tech}</p>
              </td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{p.give}</td>
              <td className="px-4 py-3 text-xs"><span className="text-foreground">{p.lock}</span></td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{p.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className={cn("mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "280ms" }}>
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
        <p className="text-sm font-bold mb-1">겹쳐 쓰는 게 기본이다</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          자세는 3번으로 잡고, 얼굴은 4번으로 가져오고, 배경은 말로 쓴다 — 조건은 하나만 고르는 라디오 버튼이 아니라 쌓는 층이다.
        </p>
      </div>
      <div className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold mb-1">참조에도 관할을 적어 준다</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          「이 사진은 인물의 얼굴만 결정한다 — 구도와 조명은 여기서 가져오지 않는다」. 첨부만 하면 모델은 사진의 모든 것을 상속하려 든다.
        </p>
      </div>
    </div>
  </SectionShell>
));
S.displayName = "S13ReferencePaths";
export default S;
