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

//buscar id do post no feed
//usar como parametro para o delete
//query -> DELETE FROM feed WHERE id = ?

async function deleteFeed(request, response) {
  const postId = request.params.id;

  console.log(`Tentando excluir o post com ID: ${postId}`); // Log para debug

  const query = "DELETE FROM feed WHERE id = ?";

  connection.query(query, [postId], (err, results) => {
      if (err) {
          console.error("Erro ao excluir o post:", err); // Log detalhado do erro
          return response.status(500).json({
              success: false,
              message: "Erro ao excluir o post.",
              error: err.message
          });
      }

      console.log("Resultado da query:", results); // Log do resultado

      if (results.affectedRows === 0) {
          return response.status(404).json({
              success: false,
              message: "Post não encontrado.",
          });
      }

      response.status(200).json({
          success: true,
          message: "Post excluído com sucesso.",
          data: results
      });
  });
}

module.exports = {
  storefeed,
  getFeed,
  deleteFeed
};
