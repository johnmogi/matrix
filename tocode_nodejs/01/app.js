const express = require("express")

const app = express()
const url = 'http://localhost:3200/'

app.get('/', function (req,res){
    res.send('hello nodejs')
})
app.listen(3200)
console.log(`app running at ${url}`);
