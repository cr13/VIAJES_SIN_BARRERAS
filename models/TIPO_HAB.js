/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_HAB', {
    ID_TIPO_HAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'TIPO_HAB',
    timestamps: false
  });
};
