const app = require("./app");
const http = require("http");
const server = http.createServer(app);

const { PORT, CLIENT_URL, HOST, USER, PASSWORD, DATABASE } = process.env;

exports.io = require("socket.io")(server, {
    cors: {
        origin: [CLIENT_URL]
    }
});

require("./socket");

const connectDatabase = require("./config/database");

// Connecting to database
connectDatabase();

server.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})