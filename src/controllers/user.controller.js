const moment = require("moment");
const User = require("../models/user.model");

listAll = async (req, res) => {
  await User.find((err, user) => {
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

listOne = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
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

saveUser = async (req, res) => {};

updateUser = async (req, res) => {
  await User.findOneAndUpdate(
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
  await User.findOneAndDelete({ _id: req.params.id }, (err, userDeleted) => {
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
  await User.findOneAndUpdate({ _id: req.id }, { lastConnection: moment() });
};

module.exports = {
  listAll,
  listOne,
  updateUser,
  deleteUser,
  updateLastConnection,
};
