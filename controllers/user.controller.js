const bcrypt = require("bcrypt");
const moment = require("moment");
const USER = require("../models/user.model");

listAll = async (req, res) => {
  await USER.find((err, user) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!user) {
        res.status(500).send();
      } else {
        res.status(200).send({ user: user });
      }
    }
  });
};

getById = async (req, res) => {
  await USER.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!user) {
        res.status(500).send();
      } else {
        res.status(200).send({ user: user });
      }
    }
  });
};

updateUser = async (req, res) => {
  await USER.findOneAndUpdate(
    { _id: req.params.id },
    { email: req.body.email, password: req.body.password },
    (err, userUpdated) => {
      if (err) {
        res.status(404).send({ message: err });
      } else {
        if (!userUpdated) {
          res.status(500).send({ message: "Error en la peticion" });
        } else {
          updateLastConnection({ id: user.id });
          res.status(200).send({ message: "Usuario actualizado" });
        }
      }
    }
  );
};

deleteUser = async (req, res) => {
  await USER.findOneAndDelete({ _id: req.params.id }, (err, userDeleted) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!userDeleted) {
        res.status(500).send({ message: "Error en la peticion" });
      } else {
        res.status(200).send();
      }
    }
  });
};

updateLastConnection = async (req) => {
  await USER.findOneAndUpdate(
    { _id: req.id },
    { lastConnection: moment() },
  );
};

module.exports = {
  listAll,
  getById,
  updateUser,
  deleteUser,
  updateLastConnection,
};
