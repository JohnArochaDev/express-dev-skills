const Car = require('../models/car')


module.exports = {
    index,
    show,
    new: newCar,
    delete: deleteCar,
    create,
    edit,
    update,
};

function index(req, res) {
  res.render('cars/index', {
    cars: Car.getAll(),
  });
};

function show(req, res) {
  res.render('cars/show', {
    car: Car.getOne(req.params.id),
  });
};

function newCar() {
  
}

function deleteCar() {
  
}

function create() {
  
}

function edit() {
  
}

function update() {
  
}