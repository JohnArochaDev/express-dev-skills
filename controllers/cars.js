const Car = require('../models/car')

module.exports = {
    index
}







function index(req, res) {
    res.render('cars/index', {
      car: Car.getAll(),
      title: 'All To-Dos'
    });
  }