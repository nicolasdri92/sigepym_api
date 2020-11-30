const express = require("express");
const app = express.Router();
const AuthController = require("../controllers/auth.controller");

app.post("/login", AuthController.login);
app.post("/register", AuthController.register);

module.exports = app;
