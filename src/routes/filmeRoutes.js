const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.post('/Filme', filmeController.create);
router.get('/Filme', filmeController.findAll);
router.get('/Filme/:id', filmeController.findById)
router.put('/Filme/:id', filmeController.update)
router.delete('/Filme/:id', filmeController.delete)

module.exports = router;