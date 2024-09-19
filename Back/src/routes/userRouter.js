// Importa o módulo Router do Express.js e cria uma instância do roteador
const router = require("express").Router();

// Importa as funções storeUser e atualizarUser do controller userController
const { storeUser, atualizarUser } = require('../controller/userController');

// Define uma rota POST para /store/user que chama a função storeUser
// Essa rota é responsável por criar um novo usuário
router.post('/store/user', storeUser);

// Define uma rota PUT para /store/userAtualizar que chama a função atualizarUser
// Essa rota é responsável por atualizar um usuário existente
router.put('/store/userAtualizar', atualizarUser);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;