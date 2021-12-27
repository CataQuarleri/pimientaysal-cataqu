// express y router
const express = require('express');

const router = express.Router();

// controller
const controller = require('../controllers/mainController.js');


// rutas
router.get('/', controller.home);
router.get('/detalle/:id?', controller.details)

// exportar
module.exports = router;