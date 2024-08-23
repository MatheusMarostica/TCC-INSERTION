const { json } = require("express");
const connection = require("../config/db");

async function storeUser(request, response) {
    const params = Array(request.body.nome, request.body.email, request.body.senha);
    console.log(params);

    const query = "INSERT INTO user_table(nome, email, senha) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        console.log("err", err)
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "User created successfully",
                    data: results
                })
        } else {
            response
                .status(201)
                .json({
                    success: false,
                    message: "User not created successfully",
                    data: err
                })
        }
    })
}

async function atualizarUser(request, response) {
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.senha,
        request.body.id
    );

    const query = "UPDATE user_table SET  nome = ?, email = ?, senha = ? WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        console.log("err", err)
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Deu bom no uptade",
                    data: results
                })
        } else {
            response
                .status(201)
                .json({
                    success: false,
                    message: "deu errado seu otario",
                    data: err
                })
        }
    })
}

module.exports = {
    storeUser,
    atualizarUser
}