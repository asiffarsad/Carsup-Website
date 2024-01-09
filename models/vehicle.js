const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    bodyStyle: {
        type: String,
        required: true,
    },
    odometer: {
        type: String,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    vin: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    drivetrain: {
        type: String,
        required: true,
    },
    exteriorColor: {
        type: String,
        required: true,
    },
    interiorColor: {
        type: String,
        required: true,
    },
    engine: String,
    engineSize: String,
    description: {
        type: String,
        required: true,
    },
    feature: {
        type: String,
        required: true,
    },


});


module.exports = mongoose.model("Vehicle", vehicleSchema);
