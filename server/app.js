const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({path: "./config/.env"});
const { CLIENT_URL } = process.env;

app.use(cors({
    origin: CLIENT_URL,
    optionsSuccessStatus: 200
}))

app.use(express.json());

// Route imports
const user = require("./routes/userRoute");
const conversation = require("./routes/conversationRoute");

app.use("/api/v1", user);
app.use("/api/v1", conversation);

module.exports = app;