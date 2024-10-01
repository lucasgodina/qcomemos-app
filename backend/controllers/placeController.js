const Place = require('../models/Place');

exports.createPlace = async (req, res) => {
	const { nombre, direccion, descripcion, fotos } = req.body;

	try {
		const place = new Place({ nombre, direccion, descripcion, fotos });
		await place.save();
		res.status(201).json({ message: 'Lugar creado exitosamente' });
	} catch (err) {
		res.status(500).json({ error: 'Error al crear lugar' });
	}
};

exports.getPlaces = async (req, res) => {
	try {
		const places = await Place.find();
		res.json(places);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener lugares' });
	}
};
