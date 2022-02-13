function sum(num){
num = String(num)
let result = 0
for (let i = 0; i < num.length; i++) {
    result +=  parseInt(num[i])
//    console.log(num[i]);   
}
return result
}
let one =sum(123)
console.log(one);