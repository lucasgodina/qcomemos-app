const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta para servir los archivos estáticos de CSS desde la carpeta 'frontend/css'
router.use('/css', express.static(path.join(__dirname, '../css')));

// Ruta para servir los archivos estáticos de imágenes desde la carpeta 'frontend/imagenes'
router.use('/imagenes', express.static(path.join(__dirname, '../imagenes')));

// Ruta para servir el archivo home.html desde 'frontend/view'
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../html/home.html'));
});

// Ruta para servir el archivo login.html desde 'frontend/login'
router.get('/login.html', (req, res) => {
	res.sendFile(path.join(__dirname, '../html/login.html'));
});

// Ruta para servir el archivo lugares.html desde 'frontend/lugares'
router.get('/lugares.html', (req, res) => {
	res.sendFile(path.join(__dirname, '../html/lugares.html'));
});

// Ruta para servir el archivo registro.html desde 'frontend/registro'
router.get('/registro.html', (req, res) => {
	res.sendFile(path.join(__dirname, '../html/registro.html'));
});

// Ruta para servir el archivo favoritosAjustes.html desde 'frontend/favoritosAjustes'
router.get('/favoritosAjustes.html', (req, res) => {
	res.sendFile(path.join(__dirname, '../html/favoritosAjustes.html'));
});

// Ruta para servir el archivo agregarlugar.html desde 'frontend/agregarlugar'
router.get('/agregarlugar.html', (req, res) => {
	res.sendFile(path.join(__dirname, '../html/agregarlugar.html'));
});

module.exports = router;
