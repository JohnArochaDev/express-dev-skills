var express = require('express');
var router = express.Router();
var carCtrl = require('../controllers/cars')

router.get('/', carCtrl.index);

router.get('/new', carCtrl.new);

router.get('/:id', carCtrl.show);

router.get('/:id/edit', carCtrl.edit);

router.post('/', carCtrl.create);

router.delete('/:id', carCtrl.delete);

router.put('/:id', carCtrl.update);

module.exports = router;