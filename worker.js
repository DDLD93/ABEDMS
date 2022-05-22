const broker = require("./connection/rabbitmq.connection")
const beneficiaryCtrl = require("./controller/beneficiaries.controller")
const batchCtrl = require("./controller/batch.controller")
const sheetCtrl = require("./controller/sheet.controller")
module.exports =  ()=>{

    broker.getMsg(async (msg)=>{
        let data = JSON.parse(msg.content.toString())
        
       
        const list = data.message.map(field => {
              return {
                serialNo: field.B,
                fullName: field.C,
                age: field.D,
                gender: field.E,
                maritalStatus: field.F,
                state: field.G,
                lga: field.H,
                ward: field.I,
                phone: field.J,
                sheetId: data.id,
                sheetCode: data.code  
              }
            })
            let status = await  beneficiaryCtrl.addBeneficiaries(list)
            console.log(status)//
          if(status.ok) {
            let sheetStatus = await sheetCtrl.updateSheet(data.id,data.message.length,"valid")
          }
          if(status.error){
            await sheetCtrl.updateSheet(data.id,data.message.length,"failed")
          }
          broker.channel.ack(msg)
        
        })
}
