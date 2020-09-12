const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// IMPORT ROUTERS
const UserRoutes = require("./routes/users");

app.use("/users", UserRoutes);

// CONNECT
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connect!!")
);

app.listen(3000);
