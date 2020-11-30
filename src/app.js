const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const AppRoute = require("./routes/app.route");
const AuthRoute = require("./routes/auth.route");
const UserRoute = require("./routes/user.route");
const CompanyRoute = require("./routes/company.route");
const ClientRoute = require("./routes/client.route");

app.use("/api", [AppRoute, AuthRoute, UserRoute, CompanyRoute, ClientRoute]);

module.exports = app;
