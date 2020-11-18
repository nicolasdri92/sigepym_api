const bcrypt = require("bcrypt");
const USER = require("../models/user.model");
const USERCONTROLLER = require("./user.controller");
const JWT = require("../services/jwt.service");

login = async (req, res) => {
  USER.findOne({ email: req.body.email }, (err, user) => {
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
                USERCONTROLLER.updateLastConnection({
                  id: user.id,
                });
                res.status(200).send({ token: JWT.ensureAuth(user) });
              }
            }
          }
        );
      }
    }
  });
};

register = async (req, res) => {
  await USER.findOne({ email: req.body.email }, (err, user) => {
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
              let user = new USER();
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
