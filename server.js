const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/listaperguntas');

const server = express();
const port = 3000;

server.use(bodyParser.json());

server.use('/listapergunta', routes);


server.listen(port, () => {
    console.log(`API do quiz rodando na porta: ${port}`);
});
