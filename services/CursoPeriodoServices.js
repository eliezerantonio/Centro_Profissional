const Database = require("../models/index");
class CursoPeriodoServices {

    constructor() {
        this.CursoPeriodo = Database["CursoPeriodo"]
        this.Curso = Database["Curso"]
        this.Periodo = Database["Periodo"]
    }

    async getAll() {
        try {
            return await this.CursoPeriodo.findAll({
                include: [{
                    model: this.Curso,
                    as: 'Curso',
                }, {
                    model: this.Periodo,
                    as: 'Periodo',
                }, ],

            });

        } catch (error) {

            console.log(error);

        }
    }

    async getById(id) {
        try {
            return await this.CursoPeriodoPeriodo.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var CursoPeriodo = await this.getById(id);
                CursoPeriodo.nome = data.nome;

                await CursoPeriodo.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a CursoPeriodo";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {



        try {
            await this.CursoPeriodo.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            errors.system_msg = "Não foi possivl editar a CursoPeriodo";
            return errors;
        }


    }
    async save(CursoPeriodos) {
        var errors = {};

        var isValid = this.validate(CursoPeriodos, errors);
        if (!isValid) {
            try {
                await this.CursoPeriodo.create(CursoPeriodos);
                return true;
            } catch (error) {

                errors.system_msg = "Não foi possivl salvar a CursoPeriodo";
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(CursoPeriodo, errors) {
        var errorCount = 0;

        //title validation
        if (CursoPeriodo.nome == undefined || CursoPeriodo.nome == '') {
            errors.nome_msg = "Nome inválido!";
            errorCount++;
        } else {
            if (CursoPeriodo.nome.length < 1) {
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

module.exports = new CursoPeriodoServices