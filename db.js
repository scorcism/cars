const mongoose = require("mongoose");

function connectDB(){

    // mongoose.connect('mongodb+srv://sathya:sathyapr@cluster0.dkuc0.mongodb.net/scor32kcars-udemy' , {useUnifiedTopology: true , useNewUrlParser: true})
    mongoose.connect('mongodb+srv://scor32k:scor32k@cluster0.cw5duyv.mongodb.net/cars?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose