const paymentCtrl = require("../controller/payment.controller")

module.exports = (express, UPLOADS) => {
    
    api = express.Router();
  
    api.get("/", async (req, res) => {
      let status = await paymentCtrl;
      if (status.ok) {
        if (status.users) return res.status(200).json(status.users);
        res.status(200).json([]);
      } else {
        res.status(500).json(status.error);
      }
    });
    return api
}