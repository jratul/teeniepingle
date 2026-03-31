# 티니핑글

<img src="./public/images/pings/hachu.webp" width="120" />

당신의 티니핑을 찾아보세요!  
https://tnpg.vercel.app/

## 개요

캐치! 티니핑 시리즈의 캐릭터(티니핑)를 시즌·타입별로 필터링하고 검색할 수 있는 캐릭터 도감 앱입니다.  
각 캐릭터의 이름, 시즌, 분류, 성별, 소품, 마법, 좋아하는 것 등 상세 정보를 확인할 수 있습니다.

## 기술 스택

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/emotion-C865B9?style=for-the-badge&logo=emotion&logoColor=white" />
<img src="https://img.shields.io/badge/Zustand-433e38?style=for-the-badge" />
<img src="https://img.shields.io/badge/Framer Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

| 항목 | 선택 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Emotion (`@emotion/styled`) |
| Animation | Framer Motion 11 |
| 상태 관리 | Zustand 5 |
| 배포 | Vercel |

## 기술적 포인트

### Lighthouse 성능 최적화

- **LCP 개선**: 첫 번째 시즌의 상위 5개 이미지에 `priority` 적용 및 Framer Motion의 `initial={{ opacity: 0 }}` 애니메이션 제거 — 뷰포트 진입 즉시 렌더링
- **이미지 최적화**: `next/image`의 `sizes` 속성으로 뷰포트 크기에 맞는 이미지 요청 (`(max-width: 768px) 30vw, 150px`)
- **폰트 최적화**: `next/font/local`로 Pretendard 폰트를 빌드 타임에 self-hosting, `display: "optional"`로 CLS 완전 방지
- **정적 생성**: 전체 데이터를 `constant.ts`에 정적으로 관리 — API 요청 없이 빌드 타임 번들에 포함

### 상태 관리

- **Zustand**로 시즌/타입 필터 상태 전역 관리
- 필터 변경 시 `useEffect`로 캐릭터 목록을 클라이언트 사이드 필터링
- 필터와 검색이 조합되어 동작 (대소문자 구분 없는 이름 검색)

### React 아키텍처

- **Portal 패턴**: 캐릭터 상세 다이얼로그를 `createPortal`로 `#portal` 루트에 마운트 — z-index 스택 충돌 방지
- **ESC 키 / 브라우저 뒤로가기 대응**: 다이얼로그 오픈 시 `history.pushState`, `popstate` 이벤트와 `keydown` 이벤트로 자연스러운 닫기 처리
- **`"use client"` 경계 명시**: 훅·DOM API·클라이언트 전용 라이브러리를 사용하는 컴포넌트에 명시적으로 선언

### 접근성 (a11y)

- 클릭 가능한 캐릭터 카드에 `role="button"`, `tabIndex`, 키보드(Enter/Space) 지원
- 다이얼로그에 `role="dialog"`, `aria-modal`, `aria-label` 적용
- 체크박스에 `role="checkbox"`, `aria-checked`, 키보드 지원
- `*:focus-visible`로 키보드 포커스 인디케이터 유지

## 프로젝트 구조

```
src/app/
├── constant.ts          # 캐릭터 데이터 및 타입 정의
├── store/
│   └── filterStore.ts   # Zustand 필터 스토어
├── layout.tsx           # 루트 레이아웃 (폰트, 메타데이터)
├── page.tsx             # 메인 페이지 (검색 + 필터 + 목록)
├── Filter.tsx           # 필터 토글 버튼
├── FilterContent.tsx    # 필터 옵션 (시즌/타입)
├── SeasonFrame.tsx      # 시즌별 캐릭터 그리드
├── PingItem.tsx         # 캐릭터 카드
├── PingDialog.tsx       # 캐릭터 상세 다이얼로그
├── PingTable.tsx        # 캐릭터 정보 테이블
├── CheckBox.tsx         # 커스텀 체크박스
├── Flex.tsx             # Flex 레이아웃 유틸리티
└── Portal.tsx           # React Portal
```

## 시작하기

```bash
yarn install
yarn dev
```
