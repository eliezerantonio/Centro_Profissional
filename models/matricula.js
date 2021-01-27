'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Matricula extends Model {

        static associate(models) {
            this.belongsTo(models.Aluno, {
                    foreignKey: 'alunoId',
                    targetKey: 'id',
                    as: 'Aluno'
                }),
                this.belongsTo(models.Turma, {
                    foreignKey: 'turmaId',
                    targetKey: 'id',
                    as: 'Turma'
                }),
                this.belongsTo(models.Periodo, {
                    foreignKey: 'periodoId',
                    targetKey: 'id',
                    as: 'Periodo'
                })
        }
    };
    Matricula.init({
        alunoId: DataTypes.INTEGER,
        turmaId: DataTypes.INTEGER,
        periodoId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Matricula',
    });
    return Matricula;
};