const multer = require('multer');
const uuid = require('uuid').v4;
const PSP = require("../controller/psp.controller")


module.exports = (express, UPLOADS) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const fPath = UPLOADS;
        cb(null, fPath);
      },
      filename: function (req, file, cb) {
        const arr = file.originalname.split('.');
        const ext = arr[arr.length - 1];
        const fileUrl = `${uuid().replace(/-/g, '')}.${ext}`;
        req.filePath = './uploads/' + fileUrl;
        cb(null, fileUrl);
      }
    });
  
    const upload = multer({ storage });
    api = express.Router();

    api.get("/", async (req, res) => {
     
      let status = await PSP.getPSPs()
      if (status.ok) {
        if (status.psps) return res.status(200).json(status.psps);
        res.status(200).json([]);
      } else {
        res.status(500).json(status.error);
      }
    });
    api.get("/:id", async (req, res) => {
      let {id} = req.params
      let status = await PSP.getPSP(id)
      if (status.ok) {
        if (status.psp) return res.status(200).json(status.psp);
        res.status(200).json([]);
      } else {
        res.status(500).json(status.error);
      }
    });

    api.patch("/:id", async (req, res) => {
      let {id} = req.params
      let {amount} = req.body
      console.log(req.body)
      let status = await PSP.addFunds(id,amount)
      if (status.ok) {
        res.status(201).json(status.psp);
      } else {
        res.status(500).json(status.error);
      }
    });

    
      api.post("/", async (req, res) => {
        let data = req.body
       let status = await PSP.addPSP(data)
       if(status.ok) {
         return res.status(200).json(status.psp);
        }else{
          return res.status(500).json(status.error);
        }
      })


      return api
}