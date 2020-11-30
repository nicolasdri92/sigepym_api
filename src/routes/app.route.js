const express = require("express");
const app = express.Router();
const AppController = require("../controllers/app.controller");

app.get("/state", AppController.getState);
app.get("/city", AppController.getCity);

module.exports = app;
