const express = require('express');
const router = express.Router();
const Usuario = require('../Models/registroUsuario');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  Usuario.findOne({ where: { email } })
    .then(usuario => {
      if (!usuario) {
        res.status(401).send({ message: 'Correo o contraseña incorrectos' });
      } else {
        const isValidPassword = usuario.validPassword(password);
        if (!isValidPassword) {
          res.status(401).send({ message: 'Correo o contraseña incorrectos' });
        } else {
          req.session.usuario = usuario;
          res.redirect('/');
        }
      }
    })
    .catch(err => {
      res.status(500).send({ message: 'Error al iniciar sesión' });
    });
});

module.exports = router;