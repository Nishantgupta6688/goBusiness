const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Nishantgpt619:NishantWorkPermit@workpermit.oqqm4.mongodb.net/goBusiness?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const connect = mongoose.connection;

connect.on('connected', function(){
    console.log("database is connected successfully")
})

connect.on('disconnected', function() {
    console.log("disconnected from database!!!!")
})

connect.on('error', console.error.bind(console, 'connection error:'))

module.exports = connect;