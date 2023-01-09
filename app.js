const express = require('express');
const app=express();

app.get("/", (req, res) => {
  return res.send("Welcome to your collabrative scribble pad");
})

app.listen(5000, ()=>{
  console.log("Server Up and Running on port 5000");
})