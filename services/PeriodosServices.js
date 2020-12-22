const Database = require("../models/index");
class PeriodosService {

    constructor() {
        this.Periodo = Database["Periodo"]
    }

    async getAll() {
        try {
            return await this.Periodo.findAll();

        } catch (error) {

            return undefined;

        }
    }

    async getById(id) {
        try {
            return await this.Periodo.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var periodo = await this.getById(id);
                periodo.nome = data.nome;

                await periodo.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a Periodo";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {





        try {
            await this.Periodo.destroy({
                where: {
                    id: id
                }
            });

        } catch (error) {
            errors.system_msg = "Não foi possivl editar a Periodo";
            return errors;
        }


    }
    async save(Periodos) {

        var errors = {};

        var isValid = this.validate(Periodos, errors);
        if (isValid) {


            try {
                await this.Periodo.create(Periodos);
                return true;
            } catch (error) {

                errors.system_msg = "Não foi possivl salvar a Periodo";
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(Periodo, errors) {
        var errorCount = 0;

        //title validation
        if (Periodo.nome == undefined || Periodo.nome == '') {
            errors.nome_msg = "Nome inválido!";
            errorCount++;
        } else {
            if (Periodo.nome.length < 3) {
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

module.exports = new PeriodosService