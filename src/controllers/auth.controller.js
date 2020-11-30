const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const UserController = require("./user.controller");
const Jwt = require("../services/jwt.service");

/*
 * http: post
 * request: {email: string, password: string}
 * response: token
 */
login = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!user) {
        res.status(500).send({ message: "Email incorrecto" });
      } else {
        bcrypt.compare(
          req.body.password,
          user.password,
          (err, userStoraged) => {
            if (err) {
              res.status(404).send({ message: err });
            } else {
              if (!userStoraged) {
                res.status(500).send({ message: "Error en la peticion" });
              } else {
                UserController.updateLastConnection({
                  id: user.id,
                });
                res.status(200).send({ token: Jwt.ensureAuth(user) });
              }
            }
          }
        );
      }
    }
  });
};

/*
 * http: post
 * request: {email: string, password: string}
 * response: {message: string}
 */
register = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (user) {
        res.status(500).send({ message: "Email en uso" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.status(404).send({ message: err });
          } else {
            if (!hash) {
              res.status(500).send({ message: "Error en la peticion" });
            } else {
              let user = new User();
              user.email = req.body.email;
              user.password = hash;
              user.save((err, userStoraged) => {
                if (err) {
                  res.status(404).send({ message: err });
                } else {
                  if (!userStoraged) {
                    res.status(500).send({ message: "Error en la peticion" });
                  } else {
                    res.status(200).send({ message: "Usuario creado" });
                  }
                }
              });
            }
          }
        });
      }
    }
  });
};

module.exports = { login, register };
