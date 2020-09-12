const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
