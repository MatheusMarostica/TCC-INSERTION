const express = require("express");
const router = express.Router();
const { storefeed, getFeed } = require("../controller/feedController");

router.post("/store/feed", storefeed);
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
router.get("/get/feed", getFeed);
/**
* @swagger
* /tasks/list:
*   get:
*     summary: Retorna todas as tarefas
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
module.exports = router;

