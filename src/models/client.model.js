const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const schema = mongoose.Schema;
const clientSchema = new schema(
  {
    business: { type: String, required: true },
    name: String,
    surname: String,
    phone: String,
    mobile: String,
    email: String,
    web: String,
    address: String,
    number: Number,
    department: String,
    state: String,
    code: String,
    city: String,
    sell_category: String,
    sell_discount: String,
    billing_business: String,
    billing_name: String,
    billing_surname: String,
    billing_phone: String,
    billing_mobile: String,
    billing_email: String,
    billing_web: String,
    billing_address: String,
    billing_number: Number,
    billing_department: String,
    billing_state: String,
    billing_code: String,
    billing_city: String,
    status: { type: String, default: "active" },
    company: {
      type: schema.ObjectId,
      ref: "company",
    },
  },
  {
    timestamps: true,
  }
);

clientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("clients", clientSchema);
