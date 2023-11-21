const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const ROLES = {
    CUSTOMER: "customer",
    STAFF: "dealer",
    MANAGER: "dealer",
    ADMIN: "admin",
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(ROLES),
    },
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
        },
    ],
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v); // Validate phone number format
            },
            message: (props) =>
                `${props.value} is not a valid phone number! Please use the format: xxx-xxx-xxxx`,
        },
    },
    purchases: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
        },
    ],
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

module.exports = mongoose.model("User", UserSchema);
