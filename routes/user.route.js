const express = require("express");
const app = express.Router();
const userController = require("../controllers/user.controller");
const middlewareAuth = require("../middlewares/auth");

app.get("/user", middlewareAuth.ensureAuth, userController.listAll);
app.get("/user/:id", middlewareAuth.ensureAuth, userController.getById);
app.put("/user/:id", middlewareAuth.ensureAuth, userController.updateUser);
app.delete("/user/:id", middlewareAuth.ensureAuth, userController.deleteUser);

module.exports = app;
