// Importa a conexão com o banco de dados
const connection = require("../config/db");

// Carrega as variáveis de ambiente do arquivo .env
const dotenv = require("dotenv").config();

// Função assíncrona para armazenar um feed
async function storefeed(request, response) {
  // Extrai o texto do corpo da requisição e converte em um array
  const params = Array(request.body.inputText);

  // Define a consulta SQL para inserir um novo registro na tabela feed
  const query = "INSERT INTO feed(texto) VALUES(?)";

  // Executa a consulta SQL com os parâmetros fornecidos
  connection.query(query, params, (err, results) => {
    // Verifica se a consulta foi bem-sucedida
    if (results) {
      response.status(201).json({
        success: true,
        message: "Sucesso!",
        data: results,
      });
    } else {
      response.status(400).json({
        success: false,
        message: "Ops, deu problema!",
        data: err,
      });
    }
  });
}

// Exporta a função storefeed para que possa ser utilizada em outros módulos
module.exports = {
  storefeed,
};