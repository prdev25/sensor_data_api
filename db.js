const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:277/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" //your mongoDB URL here

const connectDB = ()=>{
    mongoose.connect(mongoURI , ()=>{
        console.log("connected to mongo DB")
    });
}

module.exports = connectDB

