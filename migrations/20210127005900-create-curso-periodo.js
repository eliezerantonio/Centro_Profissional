'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('CursoPeriodos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            cursoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Cursos',
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
        await queryInterface.dropTable('CursoPeriodos');
    }
};