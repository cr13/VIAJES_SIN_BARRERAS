/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ALQUILER', {
    ID_ALQUILER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_PROGRAMACION: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ID_HAB: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ID_COMPRA: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ID_USUARIO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PRECIO_ENTRADA: {
      type: 'DOUBLE',
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'ALQUILER'
  });
};
