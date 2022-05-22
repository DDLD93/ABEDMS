const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const beneficiarySchema =  new Schema({
  fullName: { type: String, required: true, index: true, },
  batch:{ type: String},
  age:{ type: String, required: true},
  gender:{ type: String, required: true, enum:["Male","Female"] },
  maritalStatus:{type:String,required:true,enum:["Single","Married","Divorced","Widow"]},
  phone: { type: String, required: true, index: true, unique: true },
  state:{type: String, required: true,},
  lga: { type: String,required: true,},
  ward: { type: String,required: true,},
  sheetCode:{type:String,required:true},
  profilePic:{type:String},
  nextOfKin:{
    fullName:{ type: String},
    phone:{ type: String}
  },
  disability:{ type: String},
  identification:{
    type:{type:String},
    guarantor:{type:String},
    idNo:{type:String,unique:true},
    imagePath:{type:String}
  },
  payment:{
    methodOfPayment:{type:String},
    company:{type:String},
    amount:{type:Number},
    remark:{type:String},
    imagePath:{type:String}
  },
  occupation:{ type: String},
  address: { type: String,},
  status: { type: String, emun:["processing","verified","awaiting payment","paid","disqualified"], default:"processing"},
  biometric:{
      dateCapture: { type: Date },
      imagePath: { type: String},
      thumbHash: { type: Buffer},
  },
createdAt: { type: Date, default: Date.now() },
updatedAt: { type: Date,},
});
module.exports = mongoose.model("Beneficiary", beneficiarySchema)



