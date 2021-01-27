const PeriodosServices = require("../services/PeriodosServices");
const PeriodoServices = require("../services/PeriodosServices");

class PeriodoController {

    //FIND ALL
    async index(req, res) {

        const periodos = await PeriodoServices.getAll();

        res.render('periodo/periodo', {
            periodos,
            nome_msg: req.flash('nome_msg'),

        })

    }

    //rota salvar artigo
    async save(req, res) {

        var { nome } = req.body;

        var periodo = { nome }


        var result = await PeriodoServices.save(periodo);

        if (result == true) {
            res.redirect("/sistema/periodo")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/periodo');
        }


    }
    async edit(req, res) {

        var periodo = await PeriodoServices.getById(req.params.id);
        res.render('periodo/edit', {
            periodo,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await PeriodosServices.delete(id);
        res.redirect("/sistema/periodo")

    }

    async update(req, res) {


        var { nome, id } = req.body;

        var periodo = { nome, id }


        var result = await PeriodoServices.update(id, periodo);

        if (result == true) {
            res.redirect("/sistema/periodo")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/periodo/edit/' + id);
        }


    }


}
module.exports = new PeriodoController();