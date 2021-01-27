const Database = require("../models/index");
class FuncionariosServices {

    constructor() {
        this.Funcionario = Database["Funcionario"]
    }

    async getAll() {
        try {
            return await this.Funcionario.findAll();

        } catch (error) {

            return undefined;

        }
    }

    async getById(id) {
        try {
            return await this.Funcionario.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var Funcionario = await this.getById(id);
                Funcionario.nome = data.nome;

                await Funcionario.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a Funcionario";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {



        try {
            await this.Funcionario.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            errors.system_msg = "Não foi possivl editar a Funcionario";
            return errors;
        }


    }
    async save(Funcionarios) {

        var errors = {};

        var isValid = this.validate(Funcionarios, errors);
        if (isValid) {


            try {
                await this.Funcionario.create(Funcionarios);
                return true;
            } catch (error) {

                errors.system_msg = "Não foi possivl salvar a Funcionario";
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(Funcionario, errors) {
        var errorCount = 0;

        //title validation
        if (Funcionario.nome == undefined || Funcionario.nome == '') {
            errors.nome_msg = "Nome inválido!";
            errorCount++;
        } else {
            if (Funcionario.nome.length < 3) {
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

module.exports = new FuncionariosServices