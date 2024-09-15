// Archivo principal del servidor con configuración de Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./backend/routes/authRoutes');
const lugaresRoutes = require('./backend/routes/lugaresRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);

// Conexión a MongoDB
mongoose
	.connect('mongodb://localhost/qcomemos', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Conectado a MongoDB'))
	.catch((err) => console.log(err));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
