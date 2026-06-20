<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Coding Deck

## 프로젝트 개요
AI 코딩 강의 슬라이드 덱. Remotion 플레이어로 영상 재생을 지원하는 프레젠테이션 웹앱.

## 명령어

```bash
pnpm dev       # 개발 서버 (로컬 검증은 이걸로)
pnpm lint      # ESLint (로컬 검증은 이걸로)
pnpm build     # 프로덕션 빌드 — ⚠️ 로컬에서 돌리지 말 것 (아래 참조)
```

## 빌드·배포 정책 (MANDATORY)

> 2026-06-20 결정. iCloud 크로스-디바이스 동기화가 working tree·git 객체를 손상시켜 **로컬 `pnpm build`(프로덕션 빌드)가 멈추거나 깨진다.** iCloud 제외는 사용자 의사로 하지 않기로 했으므로, 빌드 전략으로 우회한다.

- **로컬 프로덕션 빌드(`pnpm build`) 금지.** 멈춘다. 시간 낭비하지 말 것.
- **로컬 검증 = `pnpm dev`(동작 확인) + `pnpm lint`(정적 검증)** 으로 충분.
- **프로덕션 빌드·배포는 Vercel에 위임.** `git push origin main` → Vercel이 자동으로 프로덕션 빌드+배포. **검증은 배포된 프로덕션 URL에서 한다.**
- 꼭 로컬 프로덕션 빌드가 필요하면 **비-iCloud 사본에서 on-demand** (예: `/tmp`에 사본 → 빌드). 정상 사본 빌드는 ~7초.
- Vercel 링크: project `ai-coding-deck` (`hyungwoons-projects`). remote `hyungwoon/ai-coding-deck`.

### git도 같은 함정 — `git add -A`/`git status` 금지

- `git add -A`·`git status`는 working tree **전체를 stat**하다 iCloud로 evict된 대용량 파일(`video/`·`public/audio`)을 materialize하려고 **무한 hang**한다(인덱스 lock이 남아 다음 git도 줄줄이 막힘).
- **반드시 변경 파일만 명시적으로**: `git add -- <경로...>` 후 `git commit -F msg -- <같은 경로...>` (pathspec 커밋 = 전체 walk 회피). 즉시 끝난다.
- 상태 확인은 working tree를 안 걷는 인덱스 전용 명령으로: `git diff --cached --name-only`.
- hang이 나면 해당 git 프로세스 kill + `rm -f .git/index.lock` 후 위 방식으로 재시도.
- push는 working tree를 안 걷으므로 정상.

## 스택
- Next.js 16, React 19, TypeScript 5
- Tailwind CSS 4, Remotion (비디오 플레이어)
- pnpm workspace

## 구조
- `src/app/` — Next.js App Router 페이지
- `src/components/` — 공유 컴포넌트
- `src/lib/` — 유틸리티
- `lecture/` — 강의 콘텐츠
- `video/` — 영상 파일

## 컨벤션
- Tailwind 유틸리티 클래스 사용 (인라인 스타일 금지)
- 컴포넌트 파일은 200줄 이하
- `clsx` + `tailwind-merge`로 조건부 클래스 처리

## 압축(Compaction) 시 보존 지시
컨텍스트 압축 시 보존할 정보: 현재 작업 중인 슬라이드/페이지, 수정된 컴포넌트 목록, Remotion 관련 설정 상태.
