// factorial calc nodejs

function factorial(n){
    let res = 1
    for (let i = 0; i < n; i++) {
        res*= n
    }
    return res
}

let num2 = factorial(2)
console.log(num2);