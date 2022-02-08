const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
    conversationName: {
        type: String,
        required: [true, "Please enter conversation name"]
    },
    private: {
        type: Boolean,
        default: true
    },
    participants: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Conversation", conversationSchema);