import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
// const { Server } = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

import messagesRouter from "./router/chat.router";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//router
app.use("/api", messagesRouter);
// connect database
// mongoose
//   .connect("mongodb://localhost:27017/node-chat")
//   .then(() => console.log("Connect DB success !!"))
//   .catch((error) => console.log(error));

// connection
// const PORT = 8000;
// app.listen(PORT, () => {
//     console.log("Server is running port", PORT);
// })

// connect socket io

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
