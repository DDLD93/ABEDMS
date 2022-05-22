const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema =  new Schema({
    code:{ type: String, required: true, index: true, unique: true },
    total:{ type: Number,required:true},
    name:{ type: String,required:true},
    progress:{type:Number,default:0},
    status:{type:String,enum:["active","suspended","concluded"],default:"active"},
    states:{ type: [String], required: true,},
    closingDate:{ type: Date, required: true,},
    startingDate: { type: Date, default: Date.now() },
  
  })
 module.exports = mongoose.model("Batch",batchSchema)