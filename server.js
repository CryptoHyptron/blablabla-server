const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});