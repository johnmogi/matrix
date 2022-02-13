class Car{
    constructor(color, speed){
        this.color = color
        this.speed = speed
    }
    test(){
        console.log(this.color, this.speed);
    }
}
class Race{
    
    arr = []

    constructor(car1, car2){
        this.arr = [car1, car2]
        // console.log(this.arr);
    }
    add(car){
        this.arr.push(car)
    }
    getWinner(){
        let result = 0
        for (let c in this.arr){
            console.log(c.speed);
            // result = c.speed
        }
        return result
    }
}
const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);


 const race = new Race(c1, c2);
race.add(c3);

// prints: And the winner is... green
console.log(race.getWinner());