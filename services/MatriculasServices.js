const Database = require("../models/index");
class MatriculasServices {

    constructor() {
        this.Matricula = Database["Matricula"]
        this.Turma = Database["Turma"]
        this.Aluno = Database["Aluno"]
        this.Periodo = Database["Periodo"]
    }

    async getAll() {
        try {
            const data =
                await this.Matricula.findAll({
                    include: [{
                        model: this.Aluno,
                        as: 'Aluno',
                    }, {
                        model: this.Turma,
                        as: 'Turma',
                    }, {
                        model: this.Periodo,
                        as: 'Periodo',
                    }, ],


                });

            return data;
        } catch (error) {

            console.log(error)

        }
    }

    async getById(id) {
        try {
            return await this.Matricula.findByPk(id);

        } catch (error) {

            return undefined;

        }
    }
    async update(id, data) {
        var errors = {};

        var isValid = this.validate(data, errors);
        if (isValid) {
            try {
                var Matricula = await this.getById(id);
                Matricula.nome = data.nome;

                await Matricula.save();
                return true;
            } catch (error) {
                errors.system_msg = "Não foi possivl editar a Matricula";
                return errors;
            }
        } else {
            return errors;
        }

    }
    async delete(id) {



        try {
            await this.Matricula.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            errors.system_msg = "Não foi possivl editar a Matricula";
            return errors;
        }


    }
    async save(matricula) {
        try {
            console.log(matricula);
            console.log("eliezer1")
            await this.Matricula.create(matricula);
            console.log("eliezer2")

            return true;
        } catch (error) {

            console.log(error);
        }
    }



}

module.exports = new MatriculasServices