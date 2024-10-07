const router = require("express").Router();
const { storeUser, atualizarUser } = require('../controller/userController')

router.post('/store/user', storeUser);

router.put('/store/userAtualizar', atualizarUser);

module.exports = router;