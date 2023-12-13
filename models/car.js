const cars =  [
    {make: 'chevy', name: 'corvette', year: '1972', sexy: true, id:1234},
    {make: 'ford', name: 'mustang', year: '1966', sexy: true, id:2345},
    {make: 'mitsubishi' , name: 'eclipse', year: '1995', sexy: true, id:3456},
    {make: 'toyota', name: 'prius', year: 'any', sexy: false, id:4567},
    {make: 'datsun', name: '240z', year: '1972', sexy: true, id:5678},
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
