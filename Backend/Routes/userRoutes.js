const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuarioController');

router.post('/usuario', usuarioController.crearUsuario);

module.exports = router;
