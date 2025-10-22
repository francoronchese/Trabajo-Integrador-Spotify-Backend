const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoUsuario = sequelize.define(
  'TipoUsuario',
  {
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'free',
    },
  },
  {
    tableName: 'tipos_usuarios',
    timestamps: false,
  }
);

module.exports = TipoUsuario;
