const { Router } = require("express");
const router = Router();
const { storeTask } = require("../controller/taskController");

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
router.post("/post/enviar", storeTask);

module.exports = router;
