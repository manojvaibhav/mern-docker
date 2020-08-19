const mongoose = require('mongoose');
const config = require('../env');
const chalk = require('chalk');

module.exports = () => {

    console.log(config);

    mongoose.connect(`mongodb://${config.mongo.dbHost}:${config.mongo.dbPort}/${config.mongo.dbName}`, { useNewUrlParser: true});
    

    mongoose.connection.on('connected', ()=>{
        console.log("Mongoose connection successful !");
        console.log(chalk.green(`Host Name : ${config.mongo.dbHost}   DB Name: ${config.mongo.dbName}`));
    })

    mongoose.connection.on('error', (err)=>{
        console.log("Mongoose Connection error", err);
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log("Mongoose disconnected !");
    })

    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log("Mongoose connection interrupted !!");
        })
    })

};