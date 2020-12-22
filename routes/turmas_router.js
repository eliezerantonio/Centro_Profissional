const express = require('express');
const TurmaController = require("../controllers/TurmaController");
const router = express.Router();


router.get('/admin/turma', TurmaController.index)

router.post('/admin/turma/save', TurmaController.save)
router.get('/admin/turma/edit/:id', TurmaController.edit)

router.post('/admin/turma/update', TurmaController.update);


router.post('/admin/turma/delete', TurmaController.delete);


module.exports = router;