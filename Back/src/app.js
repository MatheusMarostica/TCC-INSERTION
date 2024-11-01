// Importa as bibliotecas necessárias
const express = require("express"); // Framework para criar aplicativos web
const dotenv = require("dotenv"); // Biblioteca para carregar variáveis de ambiente
const cors = require("cors"); // Biblioteca para habilitar CORS (Cross-Origin Resource Sharing)
const router = require("./routes/taskrouter"); // Importa o router para tasks
const feedrouter = require("./routes/feedrouter"); // Importa o router para feeds
const userRouter = require("./routes/userRouter"); // Importa o router para usuários
const loginRouter = require("./routes/loginRouter"); // Importa o router para login
const app = express(); // Cria uma instância do aplicativo Express

app.set("port", process.env.PORT || 3002);

// Habilita CORS para permitir requisições de origem cruzada
app.use(cors());

// Habilita o parse de JSON nos corpos das requisições
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
})

// Define as rotas do aplicativo
app.use("/api", router); // Rota para tasks
app.use("/api", feedrouter); // Rota para feeds
app.use("/api", userRouter); // Rota para usuários
app.use("/api", loginRouter); // Rota para login

// Exporta o aplicativo para que possa ser utilizado em outros módulos
module.exports = app;