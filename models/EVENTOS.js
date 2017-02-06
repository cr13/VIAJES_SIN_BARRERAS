/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EVENTOS', {
    ID_EVENTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TIPO_EVENTO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AFORO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMAGEN: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    BORRAR: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'EVENTOS',
    timestamps: false
  });
};
