let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)

function random(num1, num2){
    
    let num3 = Math.floor(Math.random() * 100)
    while (num3 < num1){
        num3 = Math.floor(Math.random() * 100)
        return num3  
    }
}
let num3 = random(num1, num2)
console.log(num1,num3,num2);
