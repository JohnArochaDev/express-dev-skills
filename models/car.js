const cars =  [
    {make: 'chevy', name: 'corvette', year: '1972', sexy: true},
    {make: 'ford', name: 'mustang', year: '1966', sexy: true},
    {make: 'mitsubishi' , name: 'eclipse', year: '1995', sexy: true},
    {make: 'toyota', name: 'prius', year: 'any', sexy: false},
    {make: 'datsun', name: '240z', year: '1972', sexy: true},
]

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    return cars
}

function getOne(id) {
    id = parseInt(id);
    return cars.find(cars => cars.id === id);
}
