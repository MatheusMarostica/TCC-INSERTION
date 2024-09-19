// Importa a conexão com o banco de dados
const connection = require("../config/db");

// Carrega as variáveis de ambiente do arquivo .env
const dotenv = require("dotenv").config();

// Função assíncrona para armazenar uma tarefa
async function storeTask(request, response) {
  // Extrai o email e telefone do corpo da requisição e os converte em um array
  const params = Array(request.body.inputEmail, request.body.inputTelefone);

  // Define a consulta SQL para inserir uma nova tarefa na tabela tasks
  const query = "INSERT INTO tasks(email,telefone) VALUES(?,?)";

  // Executa a consulta SQL com os parâmetros fornecidos
  connection.query(query, params, (err, results) => {
    // Verifica se a consulta foi bem-sucedida
    if (results) {
      // Retorna uma resposta com status 201 (Created) e um objeto JSON com mensagem de sucesso
      response.status(201).json({
        success: true,
        message: "Sucesso!",
        data: results,
      });
    } else {
      // Retorna uma resposta com status 400 (Bad Request) e um objeto JSON com mensagem de erro
      response.status(400).json({
        success: false,
        message: "Ops, deu problema!",
        data: err,
      });
    }
  });
}

// Exporta a função storeTask para que possa ser utilizada em outros módulos
module.exports = {
  storeTask,
};