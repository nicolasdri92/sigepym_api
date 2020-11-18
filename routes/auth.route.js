const express = require("express");
const app = express.Router();
const authController = require("../controllers/auth.controller");

app.post("/login", authController.login);
app.post("/register", authController.register);

module.exports = app;
