const express = require("express");

const { getAllConversations, getConversationById, createConversation } = require("../controllers/conversationController");

const router = express.Router();

// Get All Conversations
router.route("/conversations").get(getAllConversations);

// Get Conversation By Id
router.route("/conversation/:id").get(getConversationById);

// Create A Conversation
router.route("/conversation/new").post(createConversation);

module.exports = router;