class Person{
    constructor(name){
        this.name = name
        this.age = 1
    }

    hello(){
        console.log(`Hi, my name is: ${this.name}, I am ${this.age} years old`);
    }
    growUp(){
        this.age = this.age +1
    }
}
const p1 = new Person('Mike');
const p2 = new Person('Jim');

// prints: My name is Mike and I am 1 years old
p1.hello();

p1.growUp();

// prints: My name is Mike and I am 2 years old
p1.hello();

// prints: My name is Jim and I am 1 years old
p2.hello();