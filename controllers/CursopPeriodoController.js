const CursosPeriodoServices = require("../services/CursosPeriodoServices");

class CursoController {

    //FIND ALL
    async index(req, res) {

        const CursoPeriodo = await CursosPeriodoServices.getAll();

        res.render('cursoperido/cursoperiodo', {
            CursoPeriodo,
            nome_msg: req.flash('nome_msg'),

        })

    }

    //rota salvar artigo
    async save(req, res) {

        var { idPeriodo, idTurma } = req.body;

        var data = { idPeriodo, idTurma }


        var result = await CursosPeriodoServices.save(data);

        if (result == true) {
            res.redirect("/sistema/curso")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/curso');
        }


    }
    async edit(req, res) {

        var curso = await CursosPeriodoServices.getById(req.params.id);
        res.render('curso/edit', {
            curso,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await CursosPeriodoServices.delete(id);
        res.redirect("/sistema/curso")

    }

    async update(req, res) {


        var { nome, id, codigo, sigla } = req.body;

        var Curso = { nome, id, codigo, sigla }


        var result = await CursosPeriodoServices.update(id, Curso);

        if (result == true) {
            res.redirect("/sistema/curso")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/curso/edit/' + id);
        }


    }


}
module.exports = new CursoController();