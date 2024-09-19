// Importa o módulo Router do Express.js e desestrutura-o para obter a classe Router
const { Router } = require("express");

// Cria uma instância da classe Router
const router = Router();
// Importa a função storeTask do controller taskController
const { storeTask } = require("../controller/taskController");

// Define uma rota POST para /post/enviar que chama a função storeTask
// Essa rota é responsável por lidar com requisições de envio de tarefas
router.post("/post/enviar", storeTask);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;
