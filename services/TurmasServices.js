const Database = require("../models/index");
class TurmasService {

    constructor() {
        this.Turma = Database["Turma"]
    }

    async getAll() {
        try {
            return await this.Turma.findAll();

        } catch (error) {

            return undefined;

        }
    }

    async getById(id) {
        try {
            return await this.Turma.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var turma = await this.getById(id);
                turma.descricao = data.descricao;
                turma.sala = data.sala;
                await turma.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a turma";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {



        try {



            await this.Turma.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            errors.system_msg = "Não foi possivl Excluir a turma";
            return errors;
        }


    }
    async save(turmas) {

        var errors = {};

        var isValid = this.validate(turmas, errors);
        if (isValid) {


            try {
                await this.Turma.create(turmas);
                return true;
            } catch (error) {

                errors.system_msg = "Não foi possivl salvar a turma";
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(turma, errors) {
        var errorCount = 0;

        //title validation
        if (turma.descricao == undefined || turma.descricao === '') {
            errors.descricao_msg = "Descrição inválida!";
            errorCount++;
        } else {
            if (turma.descricao.length < 1) {
                errors.descricao_msg = "Descrição inválida!";
                errorCount++;
            }
        }

        if (turma.sala == undefined || turma.sala === '') {
            errors.sala_msg = "Sala inválida!";
            errorCount++;
        } else {
            if (turma.sala.length < 1) {
                errors.sala_msg = "Sala inválida!"
                errorCount++;
            }
        }



        if (errorCount == 0) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports = new TurmasService