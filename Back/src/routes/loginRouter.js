const router = require("express").Router();
const { storelogin } = require('../controller/loginController')

/**
* @swagger
* /tasks/register:
*   post:
*     summary: Cadastra uma nova tarefa
*     responses:
*       201:
*         description: Sucesso!
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/store/login', storelogin);

module.exports = router;