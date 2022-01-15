const app = require("./app");
const connectDatabase = require("./config/database");

const { PORT, HOST, USER, PASSWORD, DATABASE } = process.env;

// Connecting to database
connectDatabase();

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})