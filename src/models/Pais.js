const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pais = sequelize.define(
  'Pais',
  {
    id_pais: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'paises',
    timestamps: false,
  }
);

module.exports = Pais;
