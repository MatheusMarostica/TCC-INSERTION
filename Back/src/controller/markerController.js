// No backend, criar um novo arquivo markerController.js
const connection = require("../config/db");

async function saveMarker(request, response) {
    const { lat, lng, title, description, userId } = request.body;
    
    const query = "INSERT INTO markers (latitude, longitude, title, description, user_id) VALUES (?, ?, ?, ?, ?)";
    
    connection.query(query, [lat, lng, title, description, userId], (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Marcador salvo com sucesso!",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao salvar marcador",
                error: err
            });
        }
    });
}

module.exports = {
    saveMarker
};