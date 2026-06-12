# AI Native Design 클래스 — Design Doc (v2)

- **작성일**: 2026-06-12 · **개정**: adversarial 검증(advisor+architect+critic) 반영 v2
- **상태**: 승인·확정 → writing-plans → 구현
- **레포**: `ai-coding-deck` (HYUNGWOON/Project/_tools)

---

## 1. 목적
기존 AI 코딩 덱(`/deck`)과 별개로 **"AI Native Design"** 4시간 강의 덱을 추가한다. 주제: 전통 UIUX → AI Native Design 전환, Design System → **DESIGN.md**, Atomic 관점에서 **추출 가능한 것 vs 산문에 갇힌 암묵지**, 실무 DESIGN.md 구축, NMWC를 DESIGN.md+MCP로 만드는 **수강생 핸즈온 실습**. 환경: **Claude Desktop + Claude Code**.

## 2. 범위
**In**: ai-coding-deck에 허브 페이지(`/`) + 새 덱(`/design`, ~46장) + NavBar 갱신 + agents-2026 정식 등록.
**Out**: nmwc-brand-system 실제 파일 작성(슬라이드에서 lab 가이드로만). 새 덱 TTS/영상.

## 3. 확정 결정
| # | 결정 |
|---|---|
| D1 | 실습 산출물 = nmwc **Brand/BX/Product/UX** 4개 DESIGN.md (도메인 4분할) |
| D2 | **병렬본 신규**: 사람용 루트 md 보존, AI/MCP용 design/ 별도 |
| D3 | MCP = 교육용 데모(디자이너용 복붙 골격), agent-kit 대체 아님 |
| D4 | `/` = 허브, 기존 덱 `/deck` |
| D5 | 온보딩 = Claude Desktop + Claude Code. 설치는 **사전과제**, 현장은 확인+폴백 |
| D6 | 이번엔 **덱만** 빌드, nmwc는 시연/가이드 |
| **D7** | **그룹5 = 수강생 풀 핸즈온 lab** (STEP별 가이드+체크포인트) |
| **D8** | **청중 = 디자이너 중심** (MCP 코드는 개념·복붙, 결과 강조) |
| **D9** | **그룹3 논지 재서술**: "Components 공백"(틀림) → "토큰·레시피는 추출되나 조합·usage·rationale은 산문 암묵지 → AI-native 변환" |

## 4. 아키텍처
### 라우팅
```
/            → 허브 (신규)
/deck        → 기존 메인 덱 (변경 없음, 자체 라우팅)
/agents-2026 → 기존 덱 (untracked → 정식 등록, 등록 전 pnpm build 검수)
/design      → 신규 "AI Native Design" (이번 작업)
```
### 기술 결정 (architect 검증 반영)
- **deck-kit 추출**: `deck/hooks.ts`·`deck/section-shell.tsx`를 `src/app/_deck-kit/`로 추출(현재 deck·agents-2026 공유, design이 3번째 소비자 — untracked인 지금이 적기). import 재배선 후 3덱 일관.
- **NavBar `isHub`**: `isDeck` 로직 교체. "Deck" 링크 타겟 `/`→`/deck`, `isHub = pathname==="/"`. 클래스 링크는 드롭다운/그룹.
- **허브 metadata**: 허브를 **서버 컴포넌트 셸 + 클라이언트 카드**로 분리(자체 `<title>` 부여). 덱들은 `"use client"` 유지(타이틀 고정 수용).
- **print**: agents-2026의 인라인 print 블록을 deck-kit 공통화. **코드 카드 슬라이드(그룹4·5)는 `height:auto` 예외**(800px 초과 대응).
- **48섹션 배열**: 길이 일치 assertion + 라벨 유니크 체크. React key는 인덱스+슬러그.
- **Next 16**: 허브 서버컴포넌트화 시 `node_modules/next/dist/docs` 메타데이터/params 규약 확인(프로젝트 CLAUDE.md 경고).
- 디자인 토큰: 기존 `globals.css` oklch 다크 테마 재사용.

## 5. 타임라인 (4시간=240분, critic C1 반영)
> 설치는 **사전과제**. 현장은 확인+폴백.

| 시간 | 분 | 블록 |
|---|---|---|
| 0:00–0:10 | 10 | 그룹0 오프닝 + 셋업 확인 |
| 0:10–0:40 | 30 | 그룹1 전통 vs AI Native |
| 0:40–1:10 | 30 | 그룹2 Design System → DESIGN.md |
| 1:10–1:20 | 10 | ☕ 휴식 1 |
| 1:20–1:40 | 20 | 그룹3 Atomic: 추출 vs 암묵지 |
| 1:40–2:20 | 40 | 그룹4 실무 DESIGN.md 구축법 |
| 2:20–2:30 | 10 | ☕ 휴식 2 |
| 2:30–4:00 | 90 | 그룹5 핸즈온 lab (+ Q&A·마무리) |

