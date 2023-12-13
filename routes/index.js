var express = require('express');
var router = express.Router();
var carCtrl = require('../controllers/cars')
const Car = require('../models/car')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Cars',
        car: Car.getAll(),
    
    })
});

router.get('/:id', carCtrl.show);

module.exports = router;