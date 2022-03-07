const mongoose = require("mongoose");

const businessDataSchema = new mongoose.Schema({
    firmName: String,
    firmOwner: String,
    firmEmailAddress: String,
    firmContactNumber: Number,
    password: String
})

mongoose.model('firm',businessDataSchema);