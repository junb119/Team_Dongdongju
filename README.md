# 미래에셋 금융그룹 리뉴얼 홈페이지

## 📌 프로젝트 개요

기존의 금융그룹 웹사이트를 리뉴얼하여 보다 현대적이고 인터랙티브한 사용자 경험을 제공하는 프로젝트입니다. fullPage 기반의 섹션 전환 구조와 스크롤 애니메이션을 적극 활용하여 시각적인 몰입감을 높이고, 사용자 친화적인 UX를 구현하였습니다.

- FullPage 구조 기반 섹션 전환
- scrollTop, offset 기반 정밀 인터랙션
- JSON 기반 동적 콘텐츠 로딩
- 브랜드 몰입형 메인 시퀀스 애니메이션
---

## 🔗 링크

- [🖼️ Live Demo 보기](https://junb119.github.io/Team_Dongdongju/)

---

## ✅ 주요 특징

- 금융 업종 특성에 맞춘 안정감 있는 디자인
- 몰입도 높은 스크롤 기반 전환 인터랙션
- 퍼포먼스를 고려한 비주얼 중심 퍼블리싱

---

## 🛠 기술 스택

### Frontend
- HTML5 / Semantic Markup
- CSS3
- JavaScript (ES6+)
- jQuery

### 데이터 / 상호작용
- JSON 비동기 데이터 로딩
- jQuery animate, scrollTop 기반 인터랙션
- 스크롤 스파이(현재 섹션 메뉴 활성화)

### 도구
- Visual Studio Code
- Git
- Figma (UI 설계)

---

## 📄 주요 기능 요약

| 기능 구분           | 설명 | 사용 기술 |
|---------------------|------|-----------|
| 메인 애니메이션     | 최초 방문자 대상 시네마틱 브랜딩 애니메이션 | 쿠키 분기, 지연 처리, 스크롤 비활성화 |
| 수치 애니메이션     | 스크롤 진입 시 숫자 증가 애니메이션 | data-numeric + scrollTop + flag |
| 매출액 섹션         | 스크롤에 따라 배경 확대 및 텍스트 등장 | clip-path, scroll class toggle |
| 뉴스/광고 전환      | 세로 스크롤을 가로 슬라이드처럼 구현 | translateX + fetch + toggle |
| 부드러운 스크롤     | 감속/가속 보간 스크롤 | requestAnimationFrame, scrollTo |
| 글로벌 페이지       | fullPage.js 섹션 전환 + 배경 확대 | afterLoad/onLeave + scale() |
| 뉴스/광고 리스트    | JSON 기반 비동기 로딩 + 필터 + 뷰 전환 | fetch, pagination, list toggle |
| CI 테마 전환        | 컬러 선택에 따라 섹션/텍스트/키워드 전환 | sticky layout, CSS 전환 처리 |
| 공통 헤더           | 스크롤 방향/배경에 따라 동적 전환 | scrollTop, add/removeClass |

---

## 🧩 문제 해결 사례

1. **스크롤 이벤트 중복 트리거**  
   → 실행 플래그 설정으로 중복 차단 및 성능 안정화

2. **수치 애니메이션 타이밍 불균형**  
   → 동일 duration 사용에 따른 속도 불균형 인지 및 개선 방향 설정

3. **clip-path 값 비정상 확장**  
   → 스크롤에 따라 과도한 이미지 확장 방지 필요, clamp 적용 예정

4. **비동기 데이터 로딩 시 깜빡임 현상**  
   → placeholder 처리 및 로딩 상태 추가 계획

5. **반응형 대응 부족**  
   → 일부 섹션만 반응형 적용, 모바일 UX 리팩토링 예정

---

## 📚 프로젝트를 통해 얻은 것

- 스크롤 트리거 기반 정밀 인터랙션 설계 경험
- 사용자 흐름에 따라 콘텐츠를 단계적으로 노출하는 시나리오 구성
- 정적 구조가 아닌 데이터 중심 콘텐츠 구성 방식 체득
- 실무형 퍼블리싱 / 인터랙션 문제 상황 직접 해결 경험
- 시각적 효과와 UX의 균형을 고려한 화면 구성 능력 강화

---

## 🗺️ 주요 페이지별 상세 기능

### 메인 페이지
- 브랜드 시네마틱 애니메이션
![브랜드 시네마틱 애니메이션](readmeImg/mirea_intro.gif)

- 수치 증가 애니메이션
![수치 증가 애니메이션](readmeImg/mirea_numeric.gif)

- 스크롤 기반 배경/텍스트 전환
![스크롤 기반 배경/텍스트 전환](readmeImg/mirea_sales.gif)

- 뉴스/광고 가로 슬라이드
![뉴스/광고 가로 슬라이드](readmeImg/mirea_notice.gif)

- 감속 기반 커스텀 스크롤

### 글로벌 미래에셋
- 풀페이지 구조 구성
- 배경 확대 + 헤더 동적 노출
![글로벌 미래에셋](readmeImg/mirea_global.gif)

### 뉴스 / 광고
- JSON 데이터 기반 비동기 로딩
- 뷰 전환 / 대표 미디어 동적 교체
![뉴스](readmeImg/mirea_news.gif)
![광고](readmeImg/mirea_adv.gif)

### CI 페이지
- 컬러 테마 선택에 따른 스타일 전환
- sticky 기반 단계적 콘텐츠 노출
![ci](readmeImg/mirea_ci.gif)
---

## 🛠 공통 기능: Header

- 외부 HTML load로 삽입
- scrollTop 비교로 show/hide 처리
- hover 시 서브 메뉴 높이 애니메이션
- 배경/스크롤 상황에 따른 로고/텍스트 색상 전환
- 모바일 대응 슬라이드 메뉴

---

> 본 프로젝트는 단순한 정적 사이트가 아닌, 실제 서비스와 유사한 사용자 흐름을 기반으로 설계되었으며,
> UI 퍼블리싱, 인터랙션, 데이터 구조, 성능, UX까지 고려한 종합적인 웹 프론트엔드 개발 경험을 담고 있습니다.
