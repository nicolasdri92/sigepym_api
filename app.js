const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const companyRoute = require("./routes/company.route");

app.use("/api", [authRoute, userRoute, companyRoute]);

module.exports = app;
