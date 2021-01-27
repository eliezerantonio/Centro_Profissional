const AlunosServices = require("../services/AlunosServices");

class alunoController {

    //FIND ALL
    async index(req, res) {

        const alunos = await AlunosServices.getAll();

        res.render('aluno/aluno', {
            alunos,
            nome_msg: req.flash('nome_msg'),

        })

    }

    //rota salvar artigo
    async save(req, res) {

        var { nome, bilhete, telemovel, endereco } = req.body;

        var aluno = { nome, bilhete, telemovel, endereco }


        var result = await AlunosServices.save(aluno);

        if (result == true) {
            res.redirect("/admin/aluno")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/admin/aluno');
        }


    }
    async edit(req, res) {

        var aluno = await AlunosServices.getById(req.params.id);
        res.render('aluno/edit', {
            aluno,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await AlunosServices.delete(id);
        res.redirect("/admin/aluno")

    }

    async update(req, res) {



        var { nome, id, bilhete, telemovel, endereco } = req.body;

        var aluno = { id, nome, bilhete, telemovel, endereco }


        var result = await AlunosServices.update(id, aluno);

        if (result == true) {
            res.redirect("/admin/aluno")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/admin/aluno/edit/' + id);
        }


    }


}
module.exports = new alunoController();