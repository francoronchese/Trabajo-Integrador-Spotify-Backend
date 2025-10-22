const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MetodoPago = sequelize.define(
  'MetodoPago',
  {
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_forma_pago: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    cbu: {
      type: DataTypes.STRING(50),
    },
    banco_codigo: {
      type: DataTypes.STRING(10),
    },
    nro_tarjeta_masc: {
      type: DataTypes.CHAR(4),
    },
    mes_caduca: {
      type: DataTypes.TINYINT,
    },
    anio_caduca: {
      type: DataTypes.SMALLINT,
    },
    id_forma_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'metodos_pago',
    timestamps: false,
  }
);

module.exports = MetodoPago;
