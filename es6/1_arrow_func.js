// function Person(name){
//     this.name = name
// }
// Person.prototype.hello = function(){
//     console.log('Hi, I am ' + this.name);

//     setTimeout(() => {
//         console.log(this.name);
//     }, 500);
// }

class Person{
    constructor(name){
        this.name = name
    }
    hello(){
        console.log(this.name);
    }

}
const p = new Person('John')
p.hello();


// const f = (x) => x * x 
// const k = function(x) { return x * x}

[2,4,6,8,10,11,13,14,15].filter(x => x % 2 === 0);
[2,4,6,8,10,11,13,14,15].map(x => x / 10 );