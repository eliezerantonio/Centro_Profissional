const Database = require("../models/index");
class AlunosServices {

    constructor() {
        this.Aluno = Database["Aluno"]
    }

    async getAll() {
        try {
            return await this.Aluno.findAll();

        } catch (error) {

            return undefined;

        }
    }

    async getById(id) {
        try {
            return await this.Aluno.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var Aluno = await this.getById(id);
                Aluno.nome = data.nome;

                await Aluno.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a Aluno";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {



        try {
            await this.Aluno.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            errors.system_msg = "Não foi possivl editar a Aluno";
            return errors;
        }


    }
    async save(Alunos) {

        var errors = {};

        var isValid = this.validate(Alunos, errors);
        if (isValid) {


            try {
                await this.Aluno.create(Alunos);
                return true;
            } catch (error) {

                errors.system_msg = "Não foi possivl salvar a Aluno";
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(Aluno, errors) {
        var errorCount = 0;

        //title validation
        if (Aluno.nome == undefined || Aluno.nome == '') {
            errors.nome_msg = "Nome inválido!";
            errorCount++;
        } else {
            if (Aluno.nome.length < 3) {
                errors.nome_msg = "Nome inválido!";
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

module.exports = new AlunosServices