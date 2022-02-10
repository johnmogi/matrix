const cars = [ { name: 'c1', color: 'red', speed: 40 }, { name: 'c2', color: 'blue', speed: 20 }];

function getFastestCar(cars){
    let fastestCar = []
    for (const car of cars) {
        // how to compare the biggest value here? stuck...
      
        fastestCar = car.name 
    }
    return fastestCar
}
const fastestCar = getFastestCar(cars);

console.log(fastestCar) // should print c1

