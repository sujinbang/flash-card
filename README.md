# 🗂️ 심플 플래시카드 (Simple Flashcard App)

빅데이터분석기사 자격증 시험 대비를 위한 세련되고 직관적인 플래시카드 웹 애플리케이션입니다. 핵심 키워드와 개념을 과목별로 정리하여 모바일과 데스크탑 어디서든 편리하게 학습할 수 있습니다.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![PWA](https://img.shields.io/badge/PWA-Supported-orange?logo=pwa)

---

## ✨ 주요 기능

- **과목별 카테고리**: 빅데이터분석기사 1~4과목별로 정리된 핵심 카드 제공
- **직관적인 UI/UX**: 부드러운 애니메이션(Motion)과 다크 모드 기반의 세련된 디자인
- **PWA 지원**: 스마트폰 홈 화면에 앱처럼 설치하여 오프라인 느낌으로 사용 가능
- **반응형 디자인**: 데스크탑, 태블릿, 모바일 모든 기기에 최적화

## 🛠️ 기술 스택

### Frontend
- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animation**: Motion (Framer Motion)
- **PWA**: vite-plugin-pwa

### Backend (Serving)
- **Python**: Flask (정적 파일 서버 역할)
- **Vercel**: 프론트엔드 단독 배포 최적화

---

## 🚀 시작하기

### 1. 프론트엔드 개발 환경 설정
`templates` 폴더 내에 프론트엔드 소스코드가 위치해 있습니다.

```bash
cd templates
npm install
npm run dev
```
접속 주소: `http://localhost:3000`

### 2. Flask 서버 실행 (선택 사항)
빌드된 결과물을 Python Flask로 서빙하고 싶은 경우 사용합니다.

```bash
# 먼저 프론트엔드 빌드
cd templates
npm run build

# 루트 폴더에서 Flask 실행
cd ..
python app.py
```

---

## 📱 앱으로 설치하기 (PWA)

이 앱은 PWA를 지원하므로 브라우저 주소창 없이 **네이티브 앱처럼** 사용할 수 있습니다.

- **iOS (Safari)**: 공유 버튼 클릭 -> '홈 화면에 추가' 선택
- **Android (Chrome)**: 메뉴(⋮) 클릭 -> '앱 설치' 또는 '홈 화면에 추가' 선택

---

## 🌐 배포 (Deployment)

Vercel을 이용한 배포가 가장 간편합니다. 상세한 방법은 [walkthrough.md](./walkthrough.md) 파일을 참고하세요.

### 주요 설정 값 (Vercel)
- **Framework Preset**: Vite
- **Root Directory**: `templates`
- **Output Directory**: `dist`

---

## 📝 라이선스

이 프로젝트는 Apache-2.0 라이선스를 따릅니다.
