const { io } = require("./server");
io.on("connection", socket => {
    socket.on("add-message", message => {
        socket.broadcast.emit("display-message", message);
    })

})