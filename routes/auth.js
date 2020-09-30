const router = require("express").Router();
const { loginValidation } = require("../validations/users/users-validation");
const bcrypt = require("bcryptjs");
const Users = require("./../models/Users");

router.post("/", async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const user = await Users.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("Email or password wrong");

  const validPass = await bcrypt.compare(req.body.password, user.password);

  if (!validPass) return res.status(400).send("Email or password wrong");

  res.send("Success");
});

module.exports = router;
