const express = require('express');
const matriculaController = require("../controllers/MatriculaController");
const router = express.Router();


router.get('/sistema/matricula', matriculaController.index)

router.post('/sistema/matricula/save', matriculaController.save)
router.get('/sistema/matricula/edit/:id', matriculaController.edit)

router.post('/sistema/matricula/update', matriculaController.update);

router.post('/sistema/matricula/delete/', matriculaController.delete);


module.exports = router;