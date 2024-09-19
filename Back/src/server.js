const app = require("./app");
const port = app.get("port");

// Inicia o servidor e registra mensagem no console
app.listen(port, () => console.log(`Rodando na porta ${port}`));