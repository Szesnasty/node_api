const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: String,
});

module.exports = mongoose.model('Users', UsersSchema);
