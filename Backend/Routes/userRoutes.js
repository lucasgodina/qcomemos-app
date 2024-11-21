// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuarioController');

router.post('/usuario', usuarioController.crearUsuario);
//router.get('/usuario', usuarioController.getAllProducts);
//router.get('/usuario/:id', usuarioController.getProductById);
//router.put('/usuario/:id', usuarioController.updateProduct);
//router.delete('/usuario/:id', usuarioController.deleteProduct);

module.exports = router;
