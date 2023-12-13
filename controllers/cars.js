const Car = require('../models/car')


module.exports = {
    index,
    show,
}

function index(req, res) {
    res.render('cars/index', {
      cars: Car.getAll(),
  });
}

function show(req, res) {
  res.render('cars/show', {
      car: Car.getOne(req.params.id),
  });
};
