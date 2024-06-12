const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.inputEmail,
        request.body.inputTelefone
    );

    const query = "INSERT INTO tasks(email,telefone) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Ops, deu problema!",
                data: err
            })
        }
    })
}

module.exports = {
    storeTask
}