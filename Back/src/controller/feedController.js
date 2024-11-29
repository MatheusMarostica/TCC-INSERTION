const connection = require("../config/db");
const dotenv = require("dotenv").config();

async function getFeed(request, response) {
  const query = `
      SELECT feed.id, feed.texto, feed.user_id, user_table.nome
      FROM feed
      JOIN user_table ON feed.user_id = user_table.id
      ORDER BY feed.id DESC;
  `;

  connection.query(query, (err, results) => {
    try {
      if (results) {
        response.status(200).json({
          success: true,
          message: 'Retorno de posts com sucesso!',
          data: results
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Não foi possível retornar os posts.`,
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      }
    } catch (e) {
      response.status(400).json({
        success: false,
        message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    }
  });
}

async function storefeed(request, response) {
  const { inputText, userId } = request.body;
  const query = "INSERT INTO feed(texto, user_id) VALUES(?, ?)";

  connection.query(query, [inputText, userId], (err, results) => {
    if (results) {
      response.status(201).json({
        success: true,
        message: "Post criado com sucesso!",
        data: results,
      });
    } else {
      response.status(400).json({
        success: false,
        message: "Erro ao criar o post!",
        data: err,
      });
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
