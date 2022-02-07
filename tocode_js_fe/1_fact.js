function factorial(n){
    let res = 1
    for (let i = 1; i <= n; i++) {
        res *= i
    }
    return res
}
let x = factorial(4)
console.log(x);

let i =99
while (i > 0){
    console.log(`${i} bottles of bear on the wall`);
    i--;
}
// f5, sources, filesystem - sinced edit from inspector!