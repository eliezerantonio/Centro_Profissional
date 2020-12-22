const CursosServices = require("../services/CursosServices");

class CursoController {

    //FIND ALL
    async index(req, res) {

        const cursos = await CursosServices.getAll();

        res.render('curso/curso', {
            cursos,
            nome_msg: req.flash('nome_msg'),

        })

    }

    //rota salvar artigo
    async save(req, res) {

        var { nome, id, codigo, sigla } = req.body;

        var curso = { nome, id, codigo, sigla }


        var result = await CursosServices.save(curso);

        if (result == true) {
            res.redirect("/admin/curso")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/admin/curso');
        }


    }
    async edit(req, res) {

        var curso = await CursosServices.getById(req.params.id);
        res.render('curso/edit', {
            curso,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await CursosServices.delete(id);
        res.redirect("/admin/curso")

    }

    async update(req, res) {


        var { nome, id, codigo, sigla } = req.body;

        var Curso = { nome, id, codigo, sigla }


        var result = await CursosServices.update(id, Curso);

        if (result == true) {
            res.redirect("/admin/curso")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/admin/curso/edit/' + id);
        }


    }


}
module.exports = new CursoController();