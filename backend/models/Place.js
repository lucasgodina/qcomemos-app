const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	direccion: { type: String, required: true },
	descripcion: { type: String, required: true },
	fotos: [String],
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
