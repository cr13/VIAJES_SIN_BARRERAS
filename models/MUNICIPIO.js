/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUNICIPIO', {
    ID_MUNICIPIO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ID_PROVINCIA: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'MUNICIPIO'
  });
};