## 6. 슬라이드 명세 (~46장)

### 그룹0 · 오프닝/셋업 — 6장 (10분 + 사전과제)
| # | 슬라이드 | 비고 |
|---|---|---|
| s00 | Title — "Design System에서 DESIGN.md로" | |
| s01 | 강의 목표 + 4시간 여정(타임라인) | 산출물: 내 DESIGN.md 4개 + MCP |
| s02 | 오늘의 도구: Claude Desktop + Claude Code (왜 — 디자이너가 코드로) | |
| s03 | 설치 ① Claude Desktop (사전과제, 단계+스샷) | ※1차 소스 검증 |
| s04 | 설치 ② Claude Code 연동 (사전과제, 단계) | ※1차 소스 검증 |
| s05 | 셋업 확인 + 실습 예제 준비 체크 | 폴백 안내 |

### 그룹1 · 전통 UIUX vs AI Native — 9장 (30분)
| # | 슬라이드 | 소스 |
|---|---|---|
| s06 | 변곡점: 2025 실험 → 2026 재설계 | stateofaidesign |
| s07 | 데이터로 보는 전환(91%·툴 3→7·코드 50%·Claude) | 통계 카운터 |
| s08 | 전통 워크플로 (Figma→목업→핸드오프→70%→루프) | Nick Inzucchi |
| s09 | AI Native 워크플로 (의도→직접 빌드→종착점) | "closer to the metal" |
| s10 | 전환축① Artifact → Spec ("Output isn't design") | Karri Saarinen |
| s11 | 전환축② Mockup → Working Prototype (43%) | |
| s12 | 전환축③ Designer → Builder + 빛과 그림자 | 2배 창의 vs craft atrophy |
| s13 | **형운 관점①**: 디자이너가 코드로 간다는 것 (현장 해석) | 고유 |
| s14 | **형운 관점②/브릿지**: NMWC가 이 길을 택한 이유 → "품질을 툴에 새겨넣기" | 고유 → 그룹2 |

### 그룹2 · Design System → DESIGN.md — 8장 (30분)
| # | 슬라이드 | 소스 |
|---|---|---|
| s15 | Design System이란 (전통) | |
| s16 | 전통 DS 형태 (Figma 라이브러리 + Storybook + 토큰) | |
| s17 | 문제: AI는 Figma를 "읽지" 못한다 | |
| s18 | **DESIGN.md = Google Stitch 표준** (2026-04 오픈소스) | ※1차 소스(stitch.withgoogle.com) |
| s19 | AGENTS.md(코딩) vs DESIGN.md(디자인) 쌍 | |
| s20 | 실제 사례: getdesign.md(73개)·awesome-design-md | 벤더 예시로 소개 |
| s21 | SSOT: 사람용 산문 vs AI용 구조화 (병렬본) | D2 |
| s22 | 정리 | |

### 그룹3 · Atomic: 추출 vs 암묵지 — 5장 (20분, 논지 재서술·반복 제거)
| # | 슬라이드 | 소스 |
|---|---|---|
| s23 | Atomic Design 5계층 복습 (디자이너 친숙) | |
| s24 | **기계 추출되는 것**: 토큰 + 개별 레시피 | nmwc `get_token`·`get_component` 실증 |
| s25 | **산문에 갇힌 암묵지**: 조합규칙·usage·rationale | Product.md §05 산문 예시 |
| s26 | 핵심 명제: 추출 가능한 것 vs 변환이 필요한 것 | |
| s27 | 그래서 변환한다: 산문 → AI-native DESIGN.md → 그룹4 | |

### 그룹4 · 실무 DESIGN.md 구축법 — 7장 (40분, 시각 다양화)
| # | 슬라이드 | 시각 |
|---|---|---|
| s28 | 좋은 DESIGN.md의 조건 | 원칙 카드 |
| s29 | 계층별 분리 전략 (Atoms→Pages를 md로) | 파일 트리 |
| s30 | Component Case 정의법 (변종·상태·경계) | 명세 예시 카드 |
| s31 | Usage Principles ("언제 쓰고 언제 마라") | Do/Don't 2열 |
| s32 | AI가 잘 읽는 형식 (구조·예시·반례) | md 스니펫 |
| s33 | 흔한 함정 (산문 복붙·과상세·모호) | 함정 카드 |
| s34 | 좋은 DESIGN.md 체크리스트 → 실습 예고 | 체크박스 |

