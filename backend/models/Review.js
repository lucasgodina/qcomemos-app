const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	usuario: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	lugar: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
	comentario: { type: String, required: true },
	fecha: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
