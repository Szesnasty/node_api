const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Its work!");
});

// CONNECT
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connect!!")
);

app.listen(3000);
