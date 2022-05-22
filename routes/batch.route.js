const batchCtrl = require("../controller/batch.controller")
const uuid = require('uuid').v4;
module.exports = (express) => {
    
    api = express.Router();

    api.post("/", async (req, res) => {
      
      let data = req.body
      let date = new Date
      date = date.getFullYear()
      let code = `${date}/${uuid().replace(/-/g, '').substring(0,5)}`
      data.code = code
        let status = await batchCtrl.addBatch(data);
        if (status.ok) {
          res.status(200).json(status.batch);
        } else {
          console.log(status.error)
          res.status(500).json(status.error);
        }
      });

      api.get("/", async (req, res) => {
        let status = await batchCtrl.getBatches();
        if (status.ok) {
          res.status(200).json(status.batch);
        } else {
          res.status(500).json(status.error);
        }
      });
      api.get("/:id", async (req, res) => {
        
        let status = await batchCtrl.getBatches();
        if (status.ok) {
          res.status(200).json(status.batch);
        } else {
          res.status(500).json(status.error);
        }
      });
      api.delete("/:id", async (req, res) => {
        let {id} = req.params;
        console.log(id)
        let status = await batchCtrl.deleteBatch(id);
        if (status.ok) {
          res.status(200).json(status.batch);
        } else {
          res.status(500).json(status.error);
        }
      });
      api.patch("/:id", async (req, res) => {
        let {id} = req.params;
        let {status}= req.body
        let response = await batchCtrl.statusBatch(id,status);
        if (response.ok) {
          res.status(200).json(response.batch);
        } else {
          res.status(500).json(response.error);
        }
      });

 return api
}