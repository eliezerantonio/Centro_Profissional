const express = require('express');
const alunoController = require("../controllers/AlunoController");
const router = express.Router();


router.get('/sistema/aluno', alunoController.index)

router.post('/sistema/aluno/save', alunoController.save)
router.get('/sistema/aluno/edit/:id', alunoController.edit)

router.post('/sistema/aluno/update', alunoController.update);

router.post('/sistema/aluno/delete/', alunoController.delete);


module.exports = router;