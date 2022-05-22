const Beneficiary = require("../model/beneficiary.model")

class BeneficiariesController{
    constructor(){}
  
async getBeneficiariesCustom(batch,state,lga){
    try {
      const bene = await Beneficiary.find({});
      return {ok:true, bene};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async deleteBeneficiaries(id){
    try {
      const bene = await Beneficiary.deleteMany({sheetId:id});
      console.log("delete beneficiary >>>", bene)
      return {ok:true, bene};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async addBeneficiaries(data){
    try {
      let message  = await Beneficiary.insertMany(data,)
      return {ok:true, message};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async addBiometric(id,thumbHash,faceHash){
    try {
      let message  = await Beneficiary.findByIdAndUpdate({_id:id},{
        $set:{
          isBioCaptured: true,
          biometric:{
            dateCapture: new Date.now(),
            faceHash: faceHash,
            thumbHash: thumbHash,
        },
        }
      },{new:true})
      return {ok:true, message};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async updateBio(id,data){
    data.updatedAt = Date.now()
    try {
      let bene  = await Beneficiary.findByIdAndUpdate(id, data, {multi:false, new:true});
      return {ok:true, bene};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
}


module.exports = new BeneficiariesController()