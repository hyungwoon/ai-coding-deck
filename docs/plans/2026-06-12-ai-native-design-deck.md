# AI Native Design 덱 — Implementation Plan

> **For Claude:** design doc은 `2026-06-12-ai-native-design-deck-design.md`. 슬라이드 콘텐츠 명세는 그 §6 참조.

**Goal:** ai-coding-deck에 클래스 허브(`/`) + "AI Native Design" 덱(`/design`, 46장)을 추가하고, 기존 덱은 `/deck`로 보존한다.

**Architecture:** 공유 훅/셸을 `_deck-kit/`로 추출 → 허브(서버셸+클라카드) → 새 덱은 agents-2026 패턴 복제. 슬라이드는 `forwardRef + SectionShell + anim(index)` 단일 패턴.

**Tech Stack:** Next 16 App Router, React 19, Tailwind 4(oklch 다크 토큰, globals.css), lucide-react.

**검증 게이트(매 Phase 끝):** `pnpm build` 통과 + `pnpm lint` 통과 + (UI는) 렌더 스크린샷 확인. TDD 대신 빌드/시각 게이트.

---

## Phase 0: 1차 소스 검증 (구현 전 선행)

**Task 0.1 — 설치/도구 1차 소스 (그룹0 s03·s04, 그룹5 s41·s42 콘텐츠 의존)**
- claude-code-guide 에이전트 또는 WebFetch로 확인: Claude Desktop 설치(macOS/Win), Claude Code 연동, Claude Desktop `.mcp`/MCP 설정 방법, `@modelcontextprotocol/sdk` 최소 서버 패턴.
- WebFetch `stitch.withgoogle.com/docs/design-md` → DESIGN.md 표준 정확한 표현/범위(s18·s19).
- 산출: 검증된 설치 단계·DESIGN.md 문구를 메모(슬라이드 작성 시 인용). **기억 추정 금지.**
- 게이트: 단계가 공식 문서와 일치 확인.

---

## Phase 1: 공유 모듈 전략 — 결합 수용 (추출 보류)

**결정**: deck-kit 추출(deck ~80 + agents-2026 31 파일 import churn)은 리스크/시간 대비 이득이 "새 덱 완성"보다 작다 → **결합 수용**. 새 `design` 덱은 agents-2026와 동일하게 `../deck/hooks`·`../../deck/section-shell`를 직접 import. `deck/`가 사실상 공유 커널 역할(명시적 수용). 추출은 향후 별도 리팩터.
- **print**: `design/page.tsx`는 agents-2026의 print 블록(95-117) 복제. 코드카드 슬라이드는 `section[data-code-slide]` + `height:auto` 예외.
- **NavBar 충돌**: 덱은 중앙정렬(min-h-screen)이라 fixed NavBar와 충돌 경미(기존 상속). 허브만 `pt-24` offset.

---

## Phase 2: 허브 + NavBar + agents-2026 등록

**Task 2.1 — 허브 페이지(`/`)**
- Modify: `src/app/page.tsx` — 현 `export { default } from "./deck/page"` 제거.
- Create: `src/app/page.tsx`(서버 컴포넌트 셸, `export const metadata`) + `src/app/_hub/class-cards.tsx`(클라이언트 카드 그리드).
- 카드 3개: 메인 덱(`/deck`)·AI Agents 2026(`/agents-2026`)·AI Native Design(`/design`). 각 제목/부제/슬라이드수/CTA.
- 상단 `pt-16`(fixed NavBar offset). 카드 패턴(name + tagline + meta + arrow):

```tsx
// _hub/class-cards.tsx (클라이언트)
"use client";
import Link from "next/link";
const CLASSES = [
  { href: "/deck", title: "AI는 어떻게 작동하는가", sub: "LLM·에이전트·온톨로지·해자", count: 48, tag: "Foundations" },
  { href: "/agents-2026", title: "AI Agents 2026", sub: "무엇을 배우고 만들고 버릴 것인가", count: 31, tag: "Agents" },
  { href: "/design", title: "AI Native Design", sub: "Design System에서 DESIGN.md로", count: 46, tag: "Design", featured: true },
];
// → grid, 각 카드 <Link>, featured는 border-primary 강조
```
- 게이트: `/`에서 3카드 렌더, 각 링크 이동, `/deck` 여전히 작동.

