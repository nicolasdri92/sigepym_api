const Company = require("../models/company.model");
const User = require("../models/user.model");

listAll = async (req, res) => {
  await Company.find((err, company) => {
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

listOne = async (req, res) => {
  await Company.findOne({ _id: req.params.id }, (err, company) => {
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
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!user) {
        res.status(500).send({ message: "Error en la peticion" });
      } else {
        const company = new Company(req.body);
        company.user = req.params.id;
        company.save((err, companyStoraged) => {
          if (err) {
            res.status(404).send({ message: err });
          } else {
            if (!companyStoraged) {
              res.status(500).send({ message: "Error en la peticion" });
            } else {
              res.status(200).send(companyStoraged);
            }
          }
        });
      }
    }
  });
};

updateCompany = async (req, res) => {
  await Company.findOne({ _id: req.params.id }, (err, company) => {
    if (err) {
      res.status(404).send({ message: err });
    } else {
      if (!company) {
        res.status(500).send({ message: "Error en la peticion" });
      } else {
        Company.findOneAndUpdate(
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
  await Company.findOneAndDelete(
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
  listOne,
  saveCompany,
  updateCompany,
  deleteCompany,
};
