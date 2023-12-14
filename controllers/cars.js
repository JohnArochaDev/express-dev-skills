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

function newCar(req, res) {
  res.render('cars/new')
};

function deleteCar(req, res) {
  Car.deleteIt(req.params.id)
  res.redirect('/cars')
};

function create(req, res) {
  Car.create(req.body)
  res.redirect('/cars')
};

function edit(req, res) {
  const car = Car.getOne(req.params.id);
  res.render('cars/edit', {
    title: 'Edit Cars',
    Car,
  });
};

function update(req, res) {
  Car.update(req.params.id, req.body);
  res.redirect(`/cars/${req.params.id}`)
};