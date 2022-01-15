const express = require("express");
const { getAllUsers, createUser, updateUser, getUserById, loginUser } = require("../controllers/userController");

const router = express.Router();

// Get All Users
router.route("/users").get(getAllUsers);

// Get User By Id
router.route("/user/:id").get(getUserById);

// Create A User
router.route("/user/new").post(createUser);

// Update A User
router.route("/user/:id").put(updateUser);

// Login User
router.route("/user/login").post(loginUser);

module.exports = router;