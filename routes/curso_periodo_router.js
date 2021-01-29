const express = require('express');
const cursoperiodoController = require("../controllers/CursoPeriodoController");
const router = express.Router();


router.get('/sistema/curso_periodo', cursoperiodoController.index)

router.post('/sistema/curso_periodo/save', cursoperiodoController.save)
router.get('/sistema/curso_periodo/edit/:id', cursoperiodoController.edit)

router.post('/sistema/curso_periodo/update', cursoperiodoController.update);

router.post('/sistema/curso_periodo/delete/', cursoperiodoController.delete);


module.exports = router;