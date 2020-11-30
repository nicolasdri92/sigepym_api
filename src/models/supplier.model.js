const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const schema = mongoose.Schema;
const supplierSchema = new schema(
  {
    supplier: { type: String, required: true },
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
    buy_category: String,
    buy_discount: String,
    billing_supplier: String,
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
    company: {
      type: schema.ObjectId,
      ref: "company",
    },
  },
  {
    timestamps: true,
  }
);

supplierSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("suppliers", supplierSchema);
