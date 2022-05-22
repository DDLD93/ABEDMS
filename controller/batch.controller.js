const Batch = require("../model/batch.model")
 
class BatchController{
  constructor(){}

  async addBatch(data){
    try {
      const newBatch = new Batch(data);
      const batch = await newBatch.save();
      return {ok:true, batch};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async getBatches(){
    try {
      const batch = await Batch.find()
      return {ok:true, batch};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async statusBatch(id,status){
    try {
      const batch = await Batch.findByIdAndUpdate(id,{
        $set:{
          status
        }
      },{new:true})
      return {ok:true, batch};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
  async deleteBatch(id){
    try {
      const batch = await Batch.findByIdAndDelete(id)
      console.log(batch)
      return {ok:true, batch};
    } catch (err) {
      return {ok:false,error:err};
    }
  }
}

module.exports =  new BatchController()