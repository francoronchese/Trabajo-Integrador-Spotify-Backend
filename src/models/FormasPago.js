const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FormasPago = sequelize.define(
  'FormasPago',
  {
    id_forma_pago: {
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
    tableName: 'formas_pago',
    timestamps: false,
  }
);

module.exports = FormasPago;
