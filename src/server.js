require("dotenv/config"); //le as variaveis de ambiente no .env e deixa disponivel na aplicação

const express = require("express");
const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
