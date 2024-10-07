const express = require("express");
const router = express.Router();
const { storefeed, getFeed } = require("../controller/feedController");

router.post("/store/feed", storefeed);
router.get("/get/feed", getFeed);

module.exports = router;
