const express = require('express');
const router = express.Router();
const { storefeed } = require('../controller/feedController');

router.post('/store/feed', storefeed);

module.exports = router;