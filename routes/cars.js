var express = require('express');
var router = express.Router();
var carCtrl = require('../controllers/cars')

router.get('/:id', carCtrl.show);

module.exports = router;