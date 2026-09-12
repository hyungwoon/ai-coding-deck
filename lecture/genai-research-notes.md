# 리서치 노트 — /genai 덱 근거 링크 (2026-09-12)

> 슬라이드에 올린 사실·수치의 출처. 강의 전 재확인용. [2차] = 블로그·매체 등 2차 출처 → 공식 페이지에서 재확인 권장.

## 트렌드 (슬라이드 03·04·05·12)
- 인공지능기본법 2026-01-22 시행, 제31조 생성형 AI 결과물 표시(의무 주체 = AI 사업자): https://www.law.go.kr/lsInfoP.do?lsiSeq=282791 · 정책브리핑 https://www.korea.kr/news/policyNewsView.do?newsId=148958380
- YouTube AI 자동 라벨(2026-05): https://blog.youtube/news-and-events/improving-ai-labels-viewers-creators · 합성 콘텐츠 공개 정책 https://support.google.com/youtube/answer/14328491?hl=ko
- Instagram 미표시 AI 계정 도달 제한(2026-08-31): https://techcrunch.com/2026/08/31/instagram-puts-new-limits-on-undisclosed-ai-profiles/ · Meta 라벨 정책 https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/
- C2PA·SynthID(OpenAI C2PA 합류 2026-05): https://c2paviewer.com/articles/openai-google-c2pa-synthid-2026 [2차]
- Nano Banana Pro 참조 14장·5인: https://runwayml.com/product/models/nano-banana-pro · https://prompting.systems/blog/nano-banana-pro-character-consistency-guide [2차]
- Veo 3.1 네이티브 오디오·8초: https://www.versely.studio/blog/best-ai-video-generation-models-2026 [2차]
- Kling 3.0 15초·Omni 립싱크: https://tech-insider.org/best-ai-video-generator-2026 [2차] (최대 길이 출처 불일치)
- Seedance 2.5 30초 단일 패스: https://pixo.video/blog/best-ai-video-generators [2차]
- FLUX.2 참조 10장·헥스: https://rangy.ai/blog/ai-image-generators-2026-complete-guide [2차]
- 멀티모델 워크플로우가 표준: https://gendia.ai/blog/best-ai-image-generation-models-2026 [2차]

## 원리 (슬라이드 06·07·08)
- 다음 토큰 예측과 환각: https://atlan.com/know/llm-hallucinations/ · RAG 접지: https://mem0.ai/blog/reducing-hallucinations-llms-with-grounded-memory
- 레이턴트 디퓨전·CLIP 조건화: https://eugeneyan.com/writing/text-to-image · https://goyalpramod.github.io/blogs/demysitifying_diffusion_models
- 자기회귀 이미지 vs 디퓨전(글자 정확도): https://terezatizkova.substack.com/p/how-the-new-openai-image-generation · https://nationalcentreforai.jiscinvolve.org/wp/2025/05/23/what-is-autoregression-based-image-generation-and-how-will-it-impact-document-fraud-2
- DiT·시공간 패치: https://openai.com/index/video-generation-models-as-world-simulators · https://lilianweng.github.io/posts/2024-04-12-diffusion-video
- 정체성 드리프트: https://learnopencv.com/video-generation-models

## 힉스필드 분석 (슬라이드 10·11·13·14·15)
- 정본: 강사 로컬 보관(분석 원본 `insights.md`·`stats.json`; 경로는 강사 메모리에) — 공개 출품작 크롤(2026-08-28), 분석 2026-08-29.
- 슬라이드 수치 원본: insights.md(코호트 대비·층화·안티패턴), stats.json(4코호트 × 29특징).

## 절주 도메인 (슬라이드 17·18·19·20·킷)
- 절주온: https://www.khepi.or.kr/alcoholstop · 통계: https://www.khepi.or.kr/board?menuId=MENU01152
- KHEPI 저위험음주 가이드라인(2013) — 리플렛 표지 원문 확인: 「술자리는 주 1회 이하」「남자 5잔 이내」「여자 2.5잔 이내」(소주). 순수알코올 남 40g·여 20g은 본문(2차 출처 hidoc·서울대 국민건강지식센터로 교차 확인): https://www.khepi.or.kr/kps/publish/view?menuId=MENU00891&page_no=B2017004&board_idx=7640
- KNHANES 2024 잠정치(고위험음주율 13.6%, 월간폭음률 37.8%·남 48.3·여 27.1): https://blog.naver.com/koreadca/224027336268 · 원자료 https://knhanes.kdca.go.kr/knhanes/main.do
- WHO 2023 "No level of alcohol consumption is safe": https://www.who.int/europe/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health
- 국립암센터 IARC 1군·암 3.6%: https://www.cancer.go.kr/lay1/S1T198C265/sublink.do
- 건보공단 음주 사회적 비용 15조 806억(2019 기준): https://www.khan.co.kr/article/202205160812001 [2차]
- 국민건강증진법 제8조의2·시행령 제10조: https://www.law.go.kr/lsInfoP.do?lsiSeq=285763 · 2021 개정 보도자료: https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&tag=&act=view&list_no=366224&cg_code=
- 2023 위반 주류광고 2,547건 중 인스타 60%: https://blog.naver.com/nisoon/223622293697 [2차, 의원실]
- 과음 경고문구 현행 3종(보건복지부 고시 「과음 경고문구 표기내용」, 2021-01-05 타법개정, 3종 각각 임신 중 음주 문장 포함): 고시 원문 https://mohw.go.kr/board.es?act=view&bid=0026&list_no=338370&mid=a10409020000&tag= · 정책브리핑 https://www.korea.kr/briefing/policyBriefingView.do?newsId=148818764
- 경고문구 개정 2026-11-09 시행 예정: https://www.kyeonggi.com/article/20260510580279 [2차]
- 미디어 음주장면 가이드라인 2017(10항목)·2023(12항목): https://www.khan.co.kr/article/201711151203001 · https://www.wikitree.co.kr/articles/906216 [2차]
- 캠페인 브랜드 "무음모드ON"(2025~): https://www.instagram.com/no_alcohol_mode_on
- 특허법원 2026-06-11 허위 판례 8건: https://www.lawtimes.co.kr/news/articleView.html?idxno=226218
- AI 건강정보 "가짜 유창함·인용 흉내" 리뷰: https://pmc.ncbi.nlm.nih.gov/articles/PMC12924558
- 2024 공익광고제 대상작 AI 논란: https://www.seoul.co.kr/news/society/2024/02/29/20240229002002
- 개인정보위 생성형 AI 안내서(2025.8) · 디플정위 초거대 AI 가이드라인 2.0(2025.4): https://www.digitalmarket.kr/web/board/BD_board.view.do?domainCd=2&bbsCd=1030&bbscttSeq=20251001172836143 · https://www.msap.ai/ax/public-large-ai-guideline-2025 [2차]
