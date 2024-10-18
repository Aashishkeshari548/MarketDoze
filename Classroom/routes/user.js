const express = require("express");
const router = express.Router();



//index - user
router.get("/", (req, res) => {
  res.send("Get for  User");
});

//show-user
router.get("/:id", (req, res) => {
  res.send("Get for  show User id ");
});

//delete-user
router.delete("/:id", (req, res) => {
  res.send("Get for  show User id ");
});

module.exports = router;
