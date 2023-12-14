const cars =  [
    {    
    id: 1234,
    name: '1972 chevy corvette',
    sexy: true
},
{
    id: 2345, 
    name: '1966 ford mustang', 
    sexy: true
},
{
    id: 3456,  
    name: '1995mitsubishi eclipse', 
    sexy: true
},
{
    id: 4567, 
    name: 'any toyota prius', 
    sexy: false
},
{
    id: 5678, 
    name: '1972 datsun 240z', 
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