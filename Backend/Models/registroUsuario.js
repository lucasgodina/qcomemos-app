const { Usuario, DataTypes } = require('./usuario');
const sequelize = require('../Config/db');
const RegistroUsuario = sequelize.define('registro_usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',
      key: 'id_usuario' // Nota: Cambié 'id' por 'id_usuario'
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El email no debe estar vacío.' },
      isEmail: { msg: 'El email debe ser válido.' }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'La contraseña no debe estar vacía.' },
      len: {
        args: [8, 100],
        msg: 'La contraseña debe tener entre 8 y 100 caracteres.'
      }
    }
  },
  confirm_password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'La confirmación de contraseña no debe estar vacía.' },
      len: {
        args: [8, 100],
        msg: 'La confirmación de contraseña debe tener entre 8 y 100 caracteres.'
      }
    }
  },
  nombre_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre no debe estar vacío.' },
      len: {
        args: [10, 100],
        msg: 'El nombre debe tener entre 10 y 100 caracteres.'
      }
    }
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: { msg: 'La fecha de nacimiento debe ser una fecha válida.' }
    }
  },
  lugar_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'La dirección no debe estar vacía.' }
    }
  }
});
RegistroUsuario.belongsTo(Usuario, { foreignKey: 'usuario_id' });
module.exports = RegistroUsuario;