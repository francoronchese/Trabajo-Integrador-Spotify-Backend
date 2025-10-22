const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Genero = sequelize.define(
  'Genero',
  {
    id_genero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      unique: true,
    },
  },
  {
    tableName: 'generos',
    timestamps: false,
  }
);

module.exports = Genero;