**Task 2.2 — NavBar `isHub`**
- Modify: `src/components/nav-bar.tsx` — `isHub = pathname === "/"`, "Deck" 링크 `href="/deck"`, "Home/허브" 링크 `href="/"`. 클래스는 단순 링크(Deck/Agents/Design) 또는 그룹.
- 게이트: 각 경로에서 active 상태 정확.

**Task 2.3 — agents-2026 빌드 검수 + 등록**
- `pnpm build`로 31섹션 첫 타입체크. 에러 수정.
- 허브/NavBar에 노출(2.1·2.2에서 처리됨).
- 게이트: build 통과, `/agents-2026` 도달 가능.

**Commit:** `feat: 클래스 허브 + deck-kit 추출 + agents-2026 등록`

---

## Phase 3: 새 덱 골격 + 슬라이드 패턴 확립

**Task 3.1 — `design/page.tsx` 골격**
- Create: `src/app/design/page.tsx` — agents-2026/page.tsx 패턴, `_deck-kit` 사용, sectionComponents 46개 import + labels.
- 길이 일치 assertion: `if (components.length !== labels.length) throw`.

**Task 3.2 — 섹션 컴포넌트 템플릿(패턴 확립, s00 Title)**
- Create: `src/app/design/sections/00-title.tsx`. 표준 패턴:

```tsx
"use client";
import { forwardRef } from "react";
import SectionShell from "../../_deck-kit/section-shell";
import { cn } from "@/lib/utils";
interface P { anim: (i: number) => string; index: number; }
const S = forwardRef<HTMLElement, P>(({ anim, index }, ref) => (
  <SectionShell ref={ref} index={index}>
    {/* 콘텐츠: design doc §6 s00 */}
  </SectionShell>
));
S.displayName = "S00Title";
export default S;
```
- 게이트: `/design` 첫 슬라이드 렌더 + 스크롤 동작.

**Commit:** `feat: AI Native Design 덱 골격 + 타이틀`

---

## Phase 4–9: 그룹별 슬라이드 (design doc §6 명세대로)

> 각 슬라이드 = Task. 동일 패턴(Task 3.2). 콘텐츠는 design doc §6 + 아래 소스. 시각 모티프(§8) 적용. 디자이너 중심 톤(D8).

- **Phase 4 · 그룹0** s00–s05 (오프닝/셋업). s03·s04는 Phase 0 검증 결과 사용.
- **Phase 5 · 그룹1** s06–s14. stateofaidesign 인용/통계(출처 표기) + 형운 관점 2장(s13·s14).
- **Phase 6 · 그룹2** s15–s22. DESIGN.md = Google Stitch(Phase 0 검증).
- **Phase 7 · 그룹3** s23–s27. 논지 D9(추출 vs 암묵지). nmwc get_token/get_component·Product.md §05 예시.
- **Phase 8 · 그룹4** s28–s34. 시각 다양화(Do/Don't·스니펫·함정·체크박스).
- **Phase 9 · 그룹5** s35–s45. STEP별 핸즈온 + 체크포인트 + MCP 복붙 골격.

**각 Phase 게이트:** 그룹 완성 후 `pnpm build` + `/design` 해당 구간 렌더 스크린샷 확인 → 그룹 단위 commit.

**병렬 전략:** 패턴 확립(Phase 3) 후 그룹별 슬라이드는 서브에이전트 병렬 생산 가능(일관성 위해 템플릿·design doc §6를 프롬프트에 명시). 단 결과 파일을 직접 검수.

---

## Phase 10: 최종 검증

**Task 10.1 — 빌드·lint**
- `pnpm build` + `pnpm lint` 클린.

**Task 10.2 — 시각 검증**
- `pnpm dev` 후 허브·`/deck`·`/agents-2026`·`/design`(전 그룹) 스크린샷. designer 관점(시각 전달·텍스트 과밀·일관성) 점검. 이슈 수정.

**Task 10.3 — 인용·정확성**
- stateofaidesign 통계/인용 원본 대조(출처 표기 확인). DESIGN.md 문구 1차 소스 일치.

**Commit + 최종:** `feat: AI Native Design 클래스 덱 46장 완성`

---

## 실행 순서 요약
Phase 0(검증) → 1(deck-kit) → 2(허브/nav) → 3(골격) → 4–9(슬라이드) → 10(검증). 각 Phase 게이트 통과 후 다음.
