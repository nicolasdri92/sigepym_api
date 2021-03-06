require("dotenv").config();
const moment = require("moment");
const mongoose = require("mongoose");
const app = require("./app");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT || 3977;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const URI_remote = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@sigepym.7p2ef.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const URI_local = `mongodb://localhost:27017/${DB_NAME}`;

mongoose
  .connect(URI_local, options)
  .then(() =>
    app.listen(DB_PORT, () => {
      console.log(moment().format("HH:mm:ss"));
    })
  )
  .catch((err) => console.log(err));
