var express = require('express');
var router = express.Router();
const Car = require('../models/car')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Cars',
        car: Car.getAll(),
    });
});

module.exports = router;