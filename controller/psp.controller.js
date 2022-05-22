const PSP = require("../model/psp.model")

class PSPController{
    constructor(){}
  
async getPSPs(){
    try {
      const psps = await PSP.find();
      return {ok:true, psps};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async getPSP(id){
    try {
      const psp = await PSP.findById(is);
      return {ok:true, psp};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async addPSP(data){
    try {
      let newPSP  = new PSP(data)
    let psp = await newPSP.save()

      return {ok:true, psp};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async addFunds(id,amount){
    try {
    let psp = await PSP.findByIdAndUpdate(id,{
      $inc:{
        balance: amount
      }
  },{ new: true })

      return {ok:true, psp};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
}


module.exports = new PSPController()