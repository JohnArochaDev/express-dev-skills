var express = require('express');
var router = express.Router();
var carCtrl = require('../controllers/cars')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Cars'})
});


router.get('/', carCtrl.index);

module.exports = router;