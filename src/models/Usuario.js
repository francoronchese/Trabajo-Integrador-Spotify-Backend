const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define(
  'Usuario',
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: {
        msg: 'Este email ya está registrado',
      },
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Debe ser un email válido',
        },
      },
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fecha_nac: {
      type: DataTypes.DATE,
    },
    sexo: {
      type: DataTypes.CHAR(1),
      validate: {
        isIn: {
          args: [['M', 'F']],
          msg: 'El sexo debe M(Masculino) o F(Femenino)',
        },
      },
    },
    cp: {
      type: DataTypes.STRING(10),
    },
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_ult_mod_password: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'usuarios',
    timestamps: false,
  }
);

module.exports = Usuario;
