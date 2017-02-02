/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUNICIPIO', {
    ID_MUNICIPIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_PROVINCIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PROVINCIA',
        key: 'ID_PROVINCIA'
      }
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
    tableName: 'MUNICIPIO',
    timestamps: false
  });
};
