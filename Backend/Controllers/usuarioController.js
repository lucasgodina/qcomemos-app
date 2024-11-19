// usuarioController.js

//const express = require('express');
const Usuario = require('../Models/usuario');

exports.crearUsuario = async (req, res) => {
	try {
		console.log(req.body);
		const {
			email,
			password,
			confirm_password,
			nombre_usuario,
			fecha_nacimiento,
			lugar_usuario,
		} = req.body;

		// Verificar que las contraseñas coincidan
		if (password !== confirm_password) {
			return res.status(400).json({ error: 'Las contraseñas no coinciden' });
		}

		// Verificar que los campos obligatorios estén completados
		if (
			!email ||
			!password ||
			!nombre_usuario ||
			!fecha_nacimiento ||
			!lugar_usuario
		) {
			return res
				.status(400)
				.json({ error: 'Por favor, complete todos los campos obligatorios' });
		}

		const usuario = await Usuario.create({
			email,
			password,
			confirm_password,
			nombre_usuario,
			fecha_nacimiento,
			lugar_usuario,
		});

		res.status(201).json({ message: 'Usuario creado con éxito', usuario });
	} catch (error) {
		res.status(500).json({ message: 'Error al crear usuario', error });
	}
};
