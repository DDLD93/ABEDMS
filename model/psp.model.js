const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pspSchema =  new Schema({
    name:{ type: String,required:true},
    email:{type:String,unique:true},
    balance:{type:Number,default:0},
    phone:{ type: String, required:true,unique:true},
    createdAt: { type: Date, default: Date.now() },
  
  })
 module.exports = mongoose.model("psp",pspSchema)