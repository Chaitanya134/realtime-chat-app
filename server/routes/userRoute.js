const express = require("express");
const { getAllUsers,
    createUser,
    updateUser,
    getUserById,
    loginUser,
    addAContact,
    getAllContacts } = require("../controllers/userController");

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

// Get All Contacts
router.route("/user/:id/contacts").get(getAllContacts);

// Add a Contact
router.route("/user/:id/contact").post(addAContact);

module.exports = router;