const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
});


module.exports = mongoose.model("Customer", customerSchema);
