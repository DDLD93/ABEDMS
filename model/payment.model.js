const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema =  new Schema({
    beneficiary:{ type: String, required: true},
    beneficiary_id:{ type: String, required: true},
    amount:{ type: Number, required: true},
    method:{ type: String, required: true},
    company:{ type: String, required: true},
    date: { type: Date, default: Date.now() },
  
  })
  module.exports =mongoose.model("Payment",paymentSchema)