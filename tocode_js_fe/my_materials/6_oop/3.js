class Car {
    constructor(color, speed=0) {
      this.color = color;
      this.speed = speed;
    }
  
    drive(speed) {
      this.speed = speed;
    }
  
    isFasterThan(other) {
      return this.speed > other.speed;
    }
  }
  
  class Race {
    constructor(){
        this.listOfCars = []
    }
    addCars(car1, car2, car3){
        this.listOfCars = [car1, car2, car3]
    }
    winner(){
        let fastestCar = 0
        let winningCar = ''
        for (let car of this.listOfCars){
          if (car.speed > fastestCar ){
            winningCar = car.color
          }
          let name = winningCar
          return name
        }

  }
}
  const c1 = new Car('red');
  const c2 = new Car('blue', 50);
  const c3 = new Car('black');
  
  const race = new Race();
  race.addCars(c1, c2, c3);
  
  c1.drive(20);
  c3.drive(10);
//   console.log(race.listOfCars);
   const winningCar = race.winner();
console.log('And the winner is: ' + winningCar);