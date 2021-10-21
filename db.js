const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectDB = ()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("connected to mongo DB")
    });
}

module.exports = connectDB

