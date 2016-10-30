/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PROGRAMACION', {
    ID_PROGRAMACION: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IDHOTEL: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ID_EVENTO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FECHA_SALIDA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PRECIO: {
      type: 'DOUBLE',
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'PROGRAMACION'
  });
};
