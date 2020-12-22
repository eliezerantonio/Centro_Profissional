'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Turma extends Model {

        static associate(models) {

        }
    };
    Turma.init({
        descricao: DataTypes.STRING,
        sala: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Turma',
    });
    return Turma;
};