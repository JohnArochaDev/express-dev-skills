const Car = require('../models/car')


module.exports = {
    index,
    show,
}

function index(req, res) {
    res.render('cars/index', {
      car: Car.getAll(),
  });
}

function show(req, res) {
  res.render('cars/show', {
      cars: Car.getOne(req.params.id),
  });
};
