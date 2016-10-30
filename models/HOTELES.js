/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOTELES', {
    IDHOTEL: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ID_MUNICIPIO: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DIRECCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TELEFONO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AFORO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'HOTELES'
  });
};
