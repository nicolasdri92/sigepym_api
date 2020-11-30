const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    lastConnection: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
