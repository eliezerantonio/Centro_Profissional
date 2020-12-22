const Database = require("../models/index");
class CursosService {

    constructor() {
        this.Curso = Database["Curso"]
    }

    async getAll() {
        try {
            return await this.Curso.findAll();

        } catch (error) {

            return undefined;

        }
    }

    async getById(id) {
        try {
            return await this.Curso.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var Curso = await this.getById(id);
                Curso.nome = data.nome;

                await Curso.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a Curso";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {



        try {
            await this.Curso.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            errors.system_msg = "Não foi possivl editar a Curso";
            return errors;
        }


    }
    async save(Cursos) {

        var errors = {};

        var isValid = this.validate(Cursos, errors);
        if (isValid) {


            try {
                await this.Curso.create(Cursos);
                return true;
            } catch (error) {

                errors.system_msg = "Não foi possivl salvar a Curso";
                return errors;
            }
        } else {
            return errors;
        }
    }

    validate(Curso, errors) {
        var errorCount = 0;

        //title validation
        if (Curso.nome == undefined || Curso.nome == '') {
            errors.nome_msg = "Nome inválido!";
            errorCount++;
        } else {
            if (Curso.nome.length < 3) {
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

module.exports = new CursosService