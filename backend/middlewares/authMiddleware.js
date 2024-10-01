const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ error: 'Acceso denegado' });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decoded.userId;
		next();
	} catch (err) {
		res.status(401).json({ error: 'Token inválido' });
	}
};

module.exports = authMiddleware;
