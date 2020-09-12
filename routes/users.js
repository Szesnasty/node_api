const express = require("express");
const Users = require("./../models/Users");
const router = express.Router();

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
  console.log(req.body);

  const users = new Users({
    name: req.body.name,
    email: req.body.email,
  });

  users
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// get specific user
router.get("/:userId", async (req, res) => {
  try {
    const singleUser = await Users.findById(req.params.userId);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete user
router.delete("/:userId", async (req, res) => {
  try {
    const singleUser = await Users.deleteOne({ _id: req.params.userId });
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
