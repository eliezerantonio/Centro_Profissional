'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CursoPeriodo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CursoPeriodo.init({
    idCurso: DataTypes.INTEGER,
    idPeriodo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CursoPeriodo',
  });
  return CursoPeriodo;
};