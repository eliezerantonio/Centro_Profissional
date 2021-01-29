const CursosPeriodoServices = require("../services/CursoPeriodoServices");
const CursosServices = require("../services/CursosServices");
const PeriodoServices = require("../services/PeriodosServices");

class CursoPeriodoController {

    //FIND ALL
    async index(req, res) {

        const cursoPeriodos = await CursosPeriodoServices.getAll();
        const cursos = await CursosServices.getAll();
        const periodos = await PeriodoServices.getAll();

        res.render('curso_periodo/curso_periodo', {
            cursoPeriodos,
            cursos,
            periodos,
            nome_msg: req.flash('nome_msg'),

        });

    }

    //rota salvar artigo
    async save(req, res) {

        var { periodoId, cursoId } = req.body;

        var data = { periodoId, cursoId }




        var result = await CursosPeriodoServices.save(data);

        if (result == true) {
            res.redirect("/sistema/curso_periodo")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/curso_periodo');
        }


    }
    async edit(req, res) {

        var curso = await CursosPeriodoServices.getById(req.params.id);
        res.render('curso_periodo/edit', {
            curso_periodo,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await CursosPeriodoServices.delete(id);
        res.redirect("/sistema/curso_periodo")

    }

    async update(req, res) {


        var { nome, id, codigo, sigla } = req.body;

        var Curso = { nome, id, codigo, sigla }


        var result = await CursosPeriodoServices.update(id, Curso);

        if (result == true) {
            res.redirect("/sistema/curso_periodo")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/curso_periodo/edit/' + id);
        }


    }


}
module.exports = new CursoPeriodoController();