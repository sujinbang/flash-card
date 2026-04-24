# Vercel 배포 가이드 🚀

Vercel은 React(Vite)와 같은 프론트엔드 애플리케이션을 가장 쉽고 빠르게 배포할 수 있는 플랫폼입니다. 

사전 작업으로 React Router의 새로고침 에러를 방지하기 위해 `templates` 폴더 내에 `vercel.json` 파일을 추가해 두었습니다. 이제 아래 순서에 따라 Vercel 배포를 진행해 보세요!

## 방법 1: GitHub 연동을 통한 배포 (가장 추천)

GitHub에 프로젝트를 올려두면, 코드가 변경될 때마다 Vercel이 **자동으로 배포(CI/CD)** 해줍니다.

### 1. GitHub에 프로젝트 올리기
프로젝트 전체(`Flash-card` 폴더)를 GitHub 저장소(Repository)에 커밋하고 푸시합니다.

### 2. Vercel에서 프로젝트 추가
1. [Vercel 공식 홈페이지](https://vercel.com/)에 접속 후 GitHub 계정으로 로그인합니다.
2. 대시보드 우측 상단의 **Add New...** 버튼을 클릭하고 **Project**를 선택합니다.
3. 방금 생성한 GitHub 저장소를 찾아 **Import** 버튼을 누릅니다.

### 3. Vercel 배포 설정 (중요 ⭐️)
Import 창에서 아래와 같이 설정을 변경해야 합니다.

- **Framework Preset**: 자동으로 `Vite`가 선택되는지 확인합니다.
- **Root Directory**: 우리 프로젝트는 `templates` 폴더 안에 프론트엔드 코드가 있습니다. `Edit` 버튼을 눌러 **`templates`** 폴더를 선택합니다.
- **Build and Output Settings**: (기본값 유지) 
  - Build Command: `vite build`
  - Output Directory: `dist`

### 4. 배포 (Deploy)
모든 설정이 완료되면 **Deploy** 버튼을 클릭합니다. 1~2분 정도 기다리면 배포가 완료되고, Vercel에서 제공하는 무료 도메인(ex: `your-project.vercel.app`)을 통해 접속할 수 있습니다! 🎉

---

## 방법 2: Vercel CLI를 이용한 수동 배포

GitHub을 사용하지 않고 터미널(명령 프롬프트)에서 바로 배포하고 싶으신 경우 사용합니다.

1. **Vercel CLI 설치**: 터미널에서 아래 명령어를 실행합니다.
   ```bash
   npm install -g vercel
   ```
2. **로그인**: 터미널에서 Vercel에 로그인합니다.
   ```bash
   vercel login
   ```
3. **배포 실행**: `templates` 폴더로 이동한 뒤 배포를 진행합니다.
   ```bash
   cd templates
   vercel
   ```
   - 프롬프트에서 나오는 질문들(프로젝트 이름, 경로 등)에 엔터(기본값)를 눌러 대답합니다.

---

## 📱 스마트폰에 "앱"으로 설치하는 방법 (PWA)

### PWA 구현 작업 (PWA Implementation Tasks)
[x] Vite PWA 플러그인 설치
[x] vite.config.ts에 PWA 설정 및 Manifest 추가
[x] 앱 아이콘(192x192, 512x512) 생성 및 public 폴더에 배치
[x] index.html에 테마 컬러 및 PWA 메타 태그 추가
[x] 배포 가이드 업데이트 (PWA 설치 방법 안내)

Vercel 등에 배포가 완료된 후, 해당 웹사이트 주소를 스마트폰으로 접속하면 앱을 설치할 수 있습니다.

### 🍎 아이폰 (iOS - Safari 브라우저)
1. Safari 브라우저로 배포된 Vercel 주소에 접속합니다.
2. 화면 하단 중앙의 **[공유 버튼(네모 안에서 화살표 위로 향하는 아이콘)]**을 누릅니다.
3. 메뉴를 아래로 스크롤하여 **[홈 화면에 추가 (Add to Home Screen)]**를 선택합니다.
4. 우측 상단의 **[추가]** 버튼을 누르면 바탕화면에 앱 아이콘이 생성됩니다!

### 🤖 안드로이드 (Android - Chrome 브라우저)
1. Chrome 브라우저로 배포된 Vercel 주소에 접속합니다.
2. 화면 하단에 **"홈 화면에 Flash Card App 추가"** 팝업이 뜨면 클릭합니다.
   *(만약 팝업이 안 뜬다면, 우측 상단의 **[⋮ (메뉴)]** 버튼을 누르고 **[홈 화면에 추가]** 혹은 **[앱 설치]**를 선택합니다.)*
3. **[설치]**를 누르면 바탕화면에 앱 아이콘이 생성됩니다!

> [!TIP]
> 이제 바탕화면의 아이콘을 눌러 실행하시면, 브라우저의 주소창이나 하단 바 없이 **진짜 네이티브 앱처럼 전체 화면으로** 부드럽게 플래시카드 앱을 사용하실 수 있습니다!
