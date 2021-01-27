const express = require('express');
const PeriodoController = require("../controllers/PeriodoController");
const router = express.Router();


router.get('/sistema/periodo', PeriodoController.index)

router.post('/sistema/periodo/save', PeriodoController.save)
router.get('/sistema/periodo/edit/:id', PeriodoController.edit)

router.post('/sistema/periodo/update', PeriodoController.update);

router.post('/sistema/periodo/delete', PeriodoController.delete);


module.exports = router;