const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter last name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter phone number"],
        maxLength: [10, "Phone number cannot exceed 10 digits"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    savedContacts: {
        type: Array,
        default: []
    }    
})

module.exports = mongoose.model("User", userSchema);