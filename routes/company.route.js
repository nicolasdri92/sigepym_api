const express = require("express");
const app = express.Router();
const companyController = require("../controllers/company.controller");
const middlewareAuth = require("../middlewares/auth");

app.get("/company", middlewareAuth.ensureAuth, companyController.listAll);
app.get("/company/:id", middlewareAuth.ensureAuth, companyController.getById);
app.post("/company", middlewareAuth.ensureAuth, companyController.saveCompany);
app.put(
  "/company/:id",
  middlewareAuth.ensureAuth,
  companyController.updateCompany
);
app.delete(
  "/company/:id",
  middlewareAuth.ensureAuth,
  companyController.deleteCompany
);

module.exports = app;
