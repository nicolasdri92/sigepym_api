const COMPANY = require("../models/company.model");

listAll = async (req, res) => {
  await COMPANY.find((err, company) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!company) {
        res.status(500).send();
      } else {
        res.status(200).send({ company: company });
      }
    }
  });
};

getById = async (req, res) => {
  await COMPANY.findOne({ _id: req.params.id }, (err, company) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!company) {
        res.status(500).send();
      } else {
        res.status(200).send({ company: company });
      }
    }
  });
};

saveCompany = async (req, res) => {
  await USER.findOne({ _id: req.params.id }, (err, company) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (company) {
        res.status(500).send({ message: "Error en la ppeticion" });
      } else {
        let company = new COMPANY();
        company.name = req.body.name;
        company.activity = req.body.activity;
        company.user = req.params.id;
        company.save((err, companyStoraged) => {
          if (err) {
            res.status(404).send({ message: err });
          } else {
            if (!companyStoraged) {
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

updateCompany = async (req, res) => {
  await COMPANY.findOne({ _id: req.params.id }, (err, company) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!company) {
        res.status(500).send({ message: "Error en la peticion" });
      } else {
        COMPANY.findOneAndUpdate(
          {
            name: req.body.email,
            activity: req.body.activity,
            updatedAt: moment().unix(),
          },
          (err, companyUpdated) => {
            if (err) {
              res.status(404).send({ message: err });
            } else {
              if (!companyUpdated) {
                res.status(500).send({ message: "Error en la peticion" });
              } else {
                res.status(200).send();
              }
            }
          }
        );
      }
    }
  });
};

deleteCompany = async (req, res) => {
  await COMPANY.findOneAndDelete(
    { _id: req.params.id },
    (err, companyDeleted) => {
      if (err) {
        res.status(404).send({ message: err });
      } else {
        if (!companyDeleted) {
          res.status(500).send({ message: "Error en la peticion" });
        } else {
          res.status(200).send();
        }
      }
    }
  );
};

module.exports = {
  listAll,
  getById,
  saveCompany,
  updateCompany,
  deleteCompany,
};
