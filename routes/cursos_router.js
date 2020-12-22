const express = require('express');
const cursoController = require("../controllers/CursoController");
const router = express.Router();


router.get('/admin/curso', cursoController.index)

router.post('/admin/curso/save', cursoController.save)
router.get('/admin/curso/edit/:id', cursoController.edit)

router.post('/admin/curso/update', cursoController.update);

router.post('/admin/curso/delete/', cursoController.delete);


module.exports = router;