const express = require('express');
const router = express.Router();
const perguntaController = require('../controller/listaperguntas');

router.get('/', perguntaController.listarperguntas);
router.delete('/:id', perguntaController.deletarperguntas);

module.exports = router;