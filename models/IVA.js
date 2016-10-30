/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IVA', {
    ID_IVA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PORCIENTO: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'IVA'
  });
};
