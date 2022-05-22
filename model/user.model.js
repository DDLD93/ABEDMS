const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({

    fullName: { type: String, required: true, index: true, },
    batchNo: { type: String, required: true, index: true,default:"001"},
    phone: { type: String, required: true, index: true, unique: true },
    email: { type: String, required: true, index: true, unique: true },
    company:{ type: String },
    address: { type: String },
    password: { type: String , required: true },
    state: { type: String},
    dateOfBirth:{type: String},
    userType: { type: String, required: true, enum:["psp","admin","qa","staff"] },
    status: { type: String,enum:["active","suspended","inactive"],default:"active" },
   
 
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("User", userSchema);



