const connection = require("../config/db");
const dotenv = require("dotenv").config();

async function storefeed(request, response) {
  const params = Array(request.body.inputText);

  const query = "INSERT INTO feed(texto) VALUES(?)";

  connection.query(query, params, (err, results) => {
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

async function getFeed(request, response) {
  // Preparar o comando de execução no banco
  connection.query('SELECT * FROM feed', (err, results) => { 
      try {  // Tenta retornar as solicitações requisitadas
          if (results) {  // Se tiver conteúdo 
              response.status(200).json({
                  success: true,
                  message: 'Retorno de usuarios com sucesso!',
                  data: results
              });
          } else {  // Retorno com informações de erros
              response
                  .status(400)
                  .json({
                      success: false,
                      message: `Não foi possível retornar os usuários.`,
                      query: err.sql,
                      sqlMessage: err.sqlMessage
                  });
          }
      } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
          response.status(400).json({
              succes: false,
              message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
              query: err.sql,
              sqlMessage: err.sqlMessage
          })
      }   
  });
}

module.exports = {
  storefeed,
  getFeed
};
