const mongoose = require("mongoose");


const firmDataSchema = new mongoose.Schema({
    customerId: String,
    sales: [{
        date: Date,
        amount: Number
    }]
})

mongoose.model('firmData',firmDataSchema);