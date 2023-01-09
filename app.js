// Constants
const PORT = process.env.PORT || 5000;

// Imports
const express = require("express");
const app = express();
const io = require("socket.io")(PORT, {
  cors: {
    origin: "https://localhost/3000",
    method: ["GET", "POST"],
  },
});


// Connections
io.on("connection", (socket) => {
  console.log("User Connected");
  console.log(socket);
});

app.get("/", (req, res) => {
  return res.send("Welcome to your collabrative scribble pad");
});

// app.listen(5000, () => {
//   console.log("Server Up and Running on port 5000");
// });
