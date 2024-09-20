import express from 'express';
// fix para _dirname, porque?

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDir = path.dirname(__dirname);

//servidor
const app = express(); // crea una instancia de express
app.set('port', 4000);
app.listen(app.get('port'));
console.log('Servidor escuchando en el puerto ', app.get('port'));

//configuracion de archivos estaticos
app.use(express.static(parentDir + '/backend/routes'));

//Utilización de css
app.use(express.static(parentDir + '/frontend/assets/css'));

//Utilización de imagenes
app.use(express.static(parentDir + '/frontend/assets/img'));

//rutas

app.get('/', (req, res) => {
	res.sendFile(parentDir + '/frontend/home.html');
});

app.get('/front', (req, res) => {
	res.sendFile(parentDir + '/frontend/login.html');
});
