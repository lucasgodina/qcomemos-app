const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../Config/db');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('usuarios', {
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  nombre_usuario: {
    type: DataTypes.STRING
  },
  fecha_nacimiento: {
    type: DataTypes.DATE
  },
  lugar_usuario: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'usuarios',
  hooks: {
    beforeCreate: (usuario, options) => {
      usuario.password = usuario.generateHash(usuario.password);
    }
  },
  instanceMethods: {
    validPassword: function(password) {
      return this.password === this.generateHash(password);
    },
    generateHash: function(password) {
      return bcrypt.hashSync(password, 10);
    }
  }
});

module.exports = { Usuario, DataTypes };