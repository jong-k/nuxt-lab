const { verify } = require("jsonwebtoken");

const isAuth = (req) => {
  const authorization = req.headers["authorization"];

  if (!authorization) throw new Error("You need to login");

  // 'Bearer adlka02k0ea2kddalfm020a'
  const token = authorization.split(" ")[1];
  // verify는 decoded payload를 반환
  const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
  return userId;
};

module.exports = {
  isAuth,
};
