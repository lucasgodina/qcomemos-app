const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./Backend/Routes/userRoutes.js');
const viewRoutes = require('./Frontend/routes/viewRoutes.js'); // Importar las rutas de vistas
const sequelize = require('./Backend/Config/db.js');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el archivo home.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/home.html'));
});

// Ruta para servir el archivo login.html
app.get('/login.html', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/login.html'));
});

// Ruta para servir el archivo lugares.html
app.get('/lugares.html', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/lugares.html'));
});

// Ruta para servir el archivo registro.html
app.get('/registro.html', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/registro.html'));
});

app.get('/agregarlugar.html', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/agregarlugar.html'));
});

/*app.get('/registro.html', (req, res) => {
  res.sendFile(path.join(__dirname, './Frontend/html/home.html'));
});*/

app.get('/login.html', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/home.html'));
});

app.get('/favoritosAjustes.html', (req, res) => {
	res.sendFile(path.join(__dirname, './Frontend/html/favoritosAjustes.html'));
});

// Sirve la carpeta 'public' como estática (para archivos CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'Frontend/css')));
app.use(express.static(path.join(__dirname, 'Frontend/js')));
app.use(express.static(path.join(__dirname, 'Frontend/imagenes')));
//app.use('/html', express.static(path.join(__dirname, 'Frontend/html')));

// ...
// Rutas de vistas
app.use('/', viewRoutes);

// Rutas de la API
app.use('/api', userRoutes);

app.listen(3000, () => {
	console.log('Servidor escuchando en puerto 3000');
});

const PORT = 3000;

sequelize
	.sync()
	.then(() => {
		console.log('Base de datos sincronizada');
	})
	.catch((err) => console.error('Error al sincronizar la base de datos:', err));
