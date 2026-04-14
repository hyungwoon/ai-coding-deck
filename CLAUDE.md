<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Coding Deck

## 프로젝트 개요
AI 코딩 강의 슬라이드 덱. Remotion 플레이어로 영상 재생을 지원하는 프레젠테이션 웹앱.

## 명령어

```bash
pnpm dev       # 개발 서버
pnpm build     # 프로덕션 빌드
pnpm lint      # ESLint
```

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
