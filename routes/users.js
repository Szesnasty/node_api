const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Its work!");
});

module.exports = router;
