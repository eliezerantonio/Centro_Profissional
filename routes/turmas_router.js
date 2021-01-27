const express = require('express');
const TurmaController = require("../controllers/TurmaController");
const router = express.Router();


router.get('/sistema/turma', TurmaController.index)

router.post('/sistema/turma/save', TurmaController.save)
router.get('/sistema/turma/edit/:id', TurmaController.edit)

router.post('/sistema/turma/update', TurmaController.update);


router.post('/sistema/turma/delete', TurmaController.delete);


module.exports = router;