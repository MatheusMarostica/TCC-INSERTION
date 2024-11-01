const express = require("express");
const router = express.Router();
const { storefeed, getFeed, deleteFeed } = require("../controller/feedController");
const feedController = require('../controller/feedController');

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
router.post("/store/feed", storefeed);

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
router.get("/get/feed", getFeed);

router.delete('/feed/:id', feedController.deleteFeed);

module.exports = router;

