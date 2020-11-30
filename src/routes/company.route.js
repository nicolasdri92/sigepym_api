const express = require("express");
const app = express.Router();
const CompanyController = require("../controllers/company.controller");
const MiddlewareAuth = require("../middlewares/auth");

app.get("/company", MiddlewareAuth.ensureAuth, CompanyController.listAll);
app.get("/company/:id", MiddlewareAuth.ensureAuth, CompanyController.listOne);
app.post(
  "/company/:id",
  MiddlewareAuth.ensureAuth,
  CompanyController.saveCompany
);
app.put(
  "/company/:id",
  MiddlewareAuth.ensureAuth,
  CompanyController.updateCompany
);
app.delete(
  "/company/:id",
  MiddlewareAuth.ensureAuth,
  CompanyController.deleteCompany
);

module.exports = app;
