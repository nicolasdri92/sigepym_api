const jwt = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();
const KEY_JWT = process.env.KEY_JWT;

exports.ensureAuth = (user) => {
  const payload = {
    sub: user._id,
    email: user.email,
    password: user.password,
    iat: moment(),
    exp: moment().add(1, "d"),
  };
  return jwt.encode(payload, KEY_JWT);
};