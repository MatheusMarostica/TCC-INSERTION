// Importa a biblioteca mysql2 para interagir com o banco de dados MySQL
const mysql = require("mysql2");

// Importa a biblioteca dotenv para carregar as variáveis de ambiente do arquivo .env
const dotenv = require("dotenv").config();

// Cria uma conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  // Host do banco de dados (endereço IP ou nome do servidor)
  host: process.env.DB_HOST,
  // Usuário do banco de dados
  user: process.env.DB_USER,
  // Senha do banco de dados
  password: process.env.DB_PASSWORD,
  // Nome do banco de dados
  database: process.env.DB_DATABASE,
});

// Testa se a conexão com o banco de dados foi estabelecida com sucesso
connection.connect(function (err) {
  // Se houver um erro, lança uma exceção
  if (err) {
    throw err;
  } else {
    // Se a conexão foi estabelecida com sucesso, imprime uma mensagem no console
    console.log("Mysql Connected!");
  }
});

// Exporta a conexão com o banco de dados para que possa ser utilizada em outros módulos
module.exports = connection;