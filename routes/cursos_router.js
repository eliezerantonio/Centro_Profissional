const express = require('express');
const cursoController = require("../controllers/CursoController");
const router = express.Router();


router.get('/sistema/curso', cursoController.index)

router.post('/sistema/curso/save', cursoController.save)
router.get('/sistema/curso/edit/:id', cursoController.edit)

router.post('/sistema/curso/update', cursoController.update);

router.post('/sistema/curso/delete/', cursoController.delete);


module.exports = router;