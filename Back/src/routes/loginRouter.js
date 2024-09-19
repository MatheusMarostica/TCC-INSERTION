// Importa o módulo Router do Express.js e cria uma instância dele
const router = require("express").Router();

// Importa a função storelogin do controller loginController
const { storelogin } = require('../controller/loginController');

// Define uma rota POST para /store/login que chama a função storelogin
// Essa rota é responsável por lidar com requisições de login
router.post('/store/login', storelogin);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;