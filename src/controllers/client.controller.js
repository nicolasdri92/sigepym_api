const Client = require("../models/client.model");
const User = require("../models/user.model");

listAll = async (req, res) => {
  const status = req.query.status || "active";
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;

  await Client.paginate({status: status}, { limit, page }, (err, client) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!client) {
        res.status(500).send({ message: "Error en la petición" });
      } else {
        res.status(200).send({ client: client });
      }
    }
  });
};

listOne = async (req, res) => {
  await Client.findOne({ _id: req.params.id }, (err, client) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!client) {
        res.status(500).send();
      } else {
        res.status(200).send({ client: client });
      }
    }
  });
};

saveClient = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (user) {
        res.status(500).send({ message: "Error en la peticion" });
      } else {
        console.log(req.body);
        const client = new Client();
        client.company = req.params.id;
        client.save((err, clientStoraged) => {
          if (err) {
            res.status(404).send({ message: err });
          } else {
            if (!clientStoraged) {
              res.status(500).send({ message: "Error en la peticion" });
            } else {
              res.status(200).send();
            }
          }
        });
      }
    }
  });
};

updateClient = async (req, res) => {
  await Client.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, clientUpdated) => {
      if (err) {
        res.status(404).send({ message: err });
      } else {
        if (!clientUpdated) {
          res.status(500).send({ message: "Error en la peticion" });
        } else {
          res.status(200).send();
        }
      }
    }
  );
};

deleteClient = async (req, res) => {
  await Client.findOneAndDelete(
    { _id: req.params.id },
    (err, clientDeleted) => {
      if (err) {
        res.status(404).send({ message: err });
      } else {
        if (!clientDeleted) {
          res.status(500).send({ message: "Error en la peticion" });
        } else {
          res.status(200).send();
        }
      }
    }
  );
};

// updateStatus = (req, res) => {
//   Client.findOneAndUpdate(
//     { _id: req.params.id },
//     { status: req.body.status },
//     (err, clientUpdated) => {
//       if (err) {
//         res.status(404).send({
//           message: "Error en la petición",
//         });
//       } else {
//         if (!clientUpdated) {
//           res.status(500).send({
//             message: "Error en la petición",
//           });
//         } else {
//           res.status(200).send({
//             message: "Cliente actualizado",
//           });
//         }
//       }
//     }
//   );
// };

module.exports = {
  listAll,
  listOne,
  saveClient,
  updateClient,
  deleteClient,
};
