const express = require("express");
const app = express();

const server = app.listen(8000, () => {
    console.log("Server is listening to port 8000");
})

const io = require("socket.io")(server);

io.on("connection", socket => {
    // Each client gets their own id
    console.log("Nice to meet you.(shake hand)");

    socket.emit("Welcome to my first chat");

    // if this is logged in our node terminal, that means a new client
    // has successfully completed the handshake

    // add additional event listeners in this function
    // "connection" is a built in event listeners.

})