const express = require("express");
const Users = require("./../models/Users");
const router = express.Router();
const { regiserValidation } = require("../validations/users/users-validation");
const bcrypt = require("bcryptjs");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch {
    res.json({ message: err });
  }
});

// Create new user
router.post("/", async (req, res) => {
  const { error } = regiserValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // Checking if user already exist in database
  const emailExist = await Users.findOne({ email: req.body.email });

  const salt = await bcrypt.genSalt(20);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const users = new Users({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  if (emailExist)
    return res.status(400).send("User with that email already exist");
  try {
    const savedUser = await users.save();
    res.send(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific user
router.get("/:userId", async (req, res) => {
  try {
    const singleUser = await Users.findById(req.params.userId);
    res.json(singleUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete user
router.delete("/:userId", async (req, res) => {
  try {
    const singleUser = await Users.deleteOne({ _id: req.params.userId });
    res.json(singleUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
