const mongoose = require("mongoose");
const schema = mongoose.Schema;
const activities = {
  B: "ventas de bienes",
  S: "ventas de servicios",
  BS: "ventas de bienes y servicios",
};
const companySchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    activity: { type: String, enum: Object.keys(activities), required: true },
    user: {
      type: schema.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("companies", companySchema);
