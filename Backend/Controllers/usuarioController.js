// usuarioController.js

//const express = require('express');
const RegistroUsuario = require('../Models/registroUsuario');

class UsuarioController {
  async crearUsuario(req, res) {
    try {
      const { email, password, confirm_password, nombre_usuario, fecha_nacimiento, lugar_usuario } = req.body;

      // Verificar que las contraseñas coincidan
      if (password !== confirm_password) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
      }

      // Verificar que los campos obligatorios estén completados
      if (!email || !password || !nombre_usuario || !fecha_nacimiento || !lugar_usuario) {
        return res.status(400).json({ error: 'Por favor, complete todos los campos obligatorios' });
      }

      const usuario = await RegistroUsuario.create({
        email,
        password,
        confirm_password,
        nombre_usuario,
        fecha_nacimiento,
        lugar_usuario
      });

      res.status(201).json({ message: 'Usuario creado con éxito', usuario });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear usuario', error });
    }
  }
}

module.exports = UsuarioController;