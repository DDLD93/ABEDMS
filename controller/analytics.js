const Beneficiary = require("../model/beneficiary.model")
const Sheet = require("../model/sheet.model")
const User = require("../model/user.model")
const Psp = require("../model/psp.model")
class BeneficiariesController{
    constructor(){}

    async getBasicStats(){
        try {
          const allBen = await Beneficiary.find()
          const allBenPaid = await Beneficiary.find({status:"paid"})
          return {ok:true, batch};
        } catch (err) {
          return {ok:false,error:err};
        }
      }

}    