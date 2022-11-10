# frontend

## 1. 프로젝트 환경

- Vite 템플릿(react/Vanilla JS)를 활용

### 1-1. 폴더 구조

```
📦frontend
 ┣ 📂public : Vite 기본
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂assets : Vite 기본
 ┃ ┃ ┗ 📜react.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Content.jsx : 루트 페이지 컴포넌트
 ┃ ┃ ┣ 📜Login.jsx : 로그인 페이지 컴포넌트
 ┃ ┃ ┣ 📜Navigation.jsx : 상단 GNB 컴포넌트
 ┃ ┃ ┣ 📜Protected.jsx : 로그인 필요한 페이지 컴포넌트
 ┃ ┃ ┗ 📜Register.jsx : 회원 가입 페이지 컴포넌트
 ┃ ┣ 📜App.jsx : App 컴포넌트
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx : 엔트리 포인트
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.js : Vite 기본
```

### 1-2. dependency

- react-router-dom
- 이외 Vite 기본 dependency

## 2. 프로젝트 사용법

- dependency 설치

```
npm i
```

- React 서버 실행

```
npm run dev
```

- root 페이지

http://127.0.0.1:5173

### 2-1. 회원 가입

**/register**

> email, password를 입력하여 가입한다. 가입 이후 login 페이지로 navigate 된다.

### 2-2. 로그인

**/login**

> 가입한 email, password를 사용하여 로그인한다. 로그인 이후 root 페이지로 navigate 된다.

### 2-3. 메인 페이지

**/**

> 로그인이 안되어 있다면 (access token이 없는 경우) 로그인 페이지로 navigate 된다.

### 2-4. protected 페이지

**/protected**

> 로그인이 안되어 있다면 `You need to login` 문구가 출력되고, 로그인되어 있다면 `This is protected data` 문구가 출력된다

## 3. TODO

### 3-1. silent authentication

> 새로고침 시 로컬 변수로 저장하는 access token이 사라지는 문제가 있다. 이를 해결하기 위해, 로컬 변수에 저장한 access token이 만료되거나 없어지면, 자동으로 refresh token을 사용해 accesst token을 발급 받는 처리가 필요하다. 자동으로 HTTP 요청을 보내서 access token을 획득하는 것이다.
