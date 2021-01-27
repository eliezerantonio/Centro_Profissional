'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Matriculas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            alunoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Alunos',
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onD222222elete: 'CASCADE',
            },
            turmaId: {
                type: Sequelize.INTEGER,

                references: {
                    model: 'Turmas',
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            periodoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Periodos',
                    key: "id"
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Matriculas');
    }
};