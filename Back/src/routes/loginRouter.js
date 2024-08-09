const router = require("express").Router();
const { storelogin } = require('../controller/loginController')

router.post('/store/login', storelogin);

module.exports = router;