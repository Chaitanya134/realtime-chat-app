const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// Hash the Password
userSchema.methods.generateHash = async password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Check if Password is Valid
userSchema.methods.validPassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = mongoose.model("User", userSchema);