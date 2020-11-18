const mongoose = require("mongoose");
const schema = mongoose.Schema;
const companySchema = new schema({
  name: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  updatedAt: Date,
  user: {
    type: schema.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("companies", companySchema);
