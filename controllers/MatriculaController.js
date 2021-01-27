const MatriculasServices = require("../services/MatriculasServices");
const AlunosServices = require("../services/AlunosServices");
const PeriodoServices = require("../services/PeriodosServices");
const TurmasServices = require("../services/TurmasServices");

class MatriculController {

    //FIND ALL
    async index(req, res) {

        const matriculas = await MatriculasServices.getAll();
        const alunos = await AlunosServices.getAll();
        const periodos = await PeriodoServices.getAll();
        const turmas = await TurmasServices.getAll();


        res.render('matricula/matricula', {
            matriculas,
            alunos,
            periodos,
            turmas,
            nome_msg: req.flash('nome_msg'),

        });

    }

    //rota salvar artigo
    async save(req, res) {

        var { alunoId, turmaId, periodoId } = req.body;

        var matricula = { alunoId, turmaId, periodoId }

        var aluno = await AlunosServices.getById(alunoId);
        if (aluno) {
            var result = await MatriculasServices.save(matricula);

            if (result == true) {
                res.redirect("/sistema/matricula")
            } else {
                // req.flash('nome_msg', result.nome_msg)

                res.redirect('/sistema/matricula');
            }
        } else {
            res.redirect('/sistema/matricula');
        }


    }
    async edit(req, res) {

        var matricula = await MatriculasServices.getById(req.params.id);
        res.render('matricula/edit', {
            matricula,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await MatriculasServices.delete(id);
        res.redirect("/sistema/matricula")

    }

    async update(req, res) {


        var { idAluno, idTurma, idPeriodo } = req.body;

        var matricula = { idAluno, idTurma, idPeriodo }

        var result = await MatriculasServices.update(id, matricula);

        if (result == true) {
            res.redirect("/sistema/matricula")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/matricula/edit/' + id);
        }
    }


}
module.exports = new MatriculController();