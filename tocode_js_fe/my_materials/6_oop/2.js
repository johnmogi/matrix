class Summer{
    constructor(){
        this.result = 0
    }
    add(num){
        this.result = this.result + num
    }
    getCurrentSum(){
        return this.result
    }
}
const s1 = new Summer();
const s2 = new Summer();

s1.add(10);
s1.add(20);

s2.add(30);

s2.add(5);

// prints 30
console.log(s1.getCurrentSum());

// prints 35
console.log(s2.getCurrentSum());