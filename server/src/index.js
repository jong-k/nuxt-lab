require('dotenv/config');
const express = require('express');
// refresh token이 cookie에 담기기 때문에 cookie 핸들링을 위해
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { verify } = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');

const { fakeDB } = require('./fakeDB');
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('./token');
const { isAuth } = require('./isAuth');

// 1. 유저 등록
// 2. 로그인
// 3. 로그아웃
// 4. 라우트 생성
// 5. refresh token으로 새로운 access token 발급받기

const server = express();

// 쿠키 핸들링을 위한 express middleware 사용
server.use(cookieParser());
server.use(
  cors({
    // frontend uri 허용하여 통신 가능하게 함 (CORS 에러 방지)
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  })
);
// body data를 읽기 위해
server.use(express.json()); // JSON 인코딩된 body
server.use(express.urlencoded({ extended: true })); // URL-encoded body

// 1. 유저 등록
server.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1-1. 유저가 있는지 먼저 확인한다
    // 유저 등록하는데, DB에 이미 이메일이 있으면 에러 발생
    const user = fakeDB.find((user) => user.email === email);
    if (user) throw Error('User already exists');

    // 1-2. 없는 유저이면 비밀번호를 암호화
    const hashedPassword = await hash(password, 10);

    // 1-3. 유저를 database에 넣는다
    fakeDB.push({
      id: fakeDB.length,
      email,
      password: hashedPassword,
    });
    res.send({ message: 'User Created' });
    console.log(fakeDB);
  } catch (err) {
    res.send({
      error: `${err.message}`,
    });
  }
});

// 2. 로그인
server.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // 2-1. DB에서 유저 찾기
    // 유저 없으면 에러 발생
    const user = fakeDB.find((user) => user.email === email);
    if (!user) throw new Error('User does not exist');

    // 2-2. 로그인할 때 입력받은 암호화된 비밀번호와 DB의 암호화된 비밀번호를 비교
    const valid = await compare(password, user.password);
    if (!valid) throw new Error('Password not correct');

    // 2-3. refresh token과 access token 생성
    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    // 2-4. refresh token을 DB에 저장
    user.refreshToken = refreshToken;
    console.log(fakeDB);

    // 2-5. token 반환
    // refresh token : cookie로 반환
    // access token : response로 반환
    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, req, accessToken);
  } catch (err) {
    res.send({
      error: `${err.message}`,
    });
  }
});

// 3. 로그아웃
// 일반 req와 구분하기 위해 _req(로그인된 상태) 사용
server.post('/logout', (_req, res) => {
  res.clearCookie('refreshToken', { path: '/refresh_token' });
  return res.send({
    message: 'Logged out',
  });
});

// 4. 라우트 생성
server.post('/protected', async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      res.send({
        data: 'This is protected data.',
      });
    }
  } catch (err) {
    res.send({
      error: `${err.message}`,
    });
  }
});

// 5. refresh token으로 access token 얻기
server.post('/refresh_token', (req, res) => {
  const token = req.cookies.refreshToken;

  // 만약 req에 refresh token이 없으면 중단
  if (!token) return res.send({ accessToken: '' });

  // refresh token이 있으면 검증
  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.send({ accessToken: '' });
  }
  // refresh token이 유효하면 유저가 존재하는지 확인
  const user = fakeDB.find((user) => user.id === payload.userId);
  if (!user) return res.send({ accessToken: '' });

  // 유저가 존재하면 refresh token을 갖고 있는지 확인
  if (user.refreshToken !== token) return res.send({ accessToken: '' });

  // refresh token이 존재하면, 새 token 들을 생성하고 전송
  const accessToken = createAccessToken(user.id);
  const refreshToken = createRefreshToken(user.id);

  // 새로운 refresh token은 DB에 저장
  user.refreshToken = refreshToken;
  sendRefreshToken(res, refreshToken);
  return res.send({ accessToken });
});

server.listen(process.env.PORT, () =>
  console.log(`server listening on port ${process.env.PORT}`)
);
