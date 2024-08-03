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

module.exports = {
  storefeed,
};
