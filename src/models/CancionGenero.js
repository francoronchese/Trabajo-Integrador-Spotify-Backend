const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CancionGenero = sequelize.define(
  'CancionGenero',
  {
    id_cancion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_genero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    tableName: 'canciones_genero',
    timestamps: false,
  }
);

module.exports = CancionGenero;
