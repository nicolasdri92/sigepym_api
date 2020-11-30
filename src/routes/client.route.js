const express = require("express");
const app = express.Router();
const ClientController = require("../controllers/client.controller");
const MiddlewareAuth = require("../middlewares/auth");

app.get("/client", MiddlewareAuth.ensureAuth, ClientController.listAll);
app.get("/client/:id", MiddlewareAuth.ensureAuth, ClientController.listOne);
app.post("/client/:id", MiddlewareAuth.ensureAuth, ClientController.saveClient);
app.put(
  "/client/:id",
  MiddlewareAuth.ensureAuth,
  ClientController.updateClient
);
app.delete(
  "/client/:id",
  MiddlewareAuth.ensureAuth,
  ClientController.deleteClient
);

module.exports = app;
