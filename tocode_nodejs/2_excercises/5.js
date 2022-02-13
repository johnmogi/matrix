

const express = require('express')
const app = express();
app.listen(3000)

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

app.get('/primes', function (req,res){
    const primes = primeFactorsTo(1000)
    res.send(primes)
})

console.log('server runs at http://localhost:3000');