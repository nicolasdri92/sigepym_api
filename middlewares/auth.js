const jwt = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();
const KEY_JWT = process.env.KEY_JWT;

exports.ensureAuth = (req, res, next) => {
  console.log(KEY_JWT);
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: "La petición no tiene la cabecera de autenticación",
    });
  }
  const token = req.headers.authorization.replace(/['"]+/g, "");
  try {
    const payload = jwt.decode(token, KEY_JWT);
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
        message: "Token expirado.",
      });
    }
    req.user = payload;
  } catch (ex) {
    return res.status(404).send({
      message: "Token inválido.",
    });
  }
  next();
};
