const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const verifyToken = require("./routes/verify-token");

const app = express();

// IMPORT ROUTERS
const UserRoutes = require("./routes/users");
const AuthRoutes = require("./routes/auth");

app.use(bodyParser.json());
app.use(cors());
app.use("/users", verifyToken, UserRoutes);
app.use("/login", AuthRoutes);

// CONNECT
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connect!!")
);

app.listen(8000);
