const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get for post User");
});
//post - user
router.get("/:id", (req, res) => {
  res.send("Post for   Users ");
});

//Delete - user
router.delete("/:id", (req, res) => {
  res.send("Delete for post  User id");
});

module.exports = router;
