const amqp = require("amqplib");
const q = 'user';

class RabbitMQConnection {
    constructor() {
        this.connection = null
        this.channel = null
        this.connect()
       
    }
    async connect () {
        try {
            this.connection = await amqp.connect('amqp://ujere:123456@rabbitmq:5672')
            this.channel = await this.connection.createChannel()
             await this.channel.assertQueue(q, { durable: true })
             console.log("Connected to rabbitMQ")
             
             
        } catch (err) {
            console.log(err)
            throw new Error('Connection failed')
        }
    
    }
    async sendMsg(data) {
        if (!this.connection) await this.connect()
        try {
            this.channel.sendToQueue(q, Buffer.from(JSON.stringify(data)),{presistent:true})
        } catch (err) {
            console.error(err)
        }
    }
    async getMsg(handler) {
        if (!this.connection) await this.connect()
        try {
            this.channel.consume(q,handler)
        } catch (err) {
            console.error(err)
        }
    }
}
module.exports = new RabbitMQConnection()