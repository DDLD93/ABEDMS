const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SheetsSchema =  new Schema({

    total : { type: Number},
    valid:{ type: Number,default:0},
    code:{type:String},
    status : { type: String,emun:["pending","valid","rejected","approved","failed"],default:"pending"},
    createdAt: { type: Date, default: Date.now() }, 
  })

  module.exports = mongoose.model("Sheet", SheetsSchema)