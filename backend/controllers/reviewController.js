const Review = require('../models/Review');

exports.createReview = async (req, res) => {
	const { lugar, comentario } = req.body;
	const usuario = req.userId;

	try {
		const review = new Review({ usuario, lugar, comentario });
		await review.save();
		res.status(201).json({ message: 'Reseña creada exitosamente' });
	} catch (err) {
		res.status(500).json({ error: 'Error al crear reseña' });
	}
};

exports.getReviews = async (req, res) => {
	try {
		const reviews = await Review.find().populate('usuario').populate('lugar');
		res.json(reviews);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener reseñas' });
	}
};
