"use client";
import { forwardRef } from "react";
import SectionShell from "../section-shell";
import { cn } from "@/lib/utils";

interface P { anim: (i: number) => string; index: number; }

const layers = [
  {
    title: "프론트엔드 (클라이언트)",
    desc: "사용자가 보는 화면. 브라우저에서 실행된다.",
    items: ["HTML — 구조 (뼈대)", "CSS — 스타일 (옷)", "JavaScript — 동작 (근육)", "React / Next.js — 프레임워크"],
    color: "border-blue-500/30",
  },
  {
    title: "백엔드 (서버)",
    desc: "눈에 안 보이는 뒷단. 데이터 처리와 비즈니스 로직을 담당한다.",
    items: ["API — 프론트와 백의 대화 창구", "인증 — 로그인, 권한 관리", "비즈니스 로직 — 결제, 추천, 알림", "Node.js / Python / Go"],
    color: "border-emerald-500/30",
  },
  {
    title: "데이터베이스 (DB)",
    desc: "데이터를 저장하고 꺼내는 곳. 앱의 기억 장치.",
    items: ["SQL (PostgreSQL, MySQL) — 구조화된 데이터", "NoSQL (MongoDB) — 유연한 구조", "Supabase / Firebase — 백엔드+DB 올인원", "ORM (Drizzle, Prisma) — 코드로 DB 조작"],
    color: "border-amber-500/30",
  },
];

const S05bDevBasics = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    <h2 className={cn("text-3xl font-bold tracking-tight sm:text-6xl mb-2", anim(index))}>
      개발의 기본 구조
    </h2>
    <p className={cn("text-lg text-muted-foreground mb-8", anim(index))} style={{ transitionDelay: "80ms" }}>
      프론트엔드 · 백엔드 · 데이터베이스 — 모든 앱은 이 세 층으로 이루어져 있다
    </p>

    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", anim(index))} style={{ transitionDelay: "150ms" }}>
      {layers.map((layer) => (
        <div key={layer.title} className={cn("rounded-2xl border bg-card/80 p-5 shadow-sm backdrop-blur-sm", layer.color)}>
          <h3 className="text-sm font-bold mb-1">{layer.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{layer.desc}</p>
          <ul className="space-y-1.5">
            {layer.items.map((item) => (
              <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-muted-foreground/40 mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className={cn("mt-5 rounded-2xl border border-border/40 bg-card/80 p-4 text-center", anim(index))} style={{ transitionDelay: "250ms" }}>
      <p className="text-sm text-muted-foreground">
        <span className="text-foreground font-semibold">흐름:</span>{" "}
        사용자가 버튼 클릭 (프론트) → API 요청 (백엔드) → 데이터 조회 (DB) → 결과 반환 → 화면 표시
      </p>
    </div>
  </SectionShell>
));

S05bDevBasics.displayName = "S05bDevBasics";
export default S05bDevBasics;
