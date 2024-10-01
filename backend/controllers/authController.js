const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
	const { nombre, email, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ nombre, email, password: hashedPassword });
		await user.save();
		res.status(201).json({ message: 'Usuario registrado exitosamente' });
	} catch (err) {
		res.status(500).json({ error: 'Error al registrar usuario' });
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ error: 'Usuario no encontrado' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: 'Contraseña incorrecta' });
		}

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});
		res.cookie('token', token, { httpOnly: true });
		res.json({ message: 'Inicio de sesión exitoso' });
	} catch (err) {
		res.status(500).json({ error: 'Error al iniciar sesión' });
	}
};
