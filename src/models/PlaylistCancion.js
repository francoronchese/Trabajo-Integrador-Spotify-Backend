const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlaylistCancion = sequelize.define(
  'PlaylistCancion',
  {
    id_playlist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_cancion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_agregada: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'playlists_canciones',
    timestamps: false,
  }
);

module.exports = PlaylistCancion;