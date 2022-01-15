const User = require("../models/userModel");

// Get All Users
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    });
}

// Get User By Id
exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(500).json({
            success: false,
            message: "User not found"
        })
    }

    res.status(200).json({
        success: true,
        user
    })
}

// Create A User
exports.createUser = async (req, res) => {
    const email = req.body.email;
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({
            success: false,
            message: "User Already Exists"
        })
    }

    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        user
    })
}

// Update A User
exports.updateUser = async (req, res) => {
    const userExists = await User.findById(req.params.id);

    if (!userExists) {
        return res.status(500, {
            success: false,
            message: "User not found"
        })
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({
        success: true,
        user
    })
}