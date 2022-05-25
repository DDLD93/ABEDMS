module.exports = (express) => {
  
    api = express.Router();

    api.get("/", async (req, res) => {
        
         let status = await beneCtrl.getBeneficiariesCustom()
         if (status.ok) {
           if (status.bene) return res.status(200).json(status.bene);
           res.status(200).json([]);
         } else {
           res.status(500).json(status.error);
         }
       });

}   