const FuncionariosServices = require("../services/FuncionariosServices");

class FuncionarioController {

    //FIND ALL
    async index(req, res) {

        const funcionarios = await FuncionariosServices.getAll();

        res.render('funcionario/funcionario', {
            funcionarios,
            nome_msg: req.flash('nome_msg'),

        })

    }

    //rota salvar artigo
    async save(req, res) {

        var { nome, email, password, nivel } = req.body;

        var funcionario = { nome, email, password, nivel }


        console.log(funcionario);


        var result = await FuncionariosServices.save(funcionario);

        if (result == true) {
            res.redirect("/sistema/funcionario")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/funcionario');
        }


    }
    async edit(req, res) {

        var funcionario = await FuncionariosServices.getById(req.params.id);
        res.render('funcionario/edit', {
            funcionario,
            nome_msg: req.flash('nome_msg'),

        });


    }

    async delete(req, res) {

        var id = req.body.id;

        await FuncionariosServices.delete(id);
        res.redirect("/sistema/funcionario")

    }

    login(req, res) {

        res.render("funcionario/login")

    }

    async update(req, res) {



        var { id, nome, bilhete, password, nivel } = req.body;

        var funcionario = { id, nome, bilhete, password, nivel }


        var result = await FuncionariosServices.update(id, funcionario);

        if (result == true) {
            res.redirect("/sistema/funcionario")
        } else {
            req.flash('nome_msg', result.nome_msg)

            res.redirect('/sistema/funcionario/edit/' + id);
        }


    }


}
module.exports = new FuncionarioController();