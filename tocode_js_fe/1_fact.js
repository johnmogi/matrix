function factorial(n){
    let res = 1
    for (let i = 1; i <= n; i++) {
        res *= i
    }
    return res
}
let x = factorial(4)
console.log(x);