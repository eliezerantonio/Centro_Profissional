const express = require('express');
const funcionarioController = require("../controllers/FuncionarioController");
const router = express.Router();


router.get('/sistema/funcionario', funcionarioController.index)

router.post('/sistema/funcionario/save', funcionarioController.save)
router.get('/sistema/funcionario/edit/:id', funcionarioController.edit)

router.post('/sistema/funcionario/update', funcionarioController.update);

router.post('/sistema/funcionario/delete/', funcionarioController.delete);


module.exports = router;