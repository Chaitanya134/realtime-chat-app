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

app.use("/api/v1", user);


module.exports = app;