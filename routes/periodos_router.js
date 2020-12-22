const express = require('express');
const PeriodoController = require("../controllers/PeriodoController");
const router = express.Router();


router.get('/admin/periodo', PeriodoController.index)

router.post('/admin/periodo/save', PeriodoController.save)
router.get('/admin/periodo/edit/:id', PeriodoController.edit)

router.post('/admin/periodo/update', PeriodoController.update);

router.post('/admin/periodo/delete', PeriodoController.delete);


module.exports = router;