const moment = require("moment");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  lastConnection: { type: Date, default: null },
  createdAt: { type: Date, default: moment() },
});

module.exports = mongoose.model("users", userSchema);
