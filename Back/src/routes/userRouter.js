const router = require("express").Router();
const { storeUser, atualizarUser } = require('../controller/userController')

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
router.post('/store/user', storeUser);

/**
* @swagger
* /task/:id:
*   put:
*     summary: Atualiza uma tarefa pelo id
*     responses:
*       200:
*         description: Uma lista de tarefas
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.put('/store/userAtualizar', atualizarUser);

module.exports = router;