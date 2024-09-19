// Importa o framework Express.js
const express = require("express");

// Cria uma instância do router do Express.js
const router = express.Router();

// Importa a função storefeed do controller feedController
const { storefeed } = require("../controller/feedController");

// Define uma rota POST para /store/feed que chama a função storefeed
router.post("/store/feed", storefeed);

// Exporta o router para que possa ser utilizado em outros módulos
module.exports = router;