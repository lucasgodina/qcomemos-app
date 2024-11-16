const express = require('express');
const router = express.Router();
const UsuarioController = require('../Controllers/usuarioController');
const usuarioController = new UsuarioController();
//router.post('/api/registro', usuarioController.crearUsuario);
router.post('/api/registro', (req, res) => {
    const { email, password, confirm_password, nombre_usuario, fecha_nacimiento, lugar_usuario } = req.body;
  
    // Aquí debes implementar la lógica para guardar los datos en la base de datos
    // Por ejemplo, utilizando Sequelize:
    const usuario = new Usuario({
      email,
      password,
      confirm_password,
      nombre_usuario,
      fecha_nacimiento,
      lugar_usuario
    });
    usuario.save()
      .then(() => {
        res.send('Registro exitoso');
      })
      .catch((err) => {
        res.status(500).send('Error al registrar usuario');
      });
  });
module.exports = router;
