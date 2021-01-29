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
            this.belongsTo(models.Periodo, {
                    foreignKey: 'periodoId',
                    targetKey: 'id',
                    as: 'Periodo'
                }),
                this.belongsTo(models.Curso, {
                    foreignKey: 'cursoId',
                    targetKey: 'id',
                    as: 'Curso'
                })
        }
    };
    CursoPeriodo.init({
        cursoId: DataTypes.INTEGER,
        periodoId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CursoPeriodo',
    });
    return CursoPeriodo;
};