const express = require("express");
const Users = require("./../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Its work!");
});

router.post("/", (req, res) => {
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

module.exports = router;
