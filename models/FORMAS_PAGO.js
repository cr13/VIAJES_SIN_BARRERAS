/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FORMAS_PAGO', {
    ID_FORMA_PAGO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'FORMAS_PAGO',
    timestamps: false
  });
};
