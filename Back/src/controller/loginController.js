const connection = require("../config/db");

async function storelogin(request, response) {
    const { email, senha } = request.body;
    const params = [email, senha];
    console.log(params);

    // Correção da consulta SQL: Agora, estamos apenas selecionando os dados com base no email e senha
    const query = "SELECT * FROM user_table WHERE email = ? AND senha = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao executar a consulta:", err);
            return response
                .status(500)
                .json({
                    success: false,
                    message: "Erro ao conectar com o banco de dados",
                    data: err
                });
        }

        if (results.length > 0) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "User connected successfully",
                    data: results
                });
        } else {
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

module.exports = {
    storelogin
}
