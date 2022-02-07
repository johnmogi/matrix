const https = require('https');
const url = require('url');

const myUrl = new url.URL('https://swapi.co/api/people/1');
const req = https.request(myUrl);

req.on('response', function(res) {
    console.log(res.statusCode);
    res.on('data', function(chunk){
        console.log(String(chunk));
    })
})

req.on('error', function(err) {
    console.log('ERROR: ', err);
})

