const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

// IMPORT ROUTERS
const UserRoutes = require("./routes/users");

app.use(bodyParser.json());
app.use("/users", UserRoutes);



// CONNECT
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connect!!")
);

app.listen(3000);
