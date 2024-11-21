const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require('../Config/db');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define(
	'usuarios',
	{
		id_usuario: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
		},
		nombre_usuario: {
			type: DataTypes.STRING,
		},
		fecha_nacimiento: {
			type: DataTypes.DATE,
		},
		lugar_usuario: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: 'usuarios',
		hooks: {
			beforeCreate: (usuario, options) => {
				usuario.password = bcrypt.hashSync(usuario.password, 10);
			},
		},
	}
);

module.exports = Usuario; // Exporta solo el modelo