### 그룹5 · 핸즈온 lab (수강생 직접) — 11장 (90분, D7)
> 강사 시연(nmwc 레퍼런스) → "이제 당신 차례"(예제/자기 프로젝트) → 체크포인트. 디자이너용 MCP 복붙 골격 제공.

| # | 슬라이드 | 비고 |
|---|---|---|
| s35 | 실습 개요 + 오늘 만들 것 + lab 규칙 | DESIGN.md 4개 + 미니 MCP |
| s36 | STEP 0 현황 진단 (디자인 자산 파악) + 체크포인트 | |
| s37 | STEP 1 brand.md (시각 아이덴티티) + 체크포인트 | 시연→실습 |
| s38 | STEP 2 bx.md (보이스·톤) + 체크포인트 | |
| s39 | STEP 3 product.md (Atomic 컴포넌트 — 핵심) + 체크포인트 | |
| s40 | STEP 4 ux.md (UX 원칙) + 체크포인트 | |
| s41 | STEP 5 미니 MCP (DESIGN.md 노출, 복붙 골격) + 체크포인트 | @modelcontextprotocol/sdk |
| s42 | STEP 6 Claude Desktop 연결 (.mcp 설정) + 체크포인트 | |
| s43 | STEP 7 검증 (AI가 내 DESIGN.md로 컴포넌트 생성) | 결과 확인 |
| s44 | 트러블슈팅 + 자주 막히는 곳 | |
| s45 | 마무리: 회고 + 다음 단계 + Q&A + Contact | |

**합계 46장**

## 7. 참고자료 / 저작권
- stateofaidesign(Designer Fund×Foundation Capital): 그룹1 통계·인용. **출처 표기 필수**(교육 인용). 로컬 미러 `_tools/state-of-ai-design-deck`(형운 한국어본)이 소스.
- DESIGN.md = Google Stitch 공식(stitch.withgoogle.com). getdesign.md/awesome-design-md(VoltAgent)는 **벤더 예시 라이브러리**로 소개(표준 근거 아님).
- nmwc-brand-system: 강사 시연 레퍼런스. 사내 자산 → 수강생은 **강사 제공 예제(또는 자기 프로젝트)**에 핸즈온.

## 8. 시각 전달 원칙
한 슬라이드 한 메시지 · 데이터는 카운터/바/대비 · 워크플로/계층은 다이어그램 · 인용은 pullquote(출처) · 코드/파일은 mono 카드 · 그룹 색 리듬 · 기존 deck 컴포넌트 어휘 재사용. 리스트 연속 3장 금지(progressive reveal).

## 9. 검증 전략
빌드(`pnpm build`)·lint 통과 → 렌더 시각 검증(스크린샷, designer 관점) → 인용·통계 원본 대조 → 설치/DESIGN.md 1차 소스 검증.

## 10. 리스크
- R1 설치 스텝·DESIGN.md 표현: **구현 시 1차 소스 검증**(기억 cutoff 2026-01 추정 금지).
- R2 46장 = 패턴 확립 후 그룹별 병렬, 일관성 유지.
- R3 핸즈온 예제 프로젝트 준비 = 강의 운영 항목(덱 범위 밖, 사전 준비 필요 — 덱엔 가이드만).
- R4 agents-2026 31섹션 첫 빌드/타입 검수.

## 11. 검증 이력 (2026-06-12 · advisor + architect + critic)
**architect (CRITICAL 0, HIGH 3)**: NavBar `isDeck` 시맨틱·print 비대칭·metadata 서버경계 → §4 반영. MEDIUM: deck-kit 추출·offset·배열 drift·agents-2026 검수·Next16 게이트 → §4 반영.
**critic (REJECT→반영 후 ACCEPT 경로)**: C1 시간붕괴→§5 타임라인. C2 수동시연→D7 핸즈온. H1 논지모순(1차 검증: `get_component` server.mjs:44 + Product.md §05 실재)→D9 재서술. M1 출처(Google Stitch 실재)·M3 청중(D8)·M4 반복(그룹3 5장)·M5 시각(§8). 약한 그룹 ①5②0③3 전부 재설계.

## 12. 다음 단계
→ `writing-plans`로 구현 계획(파일 순서·병렬 분담·검증 게이트). 1차 소스 검증(설치·DESIGN.md) 선행.
