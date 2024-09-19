// Importa a conexão com o banco de dados
const connection = require("../config/db");

// Função assíncrona para realizar login
async function storelogin(request, response) {
  // Extrai o email e senha do corpo da requisição
  const { email, senha } = request.body;

  // Cria um array com os parâmetros para a consulta SQL
  const params = [email, senha];

  // Imprime os parâmetros no console para depuração
  console.log(params);

  // Define a consulta SQL para selecionar os dados do usuário com base no email e senha
  const query = "SELECT * FROM user_table WHERE email = ? AND senha = ?;";

  // Executa a consulta SQL com os parâmetros fornecidos
  connection.query(query, params, (err, results) => {
    // Verifica se ocorreu um erro ao executar a consulta
    if (err) {
      // Imprime o erro no console para depuração
      console.error("Erro ao executar a consulta:", err);

      // Retorna uma resposta com status 500 (Internal Server Error) e um objeto JSON com mensagem de erro
      return response
        .status(500)
        .json({
          success: false,
          message: "Erro ao conectar com o banco de dados",
          data: err
        });
    }

    // Verifica se foram encontrados resultados
    if (results.length > 0) {
      // Retorna uma resposta com status 200 (OK) e um objeto JSON com mensagem de sucesso e os dados do usuário
      response
        .status(200)
        .json({
          success: true,
          message: "User connected successfully",
          data: results
        });
    } else {
      // Retorna uma resposta com status 401 (Unauthorized) e um objeto JSON com mensagem de erro
      response
        .status(401)
        .json({
          success: false,
          message: "Email ou senha incorretos",
          data: null
        });
    }
  });
}

// Exporta a função storelogin para que possa ser utilizada em outros módulos
module.exports = {
  storelogin
}