const express = require("express");
const app = express.Router();
const UserController = require("../controllers/user.controller");
const MiddlewareAuth = require("../middlewares/auth");

app.get("/user", MiddlewareAuth.ensureAuth, UserController.listAll);
app.get("/user/:id", MiddlewareAuth.ensureAuth, UserController.listOne);
app.put("/user/:id", MiddlewareAuth.ensureAuth, UserController.updateUser);
app.delete("/user/:id", MiddlewareAuth.ensureAuth, UserController.deleteUser);

module.exports = app;
