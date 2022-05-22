const mongoose = require('mongoose');
var host = process.env.MONGODB_HOST || "database"
var port = process.env.MONGODB_PORT || 27017
const url = `mongodb://${host}:${port}/system`
module.exports = () => {
    let options = {
        useNewUrlParser: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        // poolSize: 10,
        keepAlive: true,
        connectTimeoutMS: 30000,
        useUnifiedTopology: true
    };
    
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log('We are connected to mongodb');
    });
    db.on('error', (err) => {
        console.log('Error connecting to mongodb ', err);
    });
    
    db.on('disconnect', () => {
        console.log('Oops we are disconnected from mongodb');
        mongoose.connect(url,options);
    });
    mongoose.connect(url,options);
}