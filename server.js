const UPLOADS = __dirname+'/uploads';
const PHOTO_ID = __dirname+'/photoID';
require('./connection/mongodb.connection')();

const express = require("express");
const cors = require('cors');
require('dotenv').config();
// const broker = require("./connection/rabbitmq.connection")




const app = express()
const port = process.env.PORT || 9000


app.use(cors());
app.use(express.urlencoded({ extended: true }));
//intitializing body parser
app.use(express.json())
// connecting to database 
require("./worker")()
app.use(express.static("build"));
app.use("/api/batch", require("./routes/batch.route")(express,UPLOADS));
app.use("/api/psp", require("./routes/psp.route")(express,UPLOADS));

app.use("/api/sheet", require("./routes/sheet.route")(express,UPLOADS));
app.use("/api/user", require("./routes/user.route")(express));
app.use("/api/beneficiaries", require("./routes/beneficiaries.route")(express,PHOTO_ID));
app.use("/api/payment", require("./routes/payment.route")(express));
app.use("/api/uploads",express.static(UPLOADS))

//setInterval(()=>broker.sendMsg({name:"umar"}),10000)


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})

