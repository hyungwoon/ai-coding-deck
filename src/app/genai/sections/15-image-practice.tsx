"use client";
import { forwardRef } from "react";
import SectionShell from "../../deck/section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const axes = [
  { a: "주체", bad: "여자", good: "30대 초반 여성, 짧은 곱슬머리, 회색 니트" },
  { a: "구도·행위", bad: "예쁘게", good: "창가에 앉아 옆을 보는 상반신, 화면 왼쪽 1/3에 배치" },
  { a: "광원", bad: "밝게", good: "오른쪽 창에서 들어오는 역광, 부드러운 확산광, 그림자 약함" },
  { a: "렌즈·카메라", bad: "감성적으로", good: "화각 29도(85mm 상당), 피사체와 4m, 얕은 심도" },
  { a: "질감·매체", bad: "고퀄로", good: "필름 그레인 약간, 보정하지 않은 피부 질감" },
  { a: "색·톤", bad: "따뜻하게", good: "전체의 70%는 회청색, 25%는 창의 미색, 5%만 붉은 악센트" },
];

const rules = [
  { t: "형용사 대신 명사와 수치", d: "「감성적인」은 조건이 아니다. 모델이 아는 건 뜻이 아니라 함께 등장한 어휘 — 렌즈·광원·색은 숫자로 말할수록 좁혀진다." },
  { t: "금지보다 긍정 잠금", d: "「흐리지 않게」는 약한 지시다. 「초점은 눈에 맞고 배경만 흐리다」처럼 참인 상태를 적으면 훨씬 잘 지켜진다." },
  { t: "시드 고정 + 한 번에 하나", d: "두 군데를 같이 바꾸면 무엇이 효과였는지 영영 모른다. 시드를 잠그고 한 축씩 움직인다." },
  { t: "안 되면 경로를 바꾼다", d: "말로 세 번 고쳐서 안 되는 건 대개 말의 문제가 아니라 조건 경로의 문제다 — 참조·구조를 붙일 차례." },
];

const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <p className={cn("font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3", anim(index))}>
      Part 2 · Bridge · 원리에서 유도하기
    </p>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-5xl mb-6", anim(index))}>
      이미지 프롬프트의 <span className="text-muted-foreground">6개 축</span>
    </h2>

    <div className={cn("overflow-hidden rounded-2xl border border-border/40 bg-card/80 shadow-sm backdrop-blur-sm mb-5", anim(index))} style={{ transitionDelay: "150ms" }}>
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-2.5">축</th>
            <th className="px-4 py-2.5">좁혀지지 않는 말</th>
            <th className="px-4 py-2.5">조건이 되는 말</th>
          </tr>
        </thead>
        <tbody>
          {axes.map((r) => (
            <tr key={r.a} className="border-t border-border/30">
              <td className="px-4 py-2.5 font-semibold whitespace-nowrap">{r.a}</td>
              <td className="px-4 py-2.5 text-xs text-muted-foreground/60 line-through">{r.bad}</td>
              <td className="px-4 py-2.5 text-xs">{r.good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-3", anim(index))} style={{ transitionDelay: "250ms" }}>
      {rules.map((p) => (
        <div key={p.t} className="rounded-2xl border border-border/40 bg-card/80 p-4 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-semibold leading-snug mb-1">{p.t}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
        </div>
      ))}
    </div>
  </SectionShell>
));
S.displayName = "S15ImagePractice";
export default S;
