const TurmasServices = require("../services/TurmasServices");

class TurmasController {

    //FIND ALL
    async index(req, res) {

        const turmas = await TurmasServices.getAll();

        res.render('turma/turma', {
            turmas: turmas,
            descricao_msg: req.flash('descricao_msg'),
            sala_msg: req.flash('sala_msg', )
        })

    }

    //rota salvar artigo
    async save(req, res) {

        var { descricao, sala } = req.body;

        var turma = { descricao, sala }


        var result = await TurmasServices.save(turma);

        if (result == true) {
            res.redirect("/sistema/turma")
        } else {
            req.flash('descricao_msg', result.descricao_msg)
            req.flash('sala_msg', result.sala_msg)
            res.redirect('/sistema/turma');
        }


    }
    async edit(req, res) {

        var turma = await TurmasServices.getById(req.params.id);
        res.render('turma/edit', {
            turma,
            descricao_msg: req.flash('descricao_msg'),
            sala_msg: req.flash('sala_msg')
        });


    }

    async delete(req, res) {
        var id = req.body.id;

        await TurmasServices.delete(id);
        res.redirect("/sistema/turma")

    }

    async update(req, res) {


        var { descricao, sala, id } = req.body;

        var turma = { descricao, sala, id }


        var result = await TurmasServices.update(id, turma);

        if (result == true) {
            res.redirect("/sistema/turma")
        } else {
            req.flash('descricao_msg', result.descricao_msg)
            req.flash('sala_msg', result.sala_msg)
            res.redirect('/sistema/turma/edit/' + id);
        }


    }


}
module.exports = new TurmasController();