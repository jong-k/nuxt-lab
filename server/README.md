# Server
> 인증 인가 기능 지원을 위해 만든 Express server

## 1. 폴더 구조
```
📦server
 ┣ 📂src
 ┃ ┣ 📜fakeDB.js : DB 역할을 하는 dummy data
 ┃ ┣ 📜index.js : api
 ┃ ┣ 📜isAuth.js : req.headers의 authorization을 검증
 ┃ ┗ 📜token.js : refresh token과 access token을 발급, 전송
 ┣ 📜.env : 포트 번호, access token 및 refresh token 암호 를 가짐
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

## 2. dependency

- bcryptjs : hash 함수 및 암호화, 복호화 기능
- cookie-parser : cookie path 설정
- cors : cors 에러 방지
- express
- jsonwebtoken : token 생성 기능
- dotenv : .env 파일 조작
- prettier
- nodemon

## 3. 사용법
### 3.1. 서버 켜기
1)dependency 설치
```
npm i
```

2).env 파일 확인 및 port number

3)Express 서버 실행
```
npm start
```
4)root 페이지

http://localhost:포트번호 (주로 4000 사용)

### 3.2. 회원 가입

> email이 기존 DB에 있는지 검사하고 password를 암호화하여 DB에 저장

**POST /register**

- req.body

```json
{
  "email": "test102@examples.com",
  "password": 12345678
}
```

- 정상 응답

```json
{
  "message": "User Created"
}
```

### 3.3. 로그인

> DB에서 email을 찾아 입력받은 password와 DB의 암호화된 password를 비교하고, 맞으면 refresh token과 access token을 발급한다. refresh token은 DB에 저장 후 token cookie로 반환하고, access token은 response로 반환한다. 이후, access token을 authorization header

**POST /login**

- req.body

```json
{
  "email": "test102@examples.com",
  "password": 12345678
}
```

- 정상 응답

```json
{
  "accessToken": "XXXX.YYYY.ZZZZ",
  "email": "test102@examples.com"
}
```

### 3.4. 로그아웃

> authorization header에 access token이 포함된 요청을 받고, refresh token을 저장했던 cookie path의 cookie를 비운다.

**POST /logout**

- req.headers

```JSON
{
  "authorization": "Bearer XXXX.YYYY.ZZZZ"
}
```

- 정상 응답

```JSON
{
    "message": "Logged out"
}
```

### 3.5. protected route 접근

> req.headers.authorization 에서 access token을 추출하고 환경 변수의 access token 개인 키와 비교한다. 맞으면 protected data를 응답한다

**POST /protected**

- req.headers

```JSON
{
  "authorization": "Bearer XXXX.YYYY.ZZZZ"
}
```

- 정상 응답

```json
{
  "data": "This is protected data."
}
```

### 3.6. refresh token으로 새로운 access token 발급받기

> cookie 에서 refresh token을 추출하고 환경 변수의 refresh token 키와 검증한다. 또한 payload의 id가 DB의 유저 id가 맞는지, refresh token도 DB와 동일한지 확인한다. 맞으면, 새 access token과 refresh token을 발급하고 refresh token은 DB에 저장한다

**POST /refresh_token**

- req.cookies

```
refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2ODA0NTAzNywiZXhwIjoxNjY4NjQ5ODM3fQ.xR4ZmHKIJwu03GZuAzRrfnU6s2R2E_OZQL_8nWDO6Hw; Path=/refresh_token; HttpOnly;
```

- 정상 응답

```json
{
  "accessToken": "XXXX.YYYY.ZZZZ"
}
```
