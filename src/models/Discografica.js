const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Discografica = sequelize.define(
  'Discografica',
  {
    id_discografica: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'discograficas',
    timestamps: false,
  }
);

module.exports = Discografica;
