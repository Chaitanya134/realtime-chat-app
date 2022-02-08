const User = require("../models/userModel");
const Conversation = require("../models/conversationModel");

// Get all conversations
exports.getAllConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find();
        res.status(200).json({
            success: true,
            conversations
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Get conversation by id
exports.getConversationById = async (req, res) => {
    try {
        const conversation = await Conversation.findById(req.params.id);
        res.status(200).json({
            success: true,
            conversation
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

// Create a conversation
exports.createConversation = async (req, res) => {
    try {
        const conversation = await Conversation(req.body);
        await conversation.save();

        // add conversation id to all users present in participants array
        const users = await User.find({ _id: { $in: conversation.participants } });
        users.forEach(async user => {
            user.conversations.push(conversation._id);
            await user.save();
        });
        
        res.status(201).json({
            success: true,
            conversation
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};