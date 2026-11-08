const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/Cliente', clienteController.create);
router.get('/Cliente', clienteController.findAll);
router.get('/Cliente/:id', clienteController.findById)

module.exports = router;