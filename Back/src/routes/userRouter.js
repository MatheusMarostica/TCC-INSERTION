const router = require("express").Router();
const { storeUser } = require('../controller/userController')

router.post('/store/user', storeUser);

module.exports = router;