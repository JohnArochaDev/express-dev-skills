const cars =  [
    {    
    id: 1234,
    make: 'chevy',
    name: 'corvette',
    year: '1972',
    sexy: true
},
{
    id: 2345, 
    make: 'ford',
    name: 'mustang', 
    year: '1966', 
    sexy: true
},
{
    id: 3456, 
    make: 'mitsubishi' , 
    name: 'eclipse', 
    year: '1995', 
    sexy: true
},
{
    id: 4567, 
    make: 'toyota', 
    name: 'prius', 
    year: 'any', 
    sexy: false
},
{
    id: 5678, 
    make: 'datsun', 
    name: '240z', 
    year: '1972', 
    sexy: true
},
]

module.exports = {
    getAll,
    getOne,
    update,
    create,
    delete: deleteIt,
}

function getAll() {
    return cars;
}

function getOne(id) {
    id = parseInt(id);
    return cars.find(car => car.id === id);
}

function update(id, newCar) {
    id = parseInt(id);
    const car = cars.find(car => car.id === id);
    Object.assign(car, newCar)
}

function create(car) {
    car.id = Date.now() % 1000000;
    car.sexy = false;
    cars.push(car)
}

function deleteIt(id) {
    id = parseInt(id);
    const idx = cars.findIndex(car => car.id === id)
    cars.splice(idx, 1)
}