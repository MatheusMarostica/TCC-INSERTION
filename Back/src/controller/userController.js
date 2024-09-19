// Importa o middleware JSON do Express
const { json } = require("express");

// Importa a conexão com o banco de dados
const connection = require("../config/db");

// Função assíncrona para criar um novo usuário
async function storeUser(request, response) {
  // Extrai os parâmetros do corpo da requisição e os converte em um array
  const params = Array(request.body.nome, request.body.email, request.body.senha);

  // Imprime os parâmetros no console para depuração
  console.log(params);

  // Define a consulta SQL para inserir um novo usuário na tabela user_table
  const query = "INSERT INTO user_table(nome, email, senha) VALUES(?,?,?);";

  // Executa a consulta SQL com os parâmetros fornecidos
  connection.query(query, params, (err, results) => {
    // Imprime o erro no console para depuração
    console.log("err", err);

    // Verifica se a consulta foi bem-sucedida
    if (results) {
      // Retorna uma resposta com status 201 (Created) e um objeto JSON com mensagem de sucesso
      response
        .status(201)
        .json({
          success: true,
          message: "User created successfully",
          data: results
        });
    } else {
      // Retorna uma resposta com status 201 (Created) e um objeto JSON com mensagem de erro
      response
        .status(201)
        .json({
          success: false,
          message: "User not created successfully",
          data: err
        });
    }
  });
}

// Função assíncrona para atualizar um usuário existente
async function atualizarUser(request, response) {
  // Extrai os parâmetros do corpo da requisição e os converte em um array
  const params = Array(
    request.body.name,
    request.body.email,
    request.body.senha,
    request.body.id
  );

  // Define a consulta SQL para atualizar um usuário na tabela user_table
  const query = "UPDATE user_table SET  nome = ?, email = ?, senha = ? WHERE id = ?;";

  // Executa a consulta SQL com os parâmetros fornecidos
  connection.query(query, params, (err, results) => {
    // Imprime o erro no console para depuração
    console.log("err", err);

    // Verifica se a consulta foi bem-sucedida
    if (results) {
      // Retorna uma resposta com status 201 (Created) e um objeto JSON com mensagem de sucesso
      response
        .status(201)
        .json({
          success: true,
          message: "Deu bom no uptade",
          data: results
        });
    } else {
      // Retorna uma resposta com status 201 (Created) e um objeto JSON com mensagem de erro
      response
        .status(201)
        .json({
          success: false,
          message: "deu errado seu otario",
          data: err
        });
    }
  });
}

// Exporta as funções storeUser e atualizarUser para que possam ser utilizadas em outros módulos
module.exports = {
  storeUser,
  atualizarUser
}