const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const placeRoutes = require('./routes/placeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/reviews', reviewRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve assets
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));

// Define routes for HTML files
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/home.html'));
});

app.get('/agregarlugar', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/agregarlugar.html'));
});

app.get('/favoritosAjustes', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/favoritosAjustes.html'));
});

app.get('/formulario_reseña', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/formulario_reseña.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

app.get('/lugares', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/lugares.html'));
});

app.get('/register', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/register.html'));
});

// Use error handler
app.use(errorHandler);

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
