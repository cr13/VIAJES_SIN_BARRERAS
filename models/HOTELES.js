/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOTELES', {
    IDHOTEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ID_MUNICIPIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MUNICIPIO',
        key: 'ID_MUNICIPIO'
      }
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BORRADO: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'HOTELES',
    timestamps: false
  });
};
