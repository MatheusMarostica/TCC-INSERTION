const app = require('./app')
require('dotenv').config()
const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
 
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            description: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3002" }],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};

const port = process.env.PORT || 3002
const taskRouter = require('./routes/taskrouter');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api', taskRouter)
 
app.listen(port, () => console.log(`Rodando na porta ${port}`))