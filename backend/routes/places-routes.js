const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Places route is working!" });
});

module.exports = router;
